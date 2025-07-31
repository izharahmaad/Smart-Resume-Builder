// src/screens/TipsScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  Dimensions,
  Animated,
  Appearance,
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const tips = [
  {
    id: 1,
    icon: 'file-account-outline',
    title: 'Structure Your CV',
    short: 'Organize your CV with clear sections.',
    details:
      'A professional CV typically includes: Personal Information, Professional Summary, Work Experience, Education, Skills, Certifications, Projects, Languages, and References. Use clear headings to make it easy to read.',
  },
  {
    id: 2,
    icon: 'calendar-clock',
    title: 'Use Reverse Chronological Order',
    short: 'List latest experiences first.',
    details:
      'For Work Experience and Education, start with the most recent and work backwards. This allows recruiters to see your latest and most relevant qualifications first.',
  },
  {
    id: 3,
    icon: 'file-certificate-outline',
    title: 'Highlight Education & Certifications',
    short: 'Emphasize academic background.',
    details:
      'For academic, scientific, and research-based CVs, your education and certifications take priority. Include degree names, institutions, dates, and honors or distinctions received.',
  },
  {
    id: 4,
    icon: 'format-list-text',
    title: 'Detailed Descriptions',
    short: 'Provide context for your experiences.',
    details:
      'Instead of just listing job titles, explain your responsibilities, accomplishments, and the impact of your work. For academic CVs, also include publications, conferences, grants, and research projects.',
  },
  {
    id: 5,
    icon: 'spellcheck',
    title: 'Proofread and Consistency',
    short: 'Maintain consistency throughout the document.',
    details:
      'Ensure uniform formatting, font usage, and spacing. Double-check spelling, grammar, and punctuation. A clean, consistent CV reflects attention to detail.',
  },
  {
    id: 6,
    icon: 'palette-outline',
    title: 'Professional Presentation',
    short: 'Keep the design elegant and formal.',
    details:
      'Avoid overly colorful templates or decorative fonts. Use a simple, professional style with sufficient white space and logical flow.',
  },
  {
    id: 7,
    icon: 'translate',
    title: 'Language and Tone',
    short: 'Use formal and professional language.',
    details:
      'CVs should avoid slang or informal phrases. Write in a formal tone and focus on clarity. Use past tense for previous roles and present tense for current activities.',
  },
  {
    id: 8,
    icon: 'cloud-upload-outline',
    title: 'Keep It Updated',
    short: 'Regularly add new skills and experiences.',
    details:
      'Update your CV frequently to include new skills, certifications, and achievements. An up-to-date CV is always ready for opportunities.',
  },
];

const TipsScreen = () => {
  const navigation = useNavigation();
  const [selectedTip, setSelectedTip] = useState<any>(null);
  const [completedTips, setCompletedTips] = useState<number[]>([]);
  const [modalOpacity] = useState(new Animated.Value(0));

  const colorScheme = Appearance.getColorScheme();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const handleOpenTip = (tip: any) => {
    setSelectedTip(tip);
    if (!completedTips.includes(tip.id)) {
      setCompletedTips((prev) => [...prev, tip.id]);
    }
    Animated.timing(modalOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.timing(modalOpacity, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setSelectedTip(null);
    });
  };

  const completedCount = completedTips.length;
  const progressPercent = (completedCount / tips.length) * 100;

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={[styles.container, colorScheme === 'dark' && { backgroundColor: '#111' }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="chevron-back" size={26} color="#007bff" />
        </TouchableOpacity>
        <View style={styles.headerCenter}>
          <Ionicons name="bulb-outline" size={22} color="#007bff" style={{ marginRight: 6 }} />
          <Text style={styles.headerTitle}>CV Tips</Text>
        </View>
        <View style={{ width: 30 }} />
      </View>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>
          You have completed {completedCount} of {tips.length} tips ({Math.round(progressPercent)}%)
        </Text>
        <View style={styles.progressBarBackground}>
          <View style={[styles.progressBarFill, { width: `${progressPercent}%` }]} />
        </View>
      </View>

      {/* Tips List */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {tips.map((tip) => (
          <TouchableOpacity
            key={tip.id}
            style={styles.tipCard}
            onPress={() => handleOpenTip(tip)}
          >
            <MaterialCommunityIcons
              name={tip.icon as keyof typeof MaterialCommunityIcons.glyphMap}
              size={36}
              color="#007bff"
              style={styles.tipIcon}
            />
            <View style={styles.tipTextContainer}>
              <Text style={styles.tipTitle}>{tip.title}</Text>
              <Text style={styles.tipShort}>{tip.short}</Text>
            </View>
            {completedTips.includes(tip.id) ? (
              <Ionicons name="checkmark-circle" size={24} color="#28a745" />
            ) : (
              <Ionicons name="chevron-forward" size={20} color="#999" />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Tip Details Modal */}
      {selectedTip && (
        <Modal transparent animationType="none" visible={!!selectedTip} onRequestClose={handleCloseModal}>
          <Animated.View
            style={[
              styles.modalBackground,
              { opacity: modalOpacity },
            ]}
          >
            <View style={styles.modalContent}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>{selectedTip.title}</Text>
                <TouchableOpacity onPress={handleCloseModal}>
                  <Ionicons name="close" size={26} color="#007bff" />
                </TouchableOpacity>
              </View>
              <ScrollView>
                <Text style={styles.modalDetails}>{selectedTip.details}</Text>
              </ScrollView>
            </View>
          </Animated.View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
    elevation: 4,
  },
  backButton: {
    padding: 4,
  },
  headerCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#333',
  },
  progressContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#333',
    marginBottom: 6,
  },
  progressBarBackground: {
    width: '100%',
    height: 8,
    backgroundColor: '#eee',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#007bff',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 30,
  },
  tipCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  tipIcon: {
    marginRight: 16,
  },
  tipTextContainer: {
    flex: 1,
  },
  tipTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#222',
    marginBottom: 4,
  },
  tipShort: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
    lineHeight: 18,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContent: {
    width: '100%',
    maxHeight: Dimensions.get('window').height * 0.65,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  modalTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#333',
    flex: 1,
    paddingRight: 10,
  },
  modalDetails: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    lineHeight: 22,
  },
});

export default TipsScreen;
