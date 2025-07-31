// src/screens/TemplatesScreen.tsx

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

const allTemplates = [
  {
  id: '1',
  name: 'Modern Blue',
  category: 'Recommended',
  tags: ['modern', 'blue', 'graphic'],
  preview: require('../../assets/template1-preview.jpg'),
  file: 'template1.html',
},
{
  id: '2',
  name: 'Professional Gray',
  category: 'Most Selected',
  tags: ['professional', 'gray', 'corporate'],
  preview: require('../../assets/template2-preview.jpg'),
  file: 'template2.html',
},
{
  id: '3',
  name: 'Creative Designer',
  category: 'Creative',
  tags: ['creative', 'graphic', 'portfolio'],
  preview: require('../../assets/template3-preview.jpg'),
  file: 'template3.html',
},
{
  id: '4',
  name: 'Corporate Executive',
  category: 'Most Selected',
  tags: ['executive', 'business', 'corporate'],
  preview: require('../../assets/template4-preview.jpg'),
  file: 'template4.html',
},
{
  id: '5',
  name: 'Simple Minimal',
  category: 'Recommended',
  tags: ['minimal', 'clean', 'simple'],
  preview: require('../../assets/template5-preview.jpg'),
  file: 'template5.html',
},
{
  id: '6',
  name: 'Elegant Black & White',
  category: 'Professional',
  tags: ['elegant', 'black', 'white'],
  preview: require('../../assets/template6-preview.jpg'),
  file: 'template6.html',
},
{
  id: '7',
  name: 'Lawyer CV',
  category: 'Professional',
  tags: ['lawyer', 'legal', 'professional'],
  preview: require('../../assets/template7-preview.jpg'),
  file: 'template7.html',
},
{
  id: '8',
  name: 'Doctor CV',
  category: 'Professional',
  tags: ['doctor', 'medical', 'healthcare'],
  preview: require('../../assets/template8-preview.jpg'),
  file: 'template8.html',
},
{
  id: '9',
  name: 'Developer CV',
  category: 'Developer',
  tags: ['developer', 'programming', 'tech'],
  preview: require('../../assets/template9-preview.jpg'),
  file: 'template9.html',
},
{
  id: '10',
  name: 'Frontend Developer',
  category: 'Developer',
  tags: ['frontend', 'web', 'tech'],
  preview: require('../../assets/template10-preview.jpg'),
  file: 'template10.html',
},
{
  id: '11',
  name: 'Backend Developer',
  category: 'Developer',
  tags: ['backend', 'server', 'tech'],
  preview: require('../../assets/template11-preview.jpg'),
  file: 'template11.html',
},
{
  id: '12',
  name: 'Marketing Expert',
  category: 'Marketing',
  tags: ['marketing', 'expert', 'business'],
  preview: require('../../assets/template12-preview.jpg'),
  file: 'template12.html',
},
{
  id: '13',
  name: 'Project Manager',
  category: 'Management',
  tags: ['manager', 'project', 'management'],
  preview: require('../../assets/template13-preview.jpg'),
  file: 'template13.html',
},
{
  id: '14',
  name: 'Student Simple',
  category: 'Student',
  tags: ['student', 'simple', 'education'],
  preview: require('../../assets/template14-preview.jpg'),
  file: 'template14.html',
},
{
  id: '15',
  name: 'Fresher Simple',
  category: 'Fresher',
  tags: ['fresher', 'simple', 'entry level'],
  preview: require('../../assets/template15-preview.jpg'),
  file: 'template15.html',
},
{
  id: '16',
  name: 'UI/UX Designer',
  category: 'Designer',
  tags: ['ui/ux', 'designer', 'creative'],
  preview: require('../../assets/template16-preview.jpg'),
  file: 'template16.html',
},
{
  id: '17',
  name: 'Creative Studio',
  category: 'Creative',
  tags: ['studio', 'creative', 'portfolio'],
  preview: require('../../assets/template17-preview.jpg'),
  file: 'template17.html',
},
{
  id: '18',
  name: 'Elegant Minimal Gray',
  category: 'Elegant',
  tags: ['elegant', 'minimal', 'gray'],
  preview: require('../../assets/template18-preview.jpg'),
  file: 'template18.html',
},
{
  id: '19',
  name: 'Academic CV',
  category: 'Professional',
  tags: ['academic', 'education', 'professor'],
  preview: require('../../assets/template19-preview.jpg'),
  file: 'template19.html',
},
{
  id: '20',
  name: 'Artistic CV',
  category: 'Creative',
  tags: ['artistic', 'graphic', 'creative'],
  preview: require('../../assets/template20-preview.jpg'),
  file: 'template20.html',
},
{
  id: '21',
  name: 'Elegant Corporate',
  category: 'Professional',
  tags: ['corporate', 'photo', 'elegant'],
  preview: require('../../assets/template21-preview.jpg'),
  file: 'template21.html',
},
{
  id: '22',
  name: 'Modern Executive',
  category: 'Professional',
  tags: ['executive', 'modern', 'photo'],
  preview: require('../../assets/template22-preview.jpg'),
  file: 'template22.html',
},
{
  id: '23',
  name: 'Creative Agency',
  category: 'Creative',
  tags: ['creative', 'agency', 'photo'],
  preview: require('../../assets/template23-preview.jpg'),
  file: 'template23.html',
},
{
  id: '24',
  name: 'Minimal Photo',
  category: 'Minimal',
  tags: ['minimal', 'photo', 'clean'],
  preview: require('../../assets/template24-preview.jpg'),
  file: 'template24.html',
},
{
  id: '25',
  name: 'Designer Portfolio',
  category: 'Creative',
  tags: ['designer', 'portfolio', 'photo'],
  preview: require('../../assets/template25-preview.jpg'),
  file: 'template25.html',
},
{
  id: '26',
  name: 'Marketing Guru',
  category: 'Marketing',
  tags: ['marketing', 'photo', 'creative'],
  preview: require('../../assets/template26-preview.jpg'),
  file: 'template26.html',
},
{
  id: '27',
  name: 'Tech Startup',
  category: 'Developer',
  tags: ['startup', 'tech', 'photo'],
  preview: require('../../assets/template27-preview.jpg'),
  file: 'template27.html',
},
{
  id: '28',
  name: 'Bold Red',
  category: 'Creative',
  tags: ['bold', 'red', 'photo'],
  preview: require('../../assets/template28-preview.jpg'),
  file: 'template28.html',
},
{
  id: '29',
  name: 'Elegant Sidebar',
  category: 'Professional',
  tags: ['sidebar', 'photo', 'elegant'],
  preview: require('../../assets/template29-preview.jpg'),
  file: 'template29.html',
},
{
  id: '30',
  name: 'Modern B&W',
  category: 'Minimal',
  tags: ['black', 'white', 'photo'],
  preview: require('../../assets/template30-preview.jpg'),
  file: 'template30.html',
},
{
  id: '31',
  name: 'Gradient Professional',
  category: 'Creative',
  tags: ['gradient', 'photo', 'creative'],
  preview: require('../../assets/template31-preview.jpg'),
  file: 'template31.html',
},
{
  id: '32',
  name: 'Corporate Manager',
  category: 'Professional',
  tags: ['manager', 'corporate', 'photo'],
  preview: require('../../assets/template32-preview.jpg'),
  file: 'template32.html',
},
{
  id: '33',
  name: 'Creative Developer',
  category: 'Developer',
  tags: ['developer', 'creative', 'photo'],
  preview: require('../../assets/template33-preview.jpg'),
  file: 'template33.html',
},
{
  id: '34',
  name: 'Elegant Gray',
  category: 'Minimal',
  tags: ['gray', 'elegant', 'photo'],
  preview: require('../../assets/template34-preview.jpg'),
  file: 'template34.html',
},
{
  id: '35',
  name: 'Modern Gradient',
  category: 'Creative',
  tags: ['modern', 'gradient', 'photo'],
  preview: require('../../assets/template35-preview.jpg'),
  file: 'template35.html',
},
{
  id: '36',
  name: 'Photographer CV',
  category: 'Creative',
  tags: ['photographer', 'photo', 'portfolio'],
  preview: require('../../assets/template36-preview.jpg'),
  file: 'template36.html',
},
{
  id: '37',
  name: 'UI/UX Expert',
  category: 'Designer',
  tags: ['ui/ux', 'designer', 'photo'],
  preview: require('../../assets/template37-preview.jpg'),
  file: 'template37.html',
},
{
  id: '38',
  name: 'Corporate Lawyer',
  category: 'Professional',
  tags: ['lawyer', 'corporate', 'photo'],
  preview: require('../../assets/template38-preview.jpg'),
  file: 'template38.html',
},
{
  id: '39',
  name: 'Medical CV',
  category: 'Professional',
  tags: ['medical', 'doctor', 'photo'],
  preview: require('../../assets/template39-preview.jpg'),
  file: 'template39.html',
},
{
  id: '40',
  name: 'Creative Minimal',
  category: 'Minimal',
  tags: ['creative', 'minimal', 'photo'],
  preview: require('../../assets/template40-preview.jpg'),
  file: 'template40.html',
},
{
  id: '41',
  name: 'Senior Executive',
  category: 'Professional',
  tags: ['executive', 'senior', 'photo'],
  preview: require('../../assets/template41-preview.jpg'),
  file: 'template41.html',
},
{
  id: '42',
  name: 'Luxury Gold',
  category: 'Creative',
  tags: ['luxury', 'gold', 'photo'],
  preview: require('../../assets/template42-preview.jpg'),
  file: 'template42.html',
},
{
  id: '43',
  name: 'Tech Pro',
  category: 'Developer',
  tags: ['tech', 'developer', 'photo'],
  preview: require('../../assets/template43-preview.jpg'),
  file: 'template43.html',
},
{
  id: '44',
  name: 'Futuristic Design',
  category: 'Creative',
  tags: ['futuristic', 'design', 'photo'],
  preview: require('../../assets/template44-preview.jpg'),
  file: 'template44.html',
},
{
  id: '45',
  name: 'Bold Blue',
  category: 'Creative',
  tags: ['bold', 'blue', 'photo'],
  preview: require('../../assets/template45-preview.jpg'),
  file: 'template45.html',
},
{
  id: '46',
  name: 'Corporate Executive',
  category: 'Professional',
  tags: ['executive', 'pro', 'photo'],
  preview: require('../../assets/template46-preview.jpg'),
  file: 'template46.html',
},
{
  id: '47',
  name: 'Modern Gradient',
  category: 'Creative',
  tags: ['modern', 'gradient', 'photo'],
  preview: require('../../assets/template47-preview.jpg'),
  file: 'template47.html',
},
{
  id: '48',
  name: 'Elegant Simple',
  category: 'Minimal',
  tags: ['elegant', 'simple', 'photo'],
  preview: require('../../assets/template48-preview.jpg'),
  file: 'template48.html',
},
{
  id: '49',
  name: 'Senior Developer',
  category: 'Developer',
  tags: ['senior', 'developer', 'photo'],
  preview: require('../../assets/template49-preview.jpg'),
  file: 'template49.html',
},
{
  id: '50',
  name: 'Creative Director',
  category: 'Creative',
  tags: ['creative', 'director', 'photo'],
  preview: require('../../assets/template50-preview.jpg'),
  file: 'template50.html',
},
];

