// src/screens/WelcomeScreen.tsx

import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Dimensions, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const { width } = Dimensions.get('window');

const tips: Array<{
  id: number;
  title: string;
  description: string;
  icon: 'trophy-outline' | 'chatbubbles-outline' | 'briefcase-outline';
  image: any;
}> = [
  {
    id: 1,
    title: 'Highlight Key Achievements',
    description:
      'Showcase your top achievements with numbers or results. This helps employers quickly see your impact and strengths.',
    icon: 'trophy-outline',
    image: require('../../assets/tip1.jpg'),
  },
  {
    id: 2,
    title: 'Use Active Language',
    description:
      'Make your resume sound dynamic! Begin each sentence with strong action verbs like “Led”, “Created”, “Improved”.',
    icon: 'chatbubbles-outline',
    image: require('../../assets/tip2.jpg'),
  },
  {
    id: 3,
    title: 'Tailor for Each Role',
    description:
      'Customize your resume to match the job. Carefully read the job posting and adjust your skills and experience to fit.',
    icon: 'briefcase-outline',
    image: require('../../assets/tip3.jpg'),
  },
];

const WelcomeScreen = ({ navigation }: any) => {
  const pagerRef = useRef<PagerView>(null);
  const [pageIndex, setPageIndex] = useState(0);

  const totalPages = tips.length + 1;

  const handleNext = () => {
    if (pageIndex < totalPages - 1) {
      pagerRef.current?.setPage(pageIndex + 1);
    } else {
      console.log('Get Started Pressed');
      navigation.navigate('Login'); // Go to Login
    }
  };

  const handleSkip = () => {
    console.log('Skip Pressed');
    navigation.navigate('Login'); // Go to Login from ANY page
  };

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
      <PagerView
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
        ref={pagerRef}
      >
        {/* Welcome Page */}
        <View style={styles.page} key="welcome">
          {/* Pill Header */}
          <View style={styles.appPill}>
            <Ionicons name="document-text-outline" size={20} color="#007bff" style={{ marginRight: 6 }} />
            <Text style={styles.appName}>Welcome to CV Genie</Text>
          </View>

          {/* PNG Image */}
          <Image
            source={require('../../assets/cv_image.png')}
            style={styles.headerImage}
            resizeMode="contain"
          />

          {/* Title */}
          <Text style={styles.welcomeTitle}>Build a Professional Resume for Free</Text>

          {/* Subtitle */}
          <Text style={styles.welcomeSubtitle}>
            Create your resume easily with our free builder and professional templates. Impress recruiters and land your dream job!
          </Text>
        </View>

        {/* Tips Pages */}
        {tips.map((tip) => (
          <View style={styles.page} key={tip.id}>
            {/* Vector Icon */}
            <Ionicons name={tip.icon} size={60} color="#007bff" style={styles.tipIcon} />

            {/* Rounded Image */}
            <Image source={tip.image} style={styles.tipImage} resizeMode="cover" />

            {/* Glass Card */}
            <BlurView intensity={50} style={styles.glassCard}>
              <Text style={styles.title}>{tip.title}</Text>
              <Text style={styles.subtitle}>{tip.description}</Text>
            </BlurView>
          </View>
        ))}
      </PagerView>

      {/* Bottom Buttons */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.buttonText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {pageIndex === totalPages - 1 ? 'Get Started' : 'Next'}
          </Text>
          <Ionicons
            name={pageIndex === totalPages - 1 ? 'checkmark-circle-outline' : 'arrow-forward-outline'}
            size={20}
            color="#fff"
            style={{ marginLeft: 8 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  pagerView: {
    flex: 1,
  },
  page: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  appPill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e6f0ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 10,
  },
  appName: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#007bff',
  },
  headerImage: {
    width: 220,
    height: 250,
    marginBottom: 25,
  },
  welcomeTitle: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: '#000000',
    marginBottom: 16,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#555555',
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 24,
    maxWidth: 340,
  },
  tipIcon: {
    marginBottom: 12,
  },
  tipImage: {
    width: '85%',
    height: 200,
    borderRadius: 16,
    marginBottom: 16,
  },
  glassCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 16,
    padding: 16,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#000000',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#333333',
    textAlign: 'center',
    lineHeight: 26,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  skipButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingVertical: 14,
    marginRight: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButton: {
    flex: 1,
    backgroundColor: '#007bff',
    paddingVertical: 14,
    marginLeft: 10,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default WelcomeScreen;
