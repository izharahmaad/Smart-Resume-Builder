// src/screens/FillInfoScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  ActivityIndicator
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Import templates
import { template1 } from '../templates/template1';
import { template2 } from '../templates/template2';
import { template3 } from '../templates/template3';
import { template4 } from '../templates/template4';
import { template5 } from '../templates/template5';
import { template6 } from '../templates/template6';
import { template7 } from '../templates/template7';
import { template8 } from '../templates/template8';
import { template9 } from '../templates/template9';
import { template10 } from '../templates/template10';
import { template11 } from '../templates/template11';
import { template12 } from '../templates/template12';
import { template13 } from '../templates/template13';
import { template14 } from '../templates/template14';
import { template15 } from '../templates/template15';
import { template16 } from '../templates/template16';
import { template17 } from '../templates/template17';
import { template18 } from '../templates/template18';
import { template19 } from '../templates/template19';
import { template20 } from '../templates/template20';
import { template21 } from '../templates/template21';
import { template22 } from '../templates/template22';
import { template23 } from '../templates/template23';
import { template24 } from '../templates/template24';
import { template25 } from '../templates/template25';
import { template26 } from '../templates/template26';
import { template27 } from '../templates/template27';
import { template28 } from '../templates/template28';
import { template29 } from '../templates/template29';
import { template30 } from '../templates/template30';
import { template31 } from '../templates/template31';
import { template32 } from '../templates/template32';
import { template33 } from '../templates/template33';
import { template34 } from '../templates/template34';
import { template35 } from '../templates/template35';
import { template36 } from '../templates/template36';
import { template37 } from '../templates/template37';
import { template38 } from '../templates/template38';
import { template39 } from '../templates/template39';
import { template40 } from '../templates/template40';
import { template41 } from '../templates/template41';
import { template42 } from '../templates/template42';
import { template43 } from '../templates/template43';
import { template44 } from '../templates/template44';
import { template45 } from '../templates/template45';
import { template46 } from '../templates/template46';
import { template47 } from '../templates/template47';
import { template48 } from '../templates/template48';
import { template49 } from '../templates/template49';
import { template50 } from '../templates/template50';


const templatesMap: { [key: string]: string } = {
  'template1.html': template1,
  'template2.html': template2,
  'template3.html': template3,
  'template4.html': template4,
  'template5.html': template5,
  'template6.html': template6,
  'template7.html': template7,
  'template8.html': template8,
  'template9.html': template9,
  'template10.html': template10,
  'template11.html': template11,
  'template12.html': template12,
  'template13.html': template13,
  'template14.html': template14,
  'template15.html': template15,
  'template16.html': template16,
  'template17.html': template17,
  'template18.html': template18,
  'template19.html': template19,
  'template20.html': template20,
  'template21.html': template21,
  'template22.html': template22,
  'template23.html': template23,
  'template24.html': template24,
  'template25.html': template25,
  'template26.html': template26,
  'template27.html': template27,
  'template28.html': template28,
  'template29.html': template29,
  'template30.html': template30,
  'template31.html': template31,
  'template32.html': template32,
  'template33.html': template33,
  'template34.html': template34,
  'template35.html': template35,
  'template36.html': template36,
  'template37.html': template37,
  'template38.html': template38,
  'template39.html': template39,
  'template40.html': template40,
  'template41.html': template41,
  'template42.html': template42,
  'template43.html': template43,
  'template44.html': template44,
  'template45.html': template45,
  'template46.html': template46,
  'template47.html': template47,
  'template48.html': template48,
  'template49.html': template49,
  'template50.html': template50,
  
};

