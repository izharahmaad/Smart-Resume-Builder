// src/screens/ForgotPasswordScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Mock Firebase auth functions
const mockSendPasswordResetEmail = async (email: string) => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  const storedUsers = await AsyncStorage.getItem('users');
  const users = storedUsers ? JSON.parse(storedUsers) : [];
  const userExists = users.some((user: any) => user.email === email);

  if (!userExists) {
    throw new Error('No user found with this email');
  }

  const resetToken = `mock-reset-token-${Date.now()}`;

  await AsyncStorage.setItem(`resetToken:${email}`, JSON.stringify({
    token: resetToken,
    expiresAt: Date.now() + 3600000
  }));

  return { email, resetToken };
};

const ForgotPasswordScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSendReset = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      const { email: sentEmail, resetToken } = await mockSendPasswordResetEmail(email);
      Alert.alert(
        'Reset Link Sent',
        `A password reset link has been sent to ${sentEmail}\n\n(Development Note: Reset token: ${resetToken})`,
        [
          { 
            text: 'OK', 
            onPress: () => navigation.navigate('ResetPassword', { email: sentEmail }) 
          }
        ]
      );
    } catch (error) {
      console.error('Password reset error:', error);
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      Alert.alert(
        'Error', 
        errorMessage === 'No user found with this email' 
          ? 'No account found with this email address' 
          : 'Failed to send reset link. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.innerContainer}>
            <Ionicons name="mail-open-outline" size={50} color="#007bff" style={{ marginBottom: 16 }} />

            <Text style={styles.title}>Forgot Password</Text>
            <Text style={styles.subtitle}>Enter your email to receive a reset link</Text>

            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color="#555" style={styles.inputIconLeft} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {validateEmail(email) && (
                <Ionicons name="checkmark-circle" size={20} color="green" style={styles.inputIconRight} />
              )}
            </View>

            <TouchableOpacity 
              style={[styles.button, isLoading && styles.buttonDisabled]} 
              onPress={handleSendReset}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Send Reset Link</Text>
              )}
            </TouchableOpacity>

            <Text style={styles.bottomText}>
              Remember your password?{' '}
              <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
                Login
              </Text>
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#888',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 50,
    fontFamily: 'Poppins_400Regular',
    paddingLeft: 8,
  },
  inputIconLeft: {
    marginRight: 8,
  },
  inputIconRight: {
    marginLeft: 8,
  },
  button: {
    backgroundColor: '#007bff',
    width: '90%',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: '#85c1f5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  bottomText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
    marginTop: 16,
  },
  link: {
    color: '#007bff',
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default ForgotPasswordScreen;
