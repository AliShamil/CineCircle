import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import HomeIcon from "../../../assets/icons/fluent--home-20-regular.svg"
import HomeIconFocused from "../../../assets/icons/fluent--home-20-regular-focused.svg"

const CustomTabBar = ({ state, descriptors, navigation }) => {

    const icons = {
        MainPage: [HomeIconFocused, HomeIcon],
        SearchPage: [HomeIconFocused, HomeIcon],
        NotificationPage: [HomeIconFocused, HomeIcon],
        ProfilePage: [HomeIconFocused, HomeIcon]
    };

    return (
        <View style={{ flexDirection: 'row', height: 50, justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#1F1D36' }}>
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
                        <View style={{ padding: 16, borderBottomWidth: isFocused ? 2 : 0, borderBottomColor: '#E9A6A6' }}>
                            {renderIcon(isFocused ? 'white' : 'gray', 40)}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;
