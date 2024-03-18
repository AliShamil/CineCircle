import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import MainPage from "../../main/MainPage";
import CustomTabBar from "./CustomTabBar";
import CustomDrawerContent from "./CustomDrawerContent";
import HomeIcon from "../../../assets/icons/fluent--home-20-regular.svg"
import Profile from "../../profile/Profile";
import StartPage from "../../start/StartPage";
import TestDragPage from "../../TestDragPage";
const BottomStack = createBottomTabNavigator()
const Drawer = createDrawerNavigator();


function AppBottomStack() {
    return (
        <BottomStack.Navigator
            sceneContainerStyle={{ "backgroundColor": "#1F1D36" }}
            tabBar={(props) => <CustomTabBar {...props} />}
            
        >
            <BottomStack.Screen
                name='MainPage'
                component={Profile}
                options={{ headerShown: false ,tabBarIcon: ({ color, size }) => {
                    return <HomeIcon fill={color} size={size} />;
                }}}
            />
            <BottomStack.Screen
                name='SearchPage'
                component={TestDragPage}
                options={{ headerShown: false ,tabBarIcon: ({ color, size }) => {
                    return <HomeIcon fill={color} size={size} />;
                }}}
            />
            <BottomStack.Screen
                name='NotificationPage'
                component={StartPage}
                options={{ headerShown: false ,tabBarIcon: ({ color, size }) => {
                    return <HomeIcon fill={color} size={size} />;
                }}}
            />
            <BottomStack.Screen
                name='ProfilePage'
                component={Profile}
                options={{ headerShown: false ,tabBarIcon: ({ color, size }) => {
                    return <HomeIcon fill={color} size={size} />;
                }}}
            />
        </BottomStack.Navigator>
    )
}
const CustomNavigation = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{ drawerStyle: { "backgroundColor": "#1F1D36" }, headerShown: false, sceneContainerStyle: { "backgroundColor": "#1F1D36" } }} >
                <Drawer.Screen name="AppBottomStack" component={AppBottomStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default CustomNavigation