import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const AboutAppScreen = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back-outline" size={24} color="#007bff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>About This App</Text>
        </View>

        {/* App Name */}
        <Text style={styles.appName}>CV Genie</Text>
        <Text style={styles.appVersion}>Version 1.0.0</Text>

        {/* Description */}
        <Text style={styles.description}>
          CV Genie helps you create professional CVs in minutes using expertly
          designed templates.
        </Text>
        <Text style={styles.description}>
          With CV Genie, you can craft a standout CV that gets noticed by
          employers. Whether you're a student, professional, or creative, we
          provide the tools you need to succeed.
        </Text>

        {/* Features */}
        <Text style={styles.sectionTitle}>Key Features</Text>

        <View style={styles.featureItem}>
          <Ionicons
            name="document-text-outline"
            size={20}
            color="#007bff"
          />
          <Text style={styles.featureText}>50+ Modern CV Templates</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="color-palette-outline" size={20} color="#007bff" />
          <Text style={styles.featureText}>Customizable Design & Colors</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="cloud-upload-outline" size={20} color="#007bff" />
          <Text style={styles.featureText}>Save and Manage Multiple CVs</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="download-outline" size={20} color="#007bff" />
          <Text style={styles.featureText}>Export as PDF in One Tap</Text>
        </View>
        <View style={styles.featureItem}>
          <Ionicons name="shield-checkmark-outline" size={20} color="#007bff" />
          <Text style={styles.featureText}>Data Privacy & Security</Text>
        </View>

        {/* Our Mission */}
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.description}>
          Our goal is to empower everyone to create high-quality CVs quickly and
          easily. We believe in giving you the best tools to showcase your skills
          and land your dream job.
        </Text>

        {/* Navigation Links */}
        <Text style={styles.sectionTitle}>More Information</Text>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => navigation.navigate('PrivacyPolicy')}
        >
          <Ionicons
            name="shield-checkmark-outline"
            size={20}
            color="#007bff"
          />
          <Text style={styles.linkText}>Privacy Policy</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkRow}
          onPress={() => navigation.navigate('TermsOfUse')}
        >
          <Ionicons
            name="document-text-outline"
            size={20}
            color="#007bff"
          />
          <Text style={styles.linkText}>Terms of Use</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2025 CV Genie. All rights reserved.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  appName: {
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
    color: '#007bff',
    textAlign: 'center',
    marginBottom: 4,
  },
  appVersion: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#888',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    marginBottom: 12,
    lineHeight: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginTop: 20,
    marginBottom: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  featureText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  linkText: {
    marginLeft: 10,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#007bff',
  },
  footer: {
    alignItems: 'center',
    marginTop: 32,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
  },
});

export default AboutAppScreen;
