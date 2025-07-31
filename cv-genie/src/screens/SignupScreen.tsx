// src/screens/SignupScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
  const [hideConfirmPassword, setHideConfirmPassword] = useState(true);
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

  const validatePassword = (password: string) => {
    return password.length >= 6;
  };

  const handleSignup = async () => {
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert('Invalid Password', 'Password must be at least 6 characters long');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Password Mismatch', 'Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      // Check if user already exists
      const existingUsers = await AsyncStorage.getItem('users');
      const users = existingUsers ? JSON.parse(existingUsers) : [];

      const userExists = users.some((user: any) => user.email === email);
      if (userExists) {
        Alert.alert('Error', 'An account with this email already exists');
        return;
      }

      // Add new user
      const newUser = { email, password };
      users.push(newUser);
      await AsyncStorage.setItem('users', JSON.stringify(users));

      // Store current user session
      await AsyncStorage.setItem('currentUser', JSON.stringify({ email }));

      Alert.alert('Success', 'Account created successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }
      ]);
    } catch (error) {
      console.error('Signup error:', error);
      Alert.alert('Error', 'Failed to create account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    console.log('Google Signup Pressed');
  };

  const handleFacebookSignup = () => {
    console.log('Facebook Signup Pressed');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="person-add-outline"
        size={50}
        color="#007bff"
        style={{ marginBottom: 16 }}
      />
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>Welcome to CV Genie</Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {validateEmail(email) && (
          <Ionicons name="checkmark-circle" size={20} color="green" style={styles.inputIcon} />
        )}
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password (min 6 characters)"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePassword}
        />
        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#555"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={hideConfirmPassword}
        />
        <TouchableOpacity onPress={() => setHideConfirmPassword(!hideConfirmPassword)}>
          <Ionicons
            name={hideConfirmPassword ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="#555"
            style={styles.inputIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Signup Button */}
      <TouchableOpacity 
        style={[styles.button, isLoading && styles.buttonDisabled]} 
        onPress={handleSignup}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Creating Account...' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      {/* Login link */}
      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Login')}
        >
          Log in
        </Text>
      </Text>

      {/* Social Signup */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={handleGoogleSignup} style={styles.socialButton}>
          <AntDesign name="google" size={24} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFacebookSignup} style={styles.socialButton}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
      </View>
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
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#007bff',
    marginBottom: 24,
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
  },
  inputIcon: {
    marginLeft: 10,
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
    marginBottom: 16,
  },
  link: {
    color: '#007bff',
    fontFamily: 'Poppins_600SemiBold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  socialButton: {
    backgroundColor: '#f5f5f5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});

export default SignupScreen;