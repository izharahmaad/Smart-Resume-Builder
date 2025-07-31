import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Alert
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ActionSheet from 'react-native-actions-sheet';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const CreateProfileScreen = ({ navigation }: any) => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [gender, setGender] = useState<string>('Male');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [education, setEducation] = useState('');
  const [work, setWork] = useState('');

  const actionSheetRef = useRef<any>(null);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  const showActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const pickImageFromGallery = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Please allow access to your media library!');
      return;
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
    actionSheetRef.current?.hide();
  };

  const takePhotoWithCamera = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Please allow access to your camera!');
      return;
    }
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
    actionSheetRef.current?.hide();
  };

  const handleCreateProfile = async () => {
    if (!imageUri || !name || !age || !education || !work) {
      Alert.alert('Missing Information', 'Please fill out all fields and add an image.');
      return;
    }

    const profileData = {
      imageUri,
      gender,
      name,
      age,
      education,
      work,
    };

    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profileData));
      console.log('Profile saved locally.');
      Alert.alert('Success', 'Profile created and saved locally!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Failed to save profile:', error);
      Alert.alert('Error', 'Failed to save profile locally.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Create Profile</Text>

      <TouchableOpacity onPress={showActionSheet}>
        <Image
          source={imageUri ? { uri: imageUri } : require('../../assets/placeholder-profile.png')}
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.imageText}>{imageUri ? 'Image Selected' : 'Tap to upload image'}</Text>

      <Text style={styles.sectionLabel}>Gender</Text>
      <View style={styles.genderContainer}>
        {['Male', 'Female', 'Other'].map((option) => (
          <TouchableOpacity
            key={option}
            style={[styles.genderButton, gender === option && styles.genderButtonSelected]}
            onPress={() => setGender(option)}
          >
            <Text
              style={[styles.genderButtonText, gender === option && styles.genderButtonTextSelected]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput style={styles.input} placeholder="Your Name" value={name} onChangeText={setName} />
      <TextInput
        style={styles.input}
        placeholder="Your Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Your Education"
        value={education}
        onChangeText={setEducation}
      />
      <TextInput
        style={styles.input}
        placeholder="Your Work / Occupation"
        value={work}
        onChangeText={setWork}
      />

      <TouchableOpacity style={styles.button} onPress={handleCreateProfile}>
        <Text style={styles.buttonText}>Create Profile</Text>
      </TouchableOpacity>

      <ActionSheet ref={actionSheetRef} gestureEnabled>
        <View style={{ padding: 20 }}>
          <TouchableOpacity style={styles.sheetButton} onPress={pickImageFromGallery}>
            <Text style={styles.sheetButtonText}>Choose from Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sheetButton} onPress={takePhotoWithCamera}>
            <Text style={styles.sheetButtonText}>Take Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.sheetButton}
            onPress={() => actionSheetRef.current?.hide()}
          >
            <Text style={[styles.sheetButtonText, { color: '#ff4444' }]}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 8,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  imageText: {
    textAlign: 'center',
    color: '#28a745',
    fontFamily: 'Poppins_400Regular',
    marginBottom: 20,
  },
  sectionLabel: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    marginBottom: 8,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  genderButton: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    alignItems: 'center',
  },
  genderButtonSelected: {
    borderColor: '#007bff',
    backgroundColor: '#e6f0ff',
  },
  genderButtonText: {
    fontFamily: 'Poppins_400Regular',
    color: '#555',
  },
  genderButtonTextSelected: {
    color: '#007bff',
    fontFamily: 'Poppins_600SemiBold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 14,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  sheetButton: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sheetButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#007bff',
  },
});

export default CreateProfileScreen;
