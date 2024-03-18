// CustomDrawerContent.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from './StyledComponents';
import HamburgerMenuIcon from '../../../assets/icons/hamburger-icon.svg'
import HomeIcon from '../../../assets/icons/home-icon.svg'
import FilmIcon from '../../../assets/icons/film-icon.svg'
import DiaryIcon from '../../../assets/icons/diary-icon.svg'
import ReviewIcon from '../../../assets/icons/review-icon.svg'
import ListsIcon from '../../../assets/icons/lists-icon.svg'
import WatchlistIcon from '../../../assets/icons/watchlist-icon.svg'
import HeartIcon from '../../../assets/icons/heart-icon.svg'
import LogOutIcon from '../../../assets/icons/logout-icon.svg'
import HomeActiveIcon from '../../../assets/icons/home-active-icon.svg'
import FilmActiveIcon from '../../../assets/icons/film-active-icon.svg'
import DiaryActiveIcon from '../../../assets/icons/diary-active-icon.svg'
import ReviewActiveIcon from '../../../assets/icons/review-active-icon.svg'
import WatchActiveIcon from '../../../assets/icons/watch-active-icon.svg'
import ListsActiveIcon from '../../../assets/icons/lists-active-icon.svg'
import HeartActiveIcon from '../../../assets/icons/heart-active-icon.svg'


const menuItems = [
    { icon: <HomeIcon />, iconActive: <HomeActiveIcon />, label: 'Home', screenName: 'MainPage' },
    { icon: <FilmIcon />, iconActive: <FilmActiveIcon />, label: 'Films', screenName: 'FilmsScreen' },
    { icon: <DiaryIcon />, iconActive: <DiaryActiveIcon  />, label: 'Diary', screenName: 'DiaryScreen' },
    { icon: <ReviewIcon />, iconActive: <ReviewActiveIcon />, label: 'Reviews', screenName: 'ReviewsScreen' },
    { icon: <WatchlistIcon />, iconActive: <WatchActiveIcon />, label: 'Watchlist', screenName: 'WatchlistScreen' },
    { icon: <ListsIcon />, iconActive: <ListsActiveIcon />, label: 'Lists', screenName: 'ListsScreen' },
    { icon: <HeartIcon />, iconActive: <HeartActiveIcon />, label: 'Likes', screenName: 'LikesScreen' },
];


const CustomDrawerContent = ({ navigation }) => {
    const [activeItem, setActiveItem] = useState('MainPage'); 

    const navigateToScreen = (screenName) => {
        setActiveItem(screenName);
        //navigation.navigate(screenName);
    };

    const renderItem = ({ item }) => (
        <StyledTouchableOpacity
            onPress={() => navigateToScreen(item.screenName)}
            className={`${activeItem === item.screenName ? 'bg-[#E9A6A6] text-[#1F1D36]' : ''}  mt-2 flex-row items-center rounded-[15px] p-2 pl-4`} >
            {activeItem === item.screenName ? item.iconActive : item.icon}
            <StyledText className={`${activeItem === item.screenName ? 'text-[#1F1D36]' : 'text-[#8F8E9B]'} ml-5  font-semibold`}>{item.label}</StyledText>
        </StyledTouchableOpacity>
    );

    return (
        <>

            <StyledView className='flex-1 pl-[22px]'>
                <StyledTouchableOpacity onPress={navigation.closeDrawer} className="mt-[40px]">
                    <HamburgerMenuIcon />
                </StyledTouchableOpacity>

                <StyledView className='flex-row mt-[37px]'>
                    <StyledImage className="rounded-full object-contain w-[44px] h-[44px] mr-[14px]" source={require("../../../assets/images/PP.jpg")} />
                    <StyledView>
                        <StyledText className='text-[#E9A6A6] font-semibold mb-[3px] text-base'>AliShamil</StyledText>
                        <StyledText className='text-[#5E5C6F] font-[12px]'>@elisamilzade</StyledText>
                    </StyledView>
                </StyledView>
                <StyledView className='flex-row mt-[36px]'>
                    <StyledTouchableOpacity className='border mr-[12px] border-[#9C4A8B] px-3 py-1 rounded-[20px]'>
                        <StyledText className='text-white text-xs'>500 Followers</StyledText>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className='border ml-[12px] border-[#9C4A8B] px-3 py-1 rounded-[20px]'>
                        <StyledText className=' text-white text-xs'>500 Followings</StyledText>
                    </StyledTouchableOpacity>
                </StyledView>

                <StyledView className='mt-8 mr-5'>
                    <FlatList
                        data={menuItems}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderItem}
                    />
                </StyledView>
                <StyledTouchableOpacity className="mt-14 flex-row items-center  rounded-[15px] p-2 pl-4" >
                    <LogOutIcon />
                    <StyledText className='ml-5 text-white font-semibold'>Log Out</StyledText>
                </StyledTouchableOpacity>

            </StyledView>

        </>
    );
};

export default CustomDrawerContent;
