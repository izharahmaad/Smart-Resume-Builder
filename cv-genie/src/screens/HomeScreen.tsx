// src/screens/HomeScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useIsFocused } from '@react-navigation/native';

// Import all template previews
const templatePreviews: { [key: string]: any } = {
  'template1.html': require('../../assets/template1-preview.jpg'),
  'template2.html': require('../../assets/template2-preview.jpg'),
  'template3.html': require('../../assets/template3-preview.jpg'),
  'template4.html': require('../../assets/template4-preview.jpg'),
  'template5.html': require('../../assets/template5-preview.jpg'),
  'template6.html': require('../../assets/template6-preview.jpg'),
  'template7.html': require('../../assets/template7-preview.jpg'),
  'template8.html': require('../../assets/template8-preview.jpg'),
  'template9.html': require('../../assets/template9-preview.jpg'),
  'template10.html': require('../../assets/template10-preview.jpg'),
  'template11.html': require('../../assets/template11-preview.jpg'),
  'template12.html': require('../../assets/template12-preview.jpg'),
  'template13.html': require('../../assets/template13-preview.jpg'),
  'template14.html': require('../../assets/template14-preview.jpg'),
  'template15.html': require('../../assets/template15-preview.jpg'),
  'template16.html': require('../../assets/template16-preview.jpg'),
  'template17.html': require('../../assets/template17-preview.jpg'),
  'template18.html': require('../../assets/template18-preview.jpg'),
  'template19.html': require('../../assets/template19-preview.jpg'),
  'template20.html': require('../../assets/template20-preview.jpg'),
  'template21.html': require('../../assets/template21-preview.jpg'),
  'template22.html': require('../../assets/template22-preview.jpg'),
  'template23.html': require('../../assets/template23-preview.jpg'),
  'template24.html': require('../../assets/template24-preview.jpg'),
  'template25.html': require('../../assets/template25-preview.jpg'),
  'template26.html': require('../../assets/template26-preview.jpg'),
  'template27.html': require('../../assets/template27-preview.jpg'),
  'template28.html': require('../../assets/template28-preview.jpg'),
  'template29.html': require('../../assets/template29-preview.jpg'),
  'template30.html': require('../../assets/template30-preview.jpg'),
  'template31.html': require('../../assets/template31-preview.jpg'),
  'template32.html': require('../../assets/template32-preview.jpg'),
  'template33.html': require('../../assets/template33-preview.jpg'),
  'template34.html': require('../../assets/template34-preview.jpg'),
  'template35.html': require('../../assets/template35-preview.jpg'),
  'template36.html': require('../../assets/template36-preview.jpg'),
  'template37.html': require('../../assets/template37-preview.jpg'),
  'template38.html': require('../../assets/template38-preview.jpg'),
  'template39.html': require('../../assets/template39-preview.jpg'),
  'template40.html': require('../../assets/template40-preview.jpg'),
  'template41.html': require('../../assets/template41-preview.jpg'),
  'template42.html': require('../../assets/template42-preview.jpg'),
  'template43.html': require('../../assets/template43-preview.jpg'),
  'template44.html': require('../../assets/template44-preview.jpg'),
  'template45.html': require('../../assets/template45-preview.jpg'),
  'template46.html': require('../../assets/template46-preview.jpg'),
  'template47.html': require('../../assets/template47-preview.jpg'),
  'template48.html': require('../../assets/template48-preview.jpg'),
  'template49.html': require('../../assets/template49-preview.jpg'),
  'template50.html': require('../../assets/template50-preview.jpg'),

  
};

