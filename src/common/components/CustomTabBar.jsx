import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HomeIcon from "../../../assets/icons/tabbottomnav/home-icon.svg"
import HomeIconFocused from "../../../assets/icons/tabbottomnav/home-icon-active.svg"
import SearchIcon from "../../../assets/icons/tabbottomnav/search-icon.svg"
import SearchIconFocused from "../../../assets/icons/tabbottomnav/search-active-icon.svg"
import NotificationIcon from "../../../assets/icons/tabbottomnav/notification-icon.svg"
import NotificationIconFocused from "../../../assets/icons/tabbottomnav/notification-active-icon.svg"
import UserIcon from "../../../assets/icons/tabbottomnav/user-icon.svg"
import UserIconFocused from "../../../assets/icons/tabbottomnav/user-active-icon.svg"
import SettingsIcon from "../../../assets/icons/tabbottomnav/settings-icon.svg"
import SettingsIconFocused from "../../../assets/icons/tabbottomnav/settings-active-icon.svg"

const CustomTabBar = ({ state, descriptors, navigation }) => {

    const icons = {
        MainPage: [HomeIconFocused, HomeIcon],
        SearchPage: [SearchIconFocused, SearchIcon],
        SettingsPage: [SettingsIconFocused, SettingsIcon],
        ProfilePage: [UserIconFocused, UserIcon]
    };

    return (
        <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#1F1D36', elevation: 20 }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const renderIcon = (color, size) => {
                    const icon = icons[route.name];
                    if (icon) {
                        return isFocused ? icon[0]({ color, size }) : icon[1]({ color, size });
                    }
                    return null;
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                    >
                        <View style={{ padding: 10, borderBottomWidth: isFocused ? 2 : 0, borderBottomColor: '#E9A6A6' }}>
                            {renderIcon(isFocused ? 'white' : 'gray', 30)}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;