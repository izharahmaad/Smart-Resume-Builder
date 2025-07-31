// src/screens/FAQScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
  Platform,
  UIManager,
  TextInput,
} from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

// Our FAQ Data
const faqData = [
  {
    question: 'What is CV Genie?',
    answer:
      'CV Genie is a modern app to help you create beautiful, professional CVs in minutes. Choose a template, enter your info, and export as PDF.',
    icon: 'document-text-outline',
  },
  {
    question: 'How secure is my data?',
    answer:
      'Your data is securely stored on your device. We do not collect or share your data externally. You remain in control at all times.',
    icon: 'lock-closed-outline',
  },
  {
    question: 'Can I edit my CV after saving?',
    answer:
      'Absolutely! You can edit any saved CV at any time and export updated versions.',
    icon: 'create-outline',
  },
  {
    question: 'How many CV templates are available?',
    answer:
      'We provide 50+ templates, with more being added regularly — modern, creative, professional, minimal styles.',
    icon: 'grid-outline',
  },
  {
    question: 'Are exported CVs watermarked?',
    answer:
      'No! Your exported CVs are clean and watermark-free. Ready to share with employers.',
    icon: 'checkmark-done-outline',
  },
  {
    question: 'How do I update my profile?',
    answer:
      'Go to Settings > My Account to update your profile picture, name, and email. Changes reflect across the app.',
    icon: 'person-circle-outline',
  },
  {
    question: 'How do I contact support?',
    answer:
      'You can contact us via Settings > Support or by emailing support@cvgenieapp.com. We usually respond within 24 hours.',
    icon: 'chatbubbles-outline',
  },
  {
    question: 'Is CV Genie free?',
    answer:
      'Core features are free. In the future, premium templates or features may be offered — optional, not required.',
    icon: 'pricetags-outline',
  },
  {
    question: 'Does CV Genie guarantee a job?',
    answer:
      'CV Genie helps you create great CVs, but we do not guarantee job placement. Your skills, experience, and interviews matter most!',
    icon: 'briefcase-outline',
  },
  {
    question: 'Can I create multiple CVs?',
    answer:
      'Yes! You can create and save multiple CVs for different industries or job roles.',
    icon: 'duplicate-outline',
  },
];

// Enable LayoutAnimation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const FAQScreen = ({ navigation }: any) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [searchText, setSearchText] = useState('');

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const toggleExpand = (index: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const filteredFaq = faqData.filter((item) =>
    item.question.toLowerCase().includes(searchText.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchText.toLowerCase())
  );

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
        <Text style={styles.headerTitle}>FAQ & Help Center</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" style={{ marginHorizontal: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search questions..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* FAQ Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {filteredFaq.length === 0 ? (
          <Text style={styles.noResults}>No matching questions found.</Text>
        ) : (
          filteredFaq.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.card}
              activeOpacity={0.8}
              onPress={() => toggleExpand(index)}
            >
              <View style={styles.cardHeader}>
                <Ionicons name={item.icon as any} size={24} color="#007bff" style={{ marginRight: 10 }} />
                <Text style={styles.question}>{item.question}</Text>
                <Ionicons
                  name={expandedIndex === index ? 'chevron-up-outline' : 'chevron-down-outline'}
                  size={20}
                  color="#999"
                  style={{ marginLeft: 'auto' }}
                />
              </View>

              {expandedIndex === index && (
                <View style={styles.cardBody}>
                  <Text style={styles.answer}>{item.answer}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))
        )}

        {/* Footer */}
        <Text style={styles.footer}>Need more help? Email support@cvgenieapp.com</Text>
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
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    margin: 16,
    borderWidth: 1,
    borderColor: '#eee',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 30,
  },
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#eee',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  question: {
    flex: 1,
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },
  cardBody: {
    marginTop: 10,
    paddingTop: 6,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  answer: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    lineHeight: 20,
    marginTop: 6,
  },
  footer: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  noResults: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default FAQScreen;
