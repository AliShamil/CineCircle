import 'react-native-gesture-handler';
import Login from './src/auth/login/Login';
import SignUp from './src/auth/signUp/SignUp';
import { StyledView, StyledText, StyledSafeAreaView } from './src/common/components/StyledComponents';
import MainPage from './src/main/MainPage';
import StartPage from './src/start/StartPage';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomDrawerContent from './src/common/components/CustomDrawerContent';
import CustomTabBar from './src/common/components/CustomTabBar';
import CustomNavigation from './src/common/components/CustomNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { useEffect } from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';

const App = () => {

  SystemNavigationBar.setNavigationColor('#1F1D36');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#1F1D36" }}>
      <StatusBar barStyle="light-content" backgroundColor="#1F1D36" />
      <CustomNavigation />
    </SafeAreaView>
  );
}
export default App;
