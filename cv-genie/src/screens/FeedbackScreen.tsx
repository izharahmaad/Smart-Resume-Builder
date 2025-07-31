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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

const FeedbackScreen = ({ navigation }: any) => {
  const [feedbackText, setFeedbackText] = useState('');
  const [rating, setRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmitFeedback = () => {
    if (!selectedCategory) {
      Alert.alert('Select Category', 'Please select a feedback category.');
      return;
    }

    if (!feedbackText.trim()) {
      Alert.alert('Feedback Required', 'Please enter your feedback.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFeedbackText('');
      setRating(0);
      setSelectedCategory(null);
      Alert.alert('Thank you!', 'Your feedback has been submitted.');
      navigation.goBack();
    }, 1500);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity
          key={i}
          onPress={() => setRating(i)}
          activeOpacity={0.7}
        >
          <MaterialCommunityIcons
            name={i <= rating ? 'star' : 'star-outline'}
            size={28}
            color="#FFD700"
            style={{ marginHorizontal: 4 }}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  const categories = ['Bug Report', 'Feature Request', 'Compliment', 'Other'];

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
          <Text style={styles.headerTitle}>Feedback</Text>
        </View>

        {/* Experience */}
        <Text style={styles.mainTitle}>How was your experience?</Text>
        <View style={styles.starsContainer}>{renderStars()}</View>

        {/* Feedback Type */}
        <Text style={styles.sectionTitle}>Feedback Type</Text>
        <View style={styles.categoryContainer}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={[
                styles.categoryButton,
                selectedCategory === cat && styles.categoryButtonActive,
              ]}
              onPress={() => setSelectedCategory(cat)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === cat && styles.categoryTextActive,
                ]}
              >
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Feedback Input */}
        <Text style={styles.sectionTitle}>Your Feedback</Text>
        <View style={styles.feedbackCard}>
          <TextInput
            style={styles.feedbackInput}
            placeholder="Write your feedback here..."
            placeholderTextColor="#aaa"
            value={feedbackText}
            onChangeText={setFeedbackText}
            multiline
            numberOfLines={8}
            textAlignVertical="top"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={[
            styles.button,
            isSubmitting && styles.buttonDisabled,
          ]}
          onPress={handleSubmitFeedback}
          disabled={isSubmitting}
        >
          <Ionicons
            name="send-outline"
            size={20}
            color="#fff"
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            We really appreciate your time and support.
          </Text>
          <Text style={styles.footerVersion}>CV Genie v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 25,
  },
  contentContainer: {
    paddingHorizontal: 18,
    paddingVertical: 20,
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
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  mainTitle: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#007bff',
    marginBottom: 12,
    textAlign: 'center',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginBottom: 8,
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
  },
  categoryButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  categoryText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
  },
  categoryTextActive: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },
  feedbackCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 24,
  },
  feedbackInput: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    minHeight: 160,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '75%',
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
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 20,
  },
  footerText: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    textAlign: 'center',
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  footerVersion: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#bbb',
  },
});

export default FeedbackScreen;
