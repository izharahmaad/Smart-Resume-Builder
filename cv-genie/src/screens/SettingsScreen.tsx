import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Alert,
  Image,
  Switch,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { useIsFocused } from '@react-navigation/native';

const SettingsScreen = ({ navigation }: any) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [profileName, setProfileName] = useState('User');
  const [profileEmail, setProfileEmail] = useState('user@example.com');
  const [profileImageUri, setProfileImageUri] = useState<string | null>(null);

  const isFocused = useIsFocused();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  useEffect(() => {
    loadProfile();
    loadNotificationSettings();
  }, [isFocused]);

  const loadProfile = async () => {
    try {
      const profileData = await AsyncStorage.getItem('userProfile');
      if (profileData) {
        const profile = JSON.parse(profileData);
        setProfileName(profile.name || 'User');
        setProfileEmail(profile.email || 'user@example.com');
        setProfileImageUri(profile.imageUri || null);
      }
    } catch (error) {
      console.log('Error loading profile:', error);
    }
  };

  const loadNotificationSettings = async () => {
    try {
      const value = await AsyncStorage.getItem('notificationsEnabled');
      if (value !== null) {
        setNotificationsEnabled(value === 'true');
      }
    } catch (error) {
      console.log('Error loading notification settings:', error);
    }
  };

  const handleToggleNotifications = async (value: boolean) => {
    setNotificationsEnabled(value);
    await AsyncStorage.setItem('notificationsEnabled', value.toString());
  };

  const handleLogout = async () => {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Logout',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('userProfile');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  const handleDeleteAccount = async () => {
    Alert.alert('Delete Account', 'Are you sure you want to delete your account? This action is irreversible.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('userProfile');
          Alert.alert('Account Deleted', 'Your account has been deleted.');
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          });
        },
      },
    ]);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Header */}
        <View style={styles.header}>
          <Ionicons name="settings-outline" size={28} color="#007bff" />
          <Text style={styles.title}>Settings</Text>
        </View>

        {/* Profile Section */}
        <Text style={styles.sectionTitle}>Profile</Text>

        <TouchableOpacity
          style={styles.profileCard}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('AccountSettings')}
        >
          <Image
            source={
              profileImageUri
                ? { uri: profileImageUri }
                : require('../../assets/placeholder-profile.png')
            }
            style={styles.profileImage}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.profileName}>{profileName}</Text>
            <Text style={styles.profileEmail}>{profileEmail}</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('ResetPassword')}>
          <View style={styles.rowLeft}>
            <Ionicons name="lock-closed-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>Change Password</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        {/* App Settings */}
        <Text style={styles.sectionTitle}>App Settings</Text>

        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="notifications-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>Notifications</Text>
          </View>
          <Switch
            value={notificationsEnabled}
            onValueChange={handleToggleNotifications}
            trackColor={{ false: '#ccc', true: '#007bff' }}
            thumbColor={notificationsEnabled ? '#007bff' : '#f4f3f4'}
          />
        </View>

        {/* Legal */}
        <Text style={styles.sectionTitle}>Legal</Text>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('TermsOfUse')}>
          <View style={styles.rowLeft}>
            <Ionicons name="document-text-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>Terms of Use</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('PrivacyPolicy')}>
          <View style={styles.rowLeft}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        {/* Support */}
        <Text style={styles.sectionTitle}>Support</Text>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('ContactSupport')}>
          <View style={styles.rowLeft}>
            <Ionicons name="chatbubbles-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>Contact Support</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('FAQ')}>
          <View style={styles.rowLeft}>
            <Ionicons name="help-circle-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>FAQ & Help Center</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        {/* NEW SCREENS */}
        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('AboutApp')}>
          <View style={styles.rowLeft}>
            <Ionicons name="information-circle-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>About This App</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('Feedback')}>
          <View style={styles.rowLeft}>
            <Ionicons name="star-outline" size={20} color="#007bff" />
            <Text style={styles.rowText}>Send Feedback</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={() => navigation.navigate('InviteFriends')}>
  <View style={styles.rowLeft}>
    <Ionicons name="people-outline" size={20} color="#007bff" />
    <Text style={styles.rowText}>Invite Friends</Text>
  </View>
  <Ionicons name="chevron-forward" size={18} color="#999" />
</TouchableOpacity>

        
        {/* Danger Zone */}
        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={handleDeleteAccount}>
          <View style={styles.rowLeft}>
            <Ionicons name="trash-outline" size={20} color="#ff4444" />
            <Text style={[styles.rowText, { color: '#ff4444' }]}>Delete Account</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.row} activeOpacity={0.7} onPress={handleLogout}>
          <View style={styles.rowLeft}>
            <Ionicons name="log-out-outline" size={20} color="#ff4444" />
            <Text style={[styles.rowText, { color: '#ff4444' }]}>Logout</Text>
          </View>
        </TouchableOpacity>

        {/* App Version */}
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>App version 1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    color: '#888',
    marginBottom: 8,
    marginTop: 16,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 12,
    marginBottom: 12,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  profileName: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#000',
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rowText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginLeft: 12,
  },
  versionContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  versionText: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
  },
});

export default SettingsScreen;