const HomeScreen = ({ navigation }: any) => {
  const [userName, setUserName] = useState<string>('User');
  const [profileImageUri, setProfileImageUri] = useState<string | null>(null);
  const [savedCVs, setSavedCVs] = useState<any[]>([]);
  const isFocused = useIsFocused();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    loadProfile();
    loadSavedCVs();
  }, [isFocused]);

  const loadProfile = async () => {
    try {
      const profileData = await AsyncStorage.getItem('userProfile');
      if (profileData) {
        const profile = JSON.parse(profileData);
        setUserName(profile.name || 'User');
        setProfileImageUri(profile.imageUri || null);
      }
    } catch (error) {
      console.log('Error loading profile:', error);
    }
  };

  const loadSavedCVs = async () => {
    try {
      const saved = await AsyncStorage.getItem('savedCVs');
      const cvList = saved ? JSON.parse(saved) : [];
      setSavedCVs(cvList.reverse());
    } catch (error) {
      console.log('Error loading saved CVs:', error);
      Alert.alert('Error', 'Could not load saved CVs.');
    }
  };

  const handleViewCV = (cv: any) => {
    if (cv.pdfUri && cv.formData && cv.htmlContent) {
      navigation.navigate('CVEditor', {
        templateFile: cv.templateFile,
        templatePreview: getTemplatePreview(cv.templateFile),
        templateDisplayName: cv.templateDisplayName,
        formData: cv.formData,
        isSavedCV: true,
        htmlContent: cv.htmlContent,
        pdfUri: cv.pdfUri,
      });
    } else {
      Alert.alert('Error', 'This CV is incomplete or missing data.');
    }
  };

  const handleEditCV = (cv: any) => {
    navigation.navigate('FillInfo', {
      templateFile: cv.templateFile,
      templatePreview: getTemplatePreview(cv.templateFile),
      templateDisplayName: cv.templateDisplayName,
      formData: cv.formData || {},
    });
  };

  const handleDeleteCV = (cvIndex: number) => {
    Alert.alert(
      'Delete CV',
      'Are you sure you want to delete this CV?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const updatedCVs = [...savedCVs];
              updatedCVs.splice(cvIndex, 1);
              await AsyncStorage.setItem('savedCVs', JSON.stringify(updatedCVs.reverse()));
              setSavedCVs(updatedCVs);
              Alert.alert('Deleted', 'CV has been deleted.');
            } catch (error) {
              console.log('Error deleting CV:', error);
              Alert.alert('Error', 'Could not delete CV.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const handleCleanSavedCVs = () => {
    Alert.alert(
      'Clean Saved CVs',
      'Are you sure you want to delete ALL saved CVs?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete All',
          style: 'destructive',
          onPress: async () => {
            try {
              await AsyncStorage.removeItem('savedCVs');
              setSavedCVs([]);
              Alert.alert('Done', 'All saved CVs have been deleted.');
            } catch (error) {
              console.log('Error cleaning CVs:', error);
              Alert.alert('Error', 'Could not clean saved CVs.');
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const getTemplatePreview = (templateFile: string) => {
    return templatePreviews[templateFile] || require('../../assets/placeholder-profile.png');
  };

  const renderCVItem = ({ item, index }: any) => (
    <View style={styles.cvCard}>
      <Image
        source={getTemplatePreview(item.templateFile)}
        style={styles.cvImage}
      />
      <Text style={styles.cvTitle}>{item.templateDisplayName}</Text>
      <View style={styles.cvActions}>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleViewCV(item)}>
          <Ionicons name="eye-outline" size={20} color="#007bff" />
          <Text style={styles.actionText}>View</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleEditCV(item)}>
          <Ionicons name="create-outline" size={20} color="#007bff" />
          <Text style={styles.actionText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => handleDeleteCV(index)}>
          <Ionicons name="trash-outline" size={20} color="#ff4444" />
          <Text style={[styles.actionText, { color: '#ff4444' }]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.header}>
          <View>
            <Text style={styles.appTitle}>
              <Text style={{ color: '#007bff' }}>CV</Text> Genie
            </Text>
            <Text style={styles.welcomeText}>Welcome back, {userName} 👋</Text>
          </View>
          <TouchableOpacity>
            <Image
              source={
                profileImageUri
                  ? { uri: profileImageUri }
                  : require('../../assets/placeholder-profile.png')
              }
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Tips Card */}
        <TouchableOpacity style={styles.tipsCard} onPress={() => navigation.navigate('Tips')}>
          <View style={styles.tipsLeft}>
            <Ionicons name="bulb-outline" size={24} color="#007bff" />
            <Text style={styles.tipsText}>Tips for your CV</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#999" />
        </TouchableOpacity>

        {/* My CVs */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>My CVs</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={loadSavedCVs} style={{ marginRight: 12 }}>
              <Ionicons name="refresh-outline" size={22} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCleanSavedCVs}>
              <Ionicons name="trash-bin-outline" size={22} color="#ff4444" />
            </TouchableOpacity>
          </View>
        </View>

        {savedCVs.length === 0 ? (
          <Text style={styles.noCVText}>No CVs saved yet. Create your first CV!</Text>
        ) : (
          <FlatList
            data={savedCVs}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderCVItem}
            scrollEnabled={false}
          />
        )}
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('Templates')}>
        <Ionicons name="add" size={30} color="#fff" />
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Home')}>
          <Ionicons name="home-outline" size={26} color="#007bff" />
          <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Templates')}>
          <Ionicons name="grid-outline" size={26} color="#999" />
          <Text style={styles.footerText}>Templates</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton} onPress={() => navigation.navigate('Settings')}>
          <Ionicons name="settings-outline" size={26} color="#999" />
          <Text style={styles.footerText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  appTitle: {
    fontSize: 28,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  welcomeText: {
    marginTop: 0,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
  },
  profileImage: {
    width: 44,
    height: 44,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#007bff',
  },
  tipsCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f7fa',
    padding: 14,
    borderRadius: 12,
    marginBottom: 24,
    justifyContent: 'space-between',
  },
  tipsLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tipsText: {
    marginLeft: 10,
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  cvCard: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  cvImage: {
    width: '100%',
    height: 240,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  cvTitle: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  cvActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    marginTop: 4,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#007bff',
  },
  noCVText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'Poppins_400Regular',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 20,
    backgroundColor: '#007bff',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  footerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 10,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    marginTop: 2,
  },
});

export default HomeScreen;
