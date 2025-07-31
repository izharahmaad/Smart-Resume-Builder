// src/screens/AccountSettingsScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useIsFocused } from '@react-navigation/native';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

// ✅ Define UserProfile type
type UserProfile = {
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  imageUri?: string | null;
};

const AccountSettingsScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [imageUri, setImageUri] = useState<string | null>(null);

  const isFocused = useIsFocused();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    loadProfile();
  }, [isFocused]);

  const loadProfile = async () => {
    try {
      const profileData = await AsyncStorage.getItem('userProfile');

      let profile: UserProfile = {};
      try {
        profile = profileData ? JSON.parse(profileData) : {};
      } catch (parseError) {
        console.log('Error parsing profileData:', parseError);
        profile = {};
      }

      setName(profile?.name ?? '');
      setEmail(profile?.email ?? '');
      setPhone(profile?.phone ?? '');
      setLocation(profile?.location ?? '');
      setImageUri(profile?.imageUri ?? null);
    } catch (error) {
      console.log('Error loading profile:', error);
      setName('');
      setEmail('');
      setPhone('');
      setLocation('');
      setImageUri(null);
    }
  };

  const saveProfile = async () => {
    try {
      const updatedProfile: UserProfile = {
        name,
        email,
        phone,
        location,
        imageUri,
      };
      await AsyncStorage.setItem('userProfile', JSON.stringify(updatedProfile));
      Alert.alert('Success', 'Profile updated successfully!', [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ]);
    } catch (error) {
      console.log('Error saving profile:', error);
      Alert.alert('Error', 'Could not save profile.');
    }
  };

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert('Permission Denied', 'Permission to access camera roll is required!');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="chevron-back-outline" size={24} color="#007bff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Account</Text>
        </View>

        {/* Profile Image */}
        <TouchableOpacity style={styles.avatarContainer} onPress={pickImage} activeOpacity={0.8}>
          <Image
            source={
              imageUri
                ? { uri: imageUri }
                : require('../../assets/placeholder-profile.png')
            }
            style={styles.avatar}
          />
          <View style={styles.changePhotoButton}>
            <Ionicons name="camera-outline" size={16} color="#fff" />
            <Text style={styles.changePhotoText}>Change Photo</Text>
          </View>
        </TouchableOpacity>

        {/* Name */}
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Phone */}
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        {/* Location */}
        <Text style={styles.label}>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your location"
          value={location}
          onChangeText={setLocation}
        />

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
          <Ionicons name="save-outline" size={20} color="#fff" style={{ marginRight: 6 }} />
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 40,
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
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#007bff',
  },
  changePhotoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    backgroundColor: '#007bff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  changePhotoText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    marginLeft: 6,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#555',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    marginBottom: 16,
    color: '#000',
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default AccountSettingsScreen;
