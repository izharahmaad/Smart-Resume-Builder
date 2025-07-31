// App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import CreateProfileScreen from './src/screens/CreateProfileScreen';
import BottomTabsNavigator from './src/navigation/BottomTabsNavigator';
import CVEditorScreen from './src/screens/CVEditorScreen';

// Import individual screens for reference
import HomeScreen from './src/screens/HomeScreen';
import TemplatesScreen from './src/screens/TemplatesScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FillInfoScreen from './src/screens/FillInfoScreen';
import ResetPasswordScreen from './src/screens/ResetpasswrodScreen';
import TipsScreen from './src/screens/TipsScreen';
import AccountSettingsScreen from './src/screens/AccountSettingsScreen';
import TermsOfUseScreen from './src/screens/TermsOfUseScreen';
import PrivacyPolicyScreen from './src/screens/PrivacyPolicyScreen';
import FAQScreen from './src/screens/FAQScreen';
import ContactSupportScreen from './src/screens/ContactSupportScreen';
import AboutAppScreen from './src/screens/AboutAppScreen';
import FeedbackScreen from './src/screens/FeedbackScreen';
import InviteFriendsScreen from './src/screens/InviteFriendsScreen';
import InviteSuccessScreen from './src/screens/InviteSuccessScreen';
import InviteHistoryScreen from './src/screens/InviteHistoryScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />

        {/* Main Tab Navigation */}
        <Stack.Screen name="HomeTabs" component={BottomTabsNavigator} />

        {/* OPTIONAL — you can also register individual screens if you want to navigate directly */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Templates" component={TemplatesScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="CVEditor" component={CVEditorScreen} />
        <Stack.Screen name="FillInfo" component={FillInfoScreen} />
        <Stack.Screen name="Tips" component={TipsScreen} />
        <Stack.Screen name="AccountSettings" component={AccountSettingsScreen} />
        <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="FAQ" component={FAQScreen}/>
        <Stack.Screen name="ContactSupport" component={ContactSupportScreen} />
        <Stack.Screen name="AboutApp" component={AboutAppScreen} />
        <Stack.Screen name="Feedback" component={FeedbackScreen} />
        <Stack.Screen name="InviteFriends" component={InviteFriendsScreen} />
        <Stack.Screen name="InviteSuccess" component={InviteSuccessScreen} />
        <Stack.Screen name="InviteHistory" component={InviteHistoryScreen} />
       


      </Stack.Navigator>
    </NavigationContainer>
  );
}
