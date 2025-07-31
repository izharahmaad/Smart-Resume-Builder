// src/screens/PreviewScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Pdf from 'react-native-pdf';
import { MaterialCommunityIcons } from '@expo/vector-icons'; // Vector Icons

const PreviewScreen = ({ route }: any) => {
  const { pdfUri } = route.params;

  if (!pdfUri) {
    Alert.alert('Error', 'No PDF to preview.');
    return (
      <View style={styles.centered}>
        <Text>No PDF to preview.</Text>
      </View>
    );
  }

  const source = { uri: pdfUri };

  const handleExportPDF = () => {
    Alert.alert('Export', 'Your CV exported to PDF.');
  };

  const handleSaveToPhone = () => {
    Alert.alert('Save', 'Your CV saved to phone.');
  };

  const handleSaveInApp = () => {
    Alert.alert('Save', 'Your CV saved in app.');
  };

  return (
    <View style={styles.container}>
      <Pdf
        source={source}
        style={styles.pdf}
        onError={(error) => {
          console.log('PDF Error:', error);
          Alert.alert('Error', 'Could not load PDF.');
        }}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={handleExportPDF}>
          <MaterialCommunityIcons name="file-export" size={30} color="#e74c3c" />
          <Text style={styles.buttonText}>Export PDF</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSaveToPhone}>
          <MaterialCommunityIcons name="cellphone-arrow-down" size={30} color="#3498db" />
          <Text style={styles.buttonText}>Save to Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleSaveInApp}>
          <MaterialCommunityIcons name="cloud-upload" size={30} color="#2ecc71" />
          <Text style={styles.buttonText}>Save in App</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  pdf: {
    flex: 1,
    width: '100%',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
    elevation: 8, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: -3 },
  },
  button: {
    alignItems: 'center',
  },
  buttonText: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
  },
});

export default PreviewScreen;
