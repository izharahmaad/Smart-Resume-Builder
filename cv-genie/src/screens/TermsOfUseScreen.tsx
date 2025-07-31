// src/screens/TermsOfUseScreen.tsx

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

const TermsOfUseScreen = ({ navigation }: any) => {
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
        <Text style={styles.headerTitle}>Terms of Use</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Intro */}
        <Text style={styles.sectionTitle}>About this Agreement</Text>
        <Text style={styles.paragraph}>
          These Terms of Use explain your rights and obligations when using CV Genie. By using this app, you agree to follow these terms.
        </Text>

        {/* Section 1 */}
        <View style={styles.infoCard}>
          <Ionicons name="document-text-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>What is CV Genie?</Text>
            <Text style={styles.cardText}>
              CV Genie is a tool to create modern, professional CVs using pre-built templates and a simple editing experience.
            </Text>
          </View>
        </View>

        {/* Section 2 */}
        <View style={styles.infoCard}>
          <Ionicons name="lock-closed-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Privacy & Security</Text>
            <Text style={styles.cardText}>
              Your profile and CV data are stored locally on your device. We do not store, sell, or share your personal data externally.
            </Text>
          </View>
        </View>

        {/* Section 3 */}
        <View style={styles.infoCard}>
          <Ionicons name="create-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Usage Guidelines</Text>
            <Text style={styles.cardText}>
              You may use CV Genie for creating CVs for personal and professional purposes. Redistribution of templates is prohibited.
            </Text>
          </View>
        </View>

        {/* Section 4 */}
        <View style={styles.infoCard}>
          <Ionicons name="brush-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Templates Ownership</Text>
            <Text style={styles.cardText}>
              All templates in CV Genie are proprietary and protected by copyright. You may export your personal CVs but may not resell templates.
            </Text>
          </View>
        </View>

        {/* Section 5 */}
        <View style={styles.infoCard}>
          <Ionicons name="alert-circle-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Disclaimer</Text>
            <Text style={styles.cardText}>
              We do not guarantee any hiring outcomes. CV Genie is a tool to help present your qualifications professionally.
            </Text>
          </View>
        </View>

        {/* Section 6 */}
        <View style={styles.infoCard}>
          <Ionicons name="sync-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Changes to Terms</Text>
            <Text style={styles.cardText}>
              We may update these terms periodically. Continued use of the app means you accept the latest version.
            </Text>
          </View>
        </View>

        {/* Section 7 */}
        <View style={styles.infoCard}>
          <Ionicons name="chatbubble-ellipses-outline" size={26} color="#007bff" style={styles.icon} />
          <View style={{ flex: 1 }}>
            <Text style={styles.cardTitle}>Support</Text>
            <Text style={styles.cardText}>
              For questions or support, contact us anytime at support@cvgenieapp.com. We are happy to assist!
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
    paddingTop: 40,
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

export default TermsOfUseScreen;
