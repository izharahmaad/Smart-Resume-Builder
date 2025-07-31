// src/screens/InviteFriendsScreen.tsx

import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Share,
  FlatList,
  Animated,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const InviteFriendsScreen = ({ navigation }: any) => {
  const [history, setHistory] = useState<any[]>([]);
  const isFocused = useIsFocused();

  const progress = useRef(new Animated.Value(0)).current;

  const MAX_INVITES = 5;

  useEffect(() => {
    loadHistory();
  }, [isFocused]);

  const loadHistory = async () => {
    try {
      const existing = await AsyncStorage.getItem('inviteHistory');
      const invites = existing ? JSON.parse(existing) : [];
      setHistory(invites.reverse());
      animateProgress(invites.length);
    } catch (error) {
      console.log('Error loading history:', error);
    }
  };

  const animateProgress = (inviteCount: number) => {
    const clampedCount = Math.min(inviteCount, MAX_INVITES);
    const progressValue = clampedCount / MAX_INVITES;
    Animated.timing(progress, {
      toValue: progressValue,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const handleInvite = async () => {
    try {
      const result = await Share.share({
        message:
          '🎉 Join me on CV Genie! The easiest way to create stunning CVs in minutes! Download here: https://example.com/app',
      });

      if (result.action === Share.sharedAction) {
        const existing = await AsyncStorage.getItem('inviteHistory');
        const invites = existing ? JSON.parse(existing) : [];
        const newInvite = {
          date: new Date().toISOString(),
          message: 'Invite sent!',
        };
        invites.push(newInvite);
        await AsyncStorage.setItem('inviteHistory', JSON.stringify(invites));
        loadHistory();

        navigation.navigate('InviteSuccess');
      }
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const renderHistoryItem = ({ item }: any) => (
    <View style={styles.historyItem}>
      <Ionicons name="paper-plane-outline" size={22} color="#007bff" style={{ marginRight: 12 }} />
      <View style={{ flex: 1 }}>
        <Text style={styles.historyText}>{item.message}</Text>
        <Text style={styles.historyDate}>{new Date(item.date).toLocaleString()}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
        {/* HEADER */}
        <View style={styles.header}>
          <Ionicons name="people-circle-outline" size={34} color="#007bff" />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.title}>Invite Friends</Text>
            <Text style={styles.subtitle}>Grow our CV Genie community 🚀</Text>
          </View>
        </View>

        {/* PROGRESS */}
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Your Invite Progress</Text>
          <Text style={styles.progressCounter}>
            {Math.min(history.length, MAX_INVITES)} / {MAX_INVITES} Invites Sent
          </Text>
          <View style={styles.progressBarBackground}>
            <Animated.View
              style={[
                styles.progressBarFill,
                {
                  width: progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0%', '100%'],
                  }),
                },
              ]}
            />
          </View>
          <Text style={styles.progressNote}>
            Invite {Math.max(MAX_INVITES - history.length, 0)} more friend(s) to reach your goal!
          </Text>
        </View>

        {/* INFO CARD */}
        <View style={styles.infoCard}>
          <Ionicons name="gift-outline" size={32} color="#007bff" style={{ marginBottom: 12 }} />
          <Text style={styles.infoTitle}>Share CV Genie Today!</Text>
          <Text style={styles.infoText}>
            Help your friends create stunning CVs with our easy-to-use app. Let’s make job searching
            simple for everyone!
          </Text>
          <TouchableOpacity style={styles.inviteButton} onPress={handleInvite}>
            <Ionicons name="send-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
            <Text style={styles.inviteButtonText}>Send Invite Now</Text>
          </TouchableOpacity>
        </View>

        {/* HISTORY */}
        <Text style={styles.sectionTitle}>Recent Invites</Text>

        {history.length === 0 ? (
          <Text style={styles.noHistory}>You haven’t invited anyone yet. Start sharing now!</Text>
        ) : (
          <FlatList
            data={history.slice(0, 5)}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderHistoryItem}
            scrollEnabled={false}
          />
        )}

        <TouchableOpacity
          style={styles.viewAllButton}
          onPress={() => navigation.navigate('InviteHistory')}
        >
          <Ionicons name="time-outline" size={18} color="#007bff" style={{ marginRight: 6 }} />
          <Text style={styles.viewAllText}>View Full History</Text>
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
    marginBottom: 24,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    marginTop: 2,
  },
  progressCard: {
    backgroundColor: '#f5f7fa',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  progressTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 8,
  },
  progressCounter: {
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
    color: '#007bff',
    marginBottom: 8,
  },
  progressBarBackground: {
    height: 14,
    backgroundColor: '#e0e0e0',
    borderRadius: 7,
    overflow: 'hidden',
    marginBottom: 10,
  },
  progressBarFill: {
    height: 14,
    backgroundColor: '#007bff',
    borderRadius: 7,
  },
  progressNote: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    marginTop: 4,
  },
  infoCard: {
    backgroundColor: '#f5f7fa',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 30,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  inviteButton: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  inviteButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 12,
  },
  noHistory: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    textAlign: 'center',
    marginBottom: 16,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyText: {
    fontSize: 15,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 16,
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 15,
    fontFamily: 'Poppins_600SemiBold',
    color: '#007bff',
  },
});

export default InviteFriendsScreen;