const FillInfoScreen = ({ navigation, route }: any) => {
  const { templateFile, templatePreview, templateDisplayName, formData } = route.params;

  const [htmlTemplate, setHtmlTemplate] = useState<string>('');
  const [showProfileImageInput, setShowProfileImageInput] = useState(false);

  const [profileImageUri, setProfileImageUri] = useState(formData?.profileImageUri || '');
  const [name, setName] = useState(formData?.name || '');
  const [email, setEmail] = useState(formData?.email || '');
  const [phone, setPhone] = useState(formData?.phone || '');
  const [summary, setSummary] = useState(formData?.summary || '');
  const [skill1, setSkill1] = useState(formData?.skill1 || '');
  const [skill2, setSkill2] = useState(formData?.skill2 || '');
  const [skill3, setSkill3] = useState(formData?.skill3 || '');
  const [skill4, setSkill4] = useState(formData?.skill4 || '');
  const [experienceTitle, setExperienceTitle] = useState(formData?.experienceTitle || '');
  const [experienceDescription, setExperienceDescription] = useState(formData?.experienceDescription || '');
  const [educationTitle, setEducationTitle] = useState(formData?.educationTitle || '');
  const [educationDescription, setEducationDescription] = useState(formData?.educationDescription || '');
  const [linkedin, setLinkedin] = useState(formData?.linkedin || '');
  const [github, setGithub] = useState(formData?.github || '');
  const [language, setLanguage] = useState(formData?.language || '');
  const [hobby, setHobby] = useState(formData?.hobby || '');

  const [isLoading, setIsLoading] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    const html = templatesMap[templateFile];
    if (html && (html.includes('{{profile_image}}') || html.includes('{{photo}}'))) {
      setShowProfileImageInput(true);
    } else {
      setShowProfileImageInput(false);
    }
    setHtmlTemplate(html);
  }, [templateFile]);

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
      base64: true,
    });

    if (!result.canceled && result.assets.length > 0) {
      const asset = result.assets[0];
      const base64 = await FileSystem.readAsStringAsync(asset.uri, { encoding: 'base64' });
      setProfileImageUri(`data:image/jpeg;base64,${base64}`);
    }
  };

  const saveCVData = async () => {
    if (!email) {
      Alert.alert('Error', 'Email is required to save your CV data');
      return false;
    }

    setIsLoading(true);
    try {
      const cvData = {
        profileImageUri,
        name,
        email,
        phone,
        summary,
        skill1,
        skill2,
        skill3,
        skill4,
        experienceTitle,
        experienceDescription,
        educationTitle,
        educationDescription,
        linkedin,
        github,
        language,
        hobby,
        templateFile,
        templatePreview,
        templateDisplayName,
        lastUpdated: new Date().toISOString()
      };

      const existingCVsString = await AsyncStorage.getItem('userCVs');
      const existingCVs = existingCVsString ? JSON.parse(existingCVsString) : {};
      existingCVs[email] = cvData;
      await AsyncStorage.setItem('userCVs', JSON.stringify(existingCVs));
      return true;
    } catch (error) {
      console.error('Error saving CV data:', error);
      Alert.alert('Error', 'Failed to save CV data');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetCVData = async () => {
  Alert.alert(
    'Confirm Reset',
    'Are you sure you want to clear all saved CV data?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Reset',
        style: 'destructive',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('userCVs');
            setProfileImageUri('');
            setName('');
            setEmail('');
            setPhone('');
            setSummary('');
            setSkill1('');
            setSkill2('');
            setSkill3('');
            setSkill4('');
            setExperienceTitle('');
            setExperienceDescription('');
            setEducationTitle('');
            setEducationDescription('');
            setLinkedin('');
            setGithub('');
            setLanguage('');
            setHobby('');
            Alert.alert('Success', 'CV data has been reset.');
          } catch (error) {
            console.error('Error resetting data:', error);
            Alert.alert('Error', 'Failed to reset CV data.');
          }
        },
      },
    ]
  );
};

  const handlePreview = async () => {
    const saved = await saveCVData();
    if (saved) {
      navigation.navigate('CVEditor', {
        templateFile,
        templatePreviewPath: Image.resolveAssetSource(templatePreview).uri,
        templateDisplayName,
        formData: {
          profileImageUri,
          name,
          email,
          phone,
          summary,
          skill1,
          skill2,
          skill3,
          skill4,
          experienceTitle,
          experienceDescription,
          educationTitle,
          educationDescription,
          linkedin,
          github,
          language,
          hobby,
        },
      });
    }
  };

  useEffect(() => {
    const loadSavedData = async () => {
      if (email) {
        try {
          const existingCVsString = await AsyncStorage.getItem('userCVs');
          const existingCVs = existingCVsString ? JSON.parse(existingCVsString) : {};
          const savedData = existingCVs[email];

          if (savedData) {
            setProfileImageUri(savedData.profileImageUri || '');
            setName(savedData.name || '');
            setPhone(savedData.phone || '');
            setSummary(savedData.summary || '');
            setSkill1(savedData.skill1 || '');
            setSkill2(savedData.skill2 || '');
            setSkill3(savedData.skill3 || '');
            setSkill4(savedData.skill4 || '');
            setExperienceTitle(savedData.experienceTitle || '');
            setExperienceDescription(savedData.experienceDescription || '');
            setEducationTitle(savedData.educationTitle || '');
            setEducationDescription(savedData.educationDescription || '');
            setLinkedin(savedData.linkedin || '');
            setGithub(savedData.github || '');
            setLanguage(savedData.language || '');
            setHobby(savedData.hobby || '');
          }
        } catch (error) {
          console.error('Error loading saved data:', error);
        }
      }
    };

    loadSavedData();
  }, [email]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 100 }}>
      {/* Title */}
      <View style={styles.titleRow}>
  <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
    <Ionicons name="create-outline" size={24} color="#007bff" />
    <Text style={styles.title}>Fill Your CV Information</Text>
  </View>
  <TouchableOpacity onPress={handleResetCVData} style={styles.resetButton}>
    <Ionicons name="refresh-outline" size={22} color="#007bff" />
  </TouchableOpacity>
