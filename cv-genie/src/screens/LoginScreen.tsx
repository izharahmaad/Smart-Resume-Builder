// src/screens/LoginScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons, AntDesign, FontAwesome } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hidePassword, setHidePassword] = useState(true);
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

  const handleLogin = async () => {
    if (email.trim() === '' || password.trim() === '') {
      Alert.alert('Error', 'Please enter email and password!');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    try {
      // Retrieve stored users
      const storedUsers = await AsyncStorage.getItem('users');
      const users = storedUsers ? JSON.parse(storedUsers) : [];

      // Find user with matching credentials
      const user = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (user) {
        // Store current user session
        await AsyncStorage.setItem('currentUser', JSON.stringify({ email }));
        
        Alert.alert('Success', 'Login successful!', [
          { text: 'OK', onPress: () => navigation.navigate('CreateProfile') }
        ]);
      } else {
        Alert.alert('Error', 'Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Error', 'Failed to login. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google');
    // Later: Add Google login
  };

  const handleFacebookLogin = () => {
    console.log('Continue with Facebook');
    // Later: Add Facebook login
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Icon */}
      <Ionicons
        name="log-in-outline"
        size={50}
        color="#007bff"
        style={{ marginBottom: 16 }}
      />

      {/* Title */}
      <Text style={styles.title}>Login into CV Genie</Text>
      <Text style={styles.subtitle}>Welcome back!</Text>

      {/* Email Input */}
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

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#555" style={styles.inputIconLeft} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
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

      {/* Forgot Password */}
      <TouchableOpacity
        style={{ alignSelf: 'flex-end', marginRight: 30, marginBottom: 16 }}
        onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text style={{ color: '#999', fontFamily: 'Poppins_400Regular' }}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity 
        style={[styles.button, isLoading && styles.buttonDisabled]} 
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Login</Text>
        )}
      </TouchableOpacity>

      {/* OR Divider */}
      <Text style={styles.orText}>OR</Text>

      {/* Social Icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity onPress={handleGoogleLogin} style={styles.socialIconButton}>
          <AntDesign name="google" size={24} color="#DB4437" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleFacebookLogin} style={styles.socialIconButton}>
          <FontAwesome name="facebook" size={24} color="#3b5998" />
        </TouchableOpacity>
      </View>

      {/* Signup link */}
      <Text style={styles.bottomText}>
        Don't have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('Signup')}
        >
          Sign up
        </Text>
      </Text>
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
    marginBottom: 4,
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
  orText: {
    fontSize: 14,
    color: '#888',
    marginVertical: 8,
    fontFamily: 'Poppins_400Regular',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  socialIconButton: {
    backgroundColor: '#f5f5f5',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 8,
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

export default LoginScreen;