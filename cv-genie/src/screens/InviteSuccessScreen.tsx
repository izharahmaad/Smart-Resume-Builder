// src/screens/InviteSuccessScreen.tsx

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const InviteSuccessScreen = ({ navigation }: any) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="checkmark-circle-outline" size={90} color="#00c851" style={{ marginBottom: 20 }} />
        <Text style={styles.title}>Invitation Sent!</Text>
        <Text style={styles.subtitle}>
          Your invite was successfully sent to your friend. Let's grow the CV Genie community!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('InviteFriends')}
        >
          <Ionicons name="send-outline" size={20} color="#fff" style={{ marginRight: 6 }} />
          <Text style={styles.buttonText}>Invite More Friends</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="send-outline" size={20} color="#fff" style={{ marginRight: 6 }} />
          <Text style={styles.buttonText}>Back To Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => navigation.navigate('InviteHistory')}
        >
          <Ionicons name="time-outline" size={18} color="#007bff" style={{ marginRight: 6 }} />
          <Text style={styles.secondaryButtonText}>View Invite History</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#007bff',
  },
});

export default InviteSuccessScreen;
