import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native"
import MainPage from "../../main/MainPage";
import CustomTabBar from "./CustomTabBar";
import CustomDrawerContent from "./CustomDrawerContent";
import HomeIcon from "../../../assets/icons/fluent--home-20-regular.svg"
import HomeIconFocused from "../../../assets/icons/fluent--home-20-regular-focused.svg"
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
                component={MainPage}
                options={{
                    headerShown: false, tabBarIcon: ({ focused }) => {
                        return focused ? <HomeIconFocused /> : <HomeIcon />;
                    }
                }}
            />
            <BottomStack.Screen
                name='SearchPage'
                component={TestDragPage}
                options={{
                    headerShown: false, tabBarIcon: ({ color, size }) => {
                        return <HomeIcon fill={color} size={size} />;
                    }
                }}
            />
            <BottomStack.Screen
                name='NotificationPage'
                component={StartPage}
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
        </BottomStack.Navigator>
    )
}
const CustomNavigation = () => {
    const linking = {
        prefixes: ["cinecircle://"],
        config: {
            initialRouteName: "AppBottomStack",
            screens: {
                AppBottomStack: {
                    path: "main/",
                    screens: {
                        MainPage: {
                            path: "home/"
                        },
                        SearchPage: {
                            path: "search/"
                        },
                        NotificationPage: {
                            path: "notification/"
                        },
                        ProfilePage: {
                            path: "profile/"
                        }
                    }
                }
            }
        }
    }
    return (
        <NavigationContainer linking={linking}>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{ drawerStyle: { "backgroundColor": "#1F1D36" }, headerShown: false, sceneContainerStyle: { "backgroundColor": "#1F1D36" } }} >
                <Drawer.Screen name="AppBottomStack" component={AppBottomStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
export default CustomNavigation