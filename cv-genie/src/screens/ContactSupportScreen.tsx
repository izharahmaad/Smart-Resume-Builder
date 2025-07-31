// src/screens/ContactSupportScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const ContactSupportScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would send to real API
      // Example: EmailJS, Firebase Function, Node.js API, etc.

      // Simulate network request:
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // After success:
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');

      Alert.alert('Success', 'Your message has been sent! We will contact you soon.');
    } catch (error) {
      Alert.alert('Error', 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#007bff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contact Support</Text>
      </View>

      {/* Form */}
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.contentContainer} keyboardShouldPersistTaps="handled">
          {/* Name */}
          <Text style={styles.label}>Name</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={20} color="#555" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              value={name}
              onChangeText={setName}
            />
          </View>

          {/* Email */}
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="#555" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          {/* Subject */}
          <Text style={styles.label}>Subject</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="document-text-outline" size={20} color="#555" style={{ marginRight: 8 }} />
            <TextInput
              style={styles.input}
              placeholder="Subject of your message"
              value={subject}
              onChangeText={setSubject}
            />
          </View>

          {/* Message */}
          <Text style={styles.label}>Message</Text>
          <View style={[styles.inputContainer, { height: 140, alignItems: 'flex-start', paddingTop: 12 }]}>
            <Ionicons name="chatbox-ellipses-outline" size={20} color="#555" style={{ marginRight: 8, marginTop: 4 }} />
            <TextInput
              style={[styles.input, { height: '100%', textAlignVertical: 'top' }]}
              placeholder="Type your message here..."
              multiline
              value={message}
              onChangeText={setMessage}
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            style={[styles.button, isSubmitting && styles.buttonDisabled]}
            onPress={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Send Message</Text>
            )}
          </TouchableOpacity>

          {/* Footer */}
          <Text style={styles.footer}>Our support team usually replies within 24 hours.</Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 35,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#555',
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: '#85c1f5',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
});

export default ContactSupportScreen;