</View>



      {/* Profile Image Upload */}
      {showProfileImageInput && (
        <>
          <Text style={styles.sectionTitle}>Profile Picture</Text>
          <TouchableOpacity style={styles.imageUploadButton} onPress={handlePickImage}>
            {profileImageUri ? (
              <Image source={{ uri: profileImageUri }} style={styles.profileImage} />
            ) : (
              <>
                <Ionicons name="image-outline" size={24} color="#007bff" />
                <Text style={styles.imageUploadText}>Upload Profile Image</Text>
              </>
            )}
          </TouchableOpacity>
        </>
      )}

      {/* Basic Info */}
      <View style={styles.inputRow}>
        <Ionicons name="person-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="mail-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email *"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="call-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      {/* Social Links */}
      <Text style={styles.sectionTitle}>Social Links</Text>

      <View style={styles.inputRow}>
        <Ionicons name="logo-linkedin" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="LinkedIn URL"
          value={linkedin}
          onChangeText={setLinkedin}
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="logo-github" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="GitHub URL"
          value={github}
          onChangeText={setGithub}
          autoCapitalize="none"
          keyboardType="url"
        />
      </View>

      {/* Language */}
      <Text style={styles.sectionTitle}>Language</Text>
      <View style={styles.inputRow}>
        <Ionicons name="language-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Language"
          value={language}
          onChangeText={setLanguage}
          keyboardType="default"
        />
      </View>

      {/* Hobby */}
      <Text style={styles.sectionTitle}>Hobby</Text>
      <View style={styles.inputRow}>
        <Ionicons name="game-controller-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Hobby"
          value={hobby}
          onChangeText={setHobby}
          keyboardType="default"
        />
      </View>

      {/* The rest of your existing form continues as before... */}
      {/* Summary */}
      <Text style={styles.sectionTitle}>Summary</Text>
      <View style={styles.inputRow}>
        <Ionicons name="document-text-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { height: 60 }]}
          placeholder="Summary"
          value={summary}
          onChangeText={setSummary}
          multiline
        />
      </View>

      {/* Skills */}
      <Text style={styles.sectionTitle}>Skills</Text>
      {['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4'].map((placeholder, index) => {
        const setters = [setSkill1, setSkill2, setSkill3, setSkill4];
        const values = [skill1, skill2, skill3, skill4];
        return (
          <View style={styles.inputRow} key={index}>
            <Ionicons name="star-outline" size={20} color="#007bff" style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              value={values[index]}
              onChangeText={setters[index]}
              keyboardType="default"
            />
          </View>
        );
      })}

      {/* Experience */}
      <Text style={styles.sectionTitle}>Experience</Text>
      <View style={styles.inputRow}>
        <Ionicons name="briefcase-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Experience Title"
          value={experienceTitle}
          onChangeText={setExperienceTitle}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="document-text-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { height: 60 }]}
          placeholder="Experience Description"
          value={experienceDescription}
          onChangeText={setExperienceDescription}
          multiline
        />
      </View>

      {/* Education */}
      <Text style={styles.sectionTitle}>Education</Text>
      <View style={styles.inputRow}>
        <Ionicons name="school-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Education Title"
          value={educationTitle}
          onChangeText={setEducationTitle}
          keyboardType="default"
        />
      </View>

      <View style={styles.inputRow}>
        <Ionicons name="document-text-outline" size={20} color="#007bff" style={styles.inputIcon} />
        <TextInput
          style={[styles.input, { height: 60 }]}
          placeholder="Education Description"
          value={educationDescription}
          onChangeText={setEducationDescription}
          multiline
        />
      </View>

      {/* Preview Button */}
      <TouchableOpacity
        style={[styles.button, isLoading && styles.buttonDisabled]}
        onPress={handlePreview}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <>
            <Ionicons name="eye-outline" size={18} color="#fff" style={{ marginRight: 6 }} />
            <Text style={styles.buttonText}>Preview CV</Text>
          </>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginTop: 20,
    marginBottom: 8,
  },
   resetButton: {
   padding: 6,
   marginLeft: 8,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  inputIcon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
  imageUploadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginBottom: 16,
  },
  imageUploadText: {
    marginLeft: 8,
    color: '#007bff',
    fontFamily: 'Poppins_600SemiBold',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
});

export default FillInfoScreen;
