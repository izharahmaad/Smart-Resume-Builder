// src/screens/PrivacyPolicyScreen.tsx

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
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const PrivacyPolicyScreen = ({ navigation }: any) => {
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
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back-outline" size={24} color="#007bff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Privacy Policy</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Intro */}
        <Text style={styles.sectionTitle}>Your Privacy Matters</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy explains how CV Genie collects, uses, and protects your personal information.
        </Text>

        {/* Section 1 */}
        <View style={styles.infoCard}>
          <Ionicons name="person-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Data We Collect</Text>
            <Text style={styles.cardText}>
              We only collect data you provide directly in the app, such as your name, email, and CV content. No external data is collected.
            </Text>
          </View>
        </View>

        {/* Section 2 */}
        <View style={styles.infoCard}>
          <Ionicons name="lock-closed-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>How We Protect Your Data</Text>
            <Text style={styles.cardText}>
              All your CV data and profile information are stored securely on your device. We do not store your data on any external servers.
            </Text>
          </View>
        </View>

        {/* Section 3 */}
        <View style={styles.infoCard}>
          <Ionicons name="cloud-offline-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>No Third-Party Sharing</Text>
            <Text style={styles.cardText}>
              We do not share, sell, or transfer your data to any third parties. Your privacy is 100% respected.
            </Text>
          </View>
        </View>

        {/* Section 4 */}
        <View style={styles.infoCard}>
          <Ionicons name="create-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Control Over Your Data</Text>
            <Text style={styles.cardText}>
              You can edit or delete your profile and CVs anytime from within the app. You are always in control of your data.
            </Text>
          </View>
        </View>

        {/* Section 5 */}
        <View style={styles.infoCard}>
          <Ionicons name="refresh-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Policy Updates</Text>
            <Text style={styles.cardText}>
              If we update this policy, we will notify you in the app. Continued use means you accept the latest version.
            </Text>
          </View>
        </View>

        {/* Section 6 */}
        <View style={styles.infoCard}>
          <Ionicons name="chatbubble-ellipses-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Contact Us</Text>
            <Text style={styles.cardText}>
              For privacy-related questions, contact us at support@cvgenieapp.com. We’re here to help.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>© 2025 CV Genie. All rights reserved.</Text>
      </ScrollView>
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
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#007bff',
    marginBottom: 12,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    lineHeight: 22,
    marginBottom: 20,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  icon: {
    marginRight: 12,
    marginTop: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginBottom: 6,
  },
  cardText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    lineHeight: 20,
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    textAlign: 'center',
    marginTop: 30,
  },
});

export default PrivacyPolicyScreen;
