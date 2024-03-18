import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const CustomTabBar = ({ state, descriptors, navigation }) => {
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

                const tabBarIcon = options.tabBarIcon;

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
                            {tabBarIcon && tabBarIcon({ color: isFocused ? 'white' : 'gray', size: 40 })}
                        </View>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};

export default CustomTabBar;