const TemplatesScreen = ({ navigation }: any) => {
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  // 🚀 Now we navigate to FillInfoScreen — PRO FLOW
  const handleUseTemplate = (template: any) => {
    navigation.navigate('FillInfo', {
      templateFile: template.file,
      templatePreview: template.preview,
      templateDisplayName: template.name,
    });
  };

  const filterTemplates = () => {
    return allTemplates.filter((template) => {
      const matchesTab = template && (activeTab === 'All' || template.category === activeTab);
      const matchesSearch =
        template?.name?.toLowerCase().includes(searchText.toLowerCase()) ||
        (template?.tags ?? []).some((tag) => tag.toLowerCase().includes(searchText.toLowerCase()));
      return matchesTab && matchesSearch;
    });
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.templateCard}>
      <Image source={item.preview} style={styles.previewImage} />
      <Text style={styles.templateName}>{item.name}</Text>

      <TouchableOpacity style={styles.useButton} onPress={() => handleUseTemplate(item)}>
        <Ionicons name="document-text-outline" size={18} color="#fff" style={{ marginRight: 6 }} />
        <Text style={styles.useButtonText}>Use Template</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Choose Your CV Template</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search-outline" size={20} color="#999" style={{ marginHorizontal: 8 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search templates (eg. graphic, modern)..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Tabs → PROPER tabs */}
      <View style={styles.tabsContainer}>
        {['All', 'Creative', 'Professional', 'Developer', 'Student' , 'Minimal'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tabButton,
              activeTab === tab && styles.tabButtonActive,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabButtonText,
                activeTab === tab && styles.tabButtonTextActive,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Templates Grid */}
      <FlatList
        data={filterTemplates()}
        keyExtractor={(item) => item?.id ?? ''}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 100 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: '#000',
    marginBottom: 10,
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 12,
    fontFamily: 'Poppins_400Regular',
  },
  tabsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 8,
    marginBottom: 8,
  },
  tabButtonActive: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  tabButtonText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#555',
  },
  tabButtonTextActive: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
  },
  templateCard: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
  },
  previewImage: {
    width: '100%',
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  templateName: {
    fontSize: 14,
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#000',
  },
  useButton: {
    flexDirection: 'row',
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  useButtonText: {
    color: '#fff',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
  },
});

export default TemplatesScreen;
