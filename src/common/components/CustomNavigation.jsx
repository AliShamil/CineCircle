import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import MainPage from "../../main/MainPage";
import CustomTabBar from "./CustomTabBar";
import CustomDrawerContent from "./CustomDrawerContent";
import HomeIcon from "../../../assets/icons/fluent--home-20-regular.svg"
import Profile from "../../profile/Profile";
import Search from "../../search/Search";
import Settings from "../../settings/Settings";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Films from "../../films/Films";
import Diary from "../../diary/Diary";
import Reviews from "../../reviews/Reviews";
import Likes from "../../likes/Likes";
import Watchlist from "../../watchlist/Watchlist";
import Lists from "../../lists/Lists";
const BottomStack = createBottomTabNavigator()
const Drawer = createDrawerNavigator();
const MainStack = createNativeStackNavigator();

function DrawerStack() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{ drawerStyle: { "backgroundColor": "#1F1D36" }, headerShown: false, sceneContainerStyle: { "backgroundColor": "#1F1D36" } }} >
            <Drawer.Screen
                name="Home"
                component={MainPage}
            />
            <Drawer.Screen
                name="Films"
                component={Films}
            />
            <Drawer.Screen
                name="Diary"
                component={Diary}
            />
            <Drawer.Screen
                name="Reviews"
                component={Reviews}
            />
            <Drawer.Screen
                name="Watchlist"
                component={Watchlist}
            />
            <Drawer.Screen
                name="Lists"
                component={Lists}
            />
            <Drawer.Screen
                name="Likes"
                component={Likes}
            />
        </Drawer.Navigator>)
}

function AppBottomStack() {
    return (
        <BottomStack.Navigator
            sceneContainerStyle={{ "backgroundColor": "#1F1D36" }}
            tabBar={(props) => <CustomTabBar {...props} />}

        >
            <BottomStack.Screen
                name='MainPage'
                component={DrawerStack}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => {
                        return <HomeIcon fill={color} size={size} width={30} height={30} />;
                    }
                }}
            />
            <BottomStack.Screen
                name='SearchPage'
                component={Search}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => {
                        return <HomeIcon fill={color} size={size} />;
                    }
                }}
            />
            <BottomStack.Screen
                name='ProfilePage'
                component={Profile}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => {
                        return <HomeIcon fill={color} size={size} />;
                    }
                }}
            />
            <BottomStack.Screen
                name='SettingsPage'
                component={Settings}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => {
                        return <HomeIcon fill={color} size={size} />;
                    }
                }}
            />

        </BottomStack.Navigator>
    )
}
const CustomNavigation = () => {
    return (
        <NavigationContainer>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <AppBottomStack />
            </GestureHandlerRootView>
        </NavigationContainer>
    )
}
export default CustomNavigation