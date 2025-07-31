// src/screens/CVEditorScreen.tsx

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

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

const CVEditorScreen = ({ route, navigation }: any) => {
  const {
    templateFile,
    templatePreview,
    templatePreviewPath,
    templateDisplayName,
    formData,
    isSavedCV = false,
    htmlContent: savedHtmlContent,
  } = route.params;

  const [htmlTemplate, setHtmlTemplate] = useState<string>('');

  useEffect(() => {
    const loadTemplate = async () => {
      try {
        if (isSavedCV) {
          setHtmlTemplate(savedHtmlContent);
        } else {
          const html = templatesMap[templateFile];
          if (!html) {
            Alert.alert('Error', 'Template not found!');
            return;
          }
          setHtmlTemplate(html);
        }
      } catch (error) {
        console.log('Error loading template:', error);
        Alert.alert('Error', 'Could not load template.');
      }
    };
    loadTemplate();
  }, [templateFile, isSavedCV, savedHtmlContent]);

  const getFilledHtml = () => {
    if (isSavedCV) {
      return htmlTemplate;
    } else {
      return htmlTemplate
.replace('{{profile_image}}', formData?.profileImageUri || '')
.replace('{{name}}', formData?.name || '')
.replace('{{email}}', formData?.email || '')
.replace('{{phone}}', formData?.phone || '')
.replace('{{linkedin}}', formData?.linkedin || '')
.replace('{{github}}', formData?.github || '')
.replace('{{summary}}', formData?.summary || '')
.replace('{{skill1}}', formData?.skill1 || '')
.replace('{{skill2}}', formData?.skill2 || '')
.replace('{{skill3}}', formData?.skill3 || '')
.replace('{{skill4}}', formData?.skill4 || '')
.replace('{{experience_title}}', formData?.experienceTitle || '')
.replace('{{experience_description}}', formData?.experienceDescription || '')
.replace('{{education_title}}', formData?.educationTitle || '')
.replace('{{education_description}}', formData?.educationDescription || '')
.replace('{{language}}', formData?.language || '')
.replace('{{hobby}}', formData?.hobby || '')


    }
  };

  const generatePDF = async () => {
    const { uri } = await Print.printToFileAsync({
      html: getFilledHtml(),
      base64: false,
    });
    return uri;
  };

  const handleSharePDF = async () => {
    try {
      const uri = await generatePDF();
      await Sharing.shareAsync(uri);
    } catch (error) {
      console.log('Error sharing PDF:', error);
      Alert.alert('Error', 'Could not share PDF.');
    }
  };

  const handleSaveAndGoHome = async () => {
    try {
      const uri = await generatePDF();
      const fileName = `CV_${templateFile.replace('.html', '')}_${formData?.name?.replace(/\s+/g, '')}`;
      const savedCV = {
        templateFile,
        templatePreview,
        templatePreviewPath,
        templateDisplayName,
        htmlContent: getFilledHtml(),
        fileName,
        pdfUri: uri,
        date: new Date(),
        formData,
      };

      const existingCVs = await AsyncStorage.getItem('savedCVs');
      const cvList = existingCVs ? JSON.parse(existingCVs) : [];

      cvList.push(savedCV);
      await AsyncStorage.setItem('savedCVs', JSON.stringify(cvList));

      navigation.navigate('Home');
    } catch (error) {
      console.log('Error saving PDF:', error);
      Alert.alert('Error', 'Could not save PDF.');
    }
  };

  const handleExportOptions = () => {
    Alert.alert(
      'Export Options',
      'Choose what you want to do with the PDF:',
      [
        { text: 'Share as PDF', onPress: handleSharePDF },
        { text: 'Save to Home', onPress: handleSaveAndGoHome },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  if (!htmlTemplate) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text>Loading Template...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
      <WebView
        originWhitelist={['*']}
        source={{
          html: `
          <html>
            <body style="margin: 0; padding: 40px; background: #eee;">
              <div style="
                width: 794px;
                min-height: 1123px;
                margin: auto;
                background: #fff;
                box-shadow: 0 0 20px rgba(0,0,0,0.2);
                padding: 40px;
                margin-bottom: 100px;
              ">
                ${getFilledHtml()}
              </div>
            </body>
          </html>
        `,
        }}
        style={{ flex: 1 }}
      />

      <TouchableOpacity style={styles.exportButton} onPress={handleExportOptions}>
        <Ionicons name="download-outline" size={20} color="#fff" style={{ marginRight: 8 }} />
        <Text style={styles.exportButtonText}>Export to PDF</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exportButton: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 14,
    marginHorizontal: 20,
    borderRadius: 30,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  exportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CVEditorScreen;
