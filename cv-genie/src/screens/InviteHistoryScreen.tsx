// src/screens/InviteHistoryScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const InviteHistoryScreen = () => {
  const [history, setHistory] = useState<any[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    loadHistory();
  }, [isFocused]);

  const loadHistory = async () => {
    try {
      const existing = await AsyncStorage.getItem('inviteHistory');
      const invites = existing ? JSON.parse(existing) : [];
      setHistory(invites.reverse());
    } catch (error) {
      console.log('Error loading history:', error);
    }
  };

  const handleClearHistory = () => {
    Alert.alert('Clear History', 'Are you sure you want to clear invite history?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Clear',
        style: 'destructive',
        onPress: async () => {
          await AsyncStorage.removeItem('inviteHistory');
          loadHistory();
        },
      },
    ]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        <View style={styles.header}>
          <Ionicons name="time-outline" size={28} color="#007bff" />
          <Text style={styles.title}>Invite History</Text>
        </View>

        {history.length === 0 ? (
          <Text style={styles.noHistory}>No invites sent yet.</Text>
        ) : (
          history.map((item, index) => (
            <View key={index} style={styles.historyItem}>
              <Ionicons name="send-outline" size={20} color="#007bff" style={{ marginRight: 8 }} />
              <View style={{ flex: 1 }}>
                <Text style={styles.historyText}>{item.message}</Text>
                <Text style={styles.historyDate}>{new Date(item.date).toLocaleString()}</Text>
              </View>
            </View>
          ))
        )}

        {history.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={handleClearHistory}>
            <Ionicons name="trash-outline" size={20} color="#ff4444" style={{ marginRight: 8 }} />
            <Text style={styles.clearButtonText}>Clear History</Text>
          </TouchableOpacity>
        )}
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
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginLeft: 8,
  },
  noHistory: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  historyText: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#000',
    marginBottom: 4,
  },
  historyDate: {
    fontSize: 13,
    fontFamily: 'Poppins_400Regular',
    color: '#666',
  },
  clearButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 24,
    backgroundColor: '#ffe5e5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ff4444',
    fontSize: 16,
    fontFamily: 'Poppins_600SemiBold',
  },
});

export default InviteHistoryScreen;
