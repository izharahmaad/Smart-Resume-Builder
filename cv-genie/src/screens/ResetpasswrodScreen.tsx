// src/screens/ResetPasswordScreen.tsx

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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ResetPasswordScreen = ({ navigation, route }: any) => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // 🚀 Final safe way to get email:
  const email = route?.params?.email ?? '';

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleResetPassword = async () => {
    if (!validatePassword(newPassword)) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters long');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // Check if reset token is valid (simulating Firebase's verification)
      const storedToken = await AsyncStorage.getItem(`resetToken:${email}`);
      if (!storedToken) {
        throw new Error('Reset link has expired or is invalid');
      }

      const { expiresAt } = JSON.parse(storedToken);
      if (Date.now() > expiresAt) {
        throw new Error('Reset link has expired');
      }

      // Update password in AsyncStorage
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      const updatedUsers = users.map((user: any) =>
        user.email === email ? { ...user, password: newPassword } : user
      );

      await AsyncStorage.setItem('users', JSON.stringify(updatedUsers));

      // Clear the reset token
      await AsyncStorage.removeItem(`resetToken:${email}`);

      Alert.alert('Password Reset', 'Your password has been reset successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      console.error('Password reset error:', error);
      Alert.alert(
        'Error',
        error instanceof Error ? error.message : 'Failed to reset password. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Icon */}
      <Ionicons
        name="lock-closed-outline"
        size={50}
        color="#007bff"
        style={{ marginBottom: 16 }}
      />

      {/* Title */}
      <Text style={styles.title}>Reset Password</Text>
      <Text style={styles.subtitle}>
        Enter your new password for {email ? email : 'your account'}
      </Text>

      {/* New Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.inputIconLeft} />
        <TextInput
          style={styles.input}
          placeholder="New Password (min 6 characters)"
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#555"
            style={styles.inputIconRight}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.inputIconLeft} />
        <TextInput
          style={styles.input}
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={hideConfirmPassword}
        />
        <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
          <Ionicons
            name={hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#555"
            style={styles.inputIconRight}
          />
        </TouchableOpacity>
      </View>

      {/* Reset Button */}
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handleResetPassword}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Reset Password</Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
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
    color: '#000',
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
});

export default ResetPasswordScreen;
