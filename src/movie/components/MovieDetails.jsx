import React, { useState } from 'react';
import { StyledText, StyledTouchableOpacity, StyledView } from '../../common/components/StyledComponents';
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native-gesture-handler';

const MovieDetails = ({ credits }) => {
    const [activeItem, setActiveItem] = useState('Cast');
    const chooseOption = (option) => {
        setActiveItem(option);
    };

    const listData = [
        { title: 'Cast' },
        { title: 'Crew' },
        { title: 'Details' }
    ];

    const renderItem = ({ item }) => (
        <StyledTouchableOpacity
            onPress={() => chooseOption(item.title)}
            className='items-center  mx-1'>
            <StyledView className={`${activeItem === item.title ? 'bg-[#9C4A8B]' : ''} rounded-xl `}>
                <StyledText className='text-white text-xs font-semibold mx-4 my-1'>{item.title}</StyledText>
            </StyledView>
            <StyledView className={`${activeItem === item.title ? 'bg-[#9C4A8B]' : ''} mt-[5px] w-[50%] h-[2px]`}></StyledView>
        </StyledTouchableOpacity>
    );

    const castRenderItem = ({ item }) => (
        <StyledTouchableOpacity className='w-[70px] h-[90px] items-center mr-3'>
            <FastImage className="w-[50px] h-[50px]  rounded-full shadow-black shadow-2xl "
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${item?.profilePath}`,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover} />
            <StyledText className='text-[11px] text-center text-white font-semibold'>{item?.name}</StyledText>
            <StyledText className='text-[9px] text-center text-[#8F8E9B] font-semibold' >{activeItem === "Cast" ? item?.character : item?.job}</StyledText>
        </StyledTouchableOpacity>
    );
    return (
        <StyledView className='px-5'>
            <FlatList
                data={listData}
                horizontal={true}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 2 }}
                estimatedItemSize={3}
                scrollEnabled={false}
            />
            <StyledView className='my-1' />
            {activeItem === "Cast" && (<FlatList
                data={credits?.cast}
                keyExtractor={(item) => item.id}
                horizontal={true}
                renderItem={castRenderItem}
                contentContainerStyle={{ paddingVertical: 2 }}
                estimatedItemSize={10}
                showsHorizontalScrollIndicator={false}
            />)
            }
            {activeItem === "Crew" && (<FlatList
                data={credits?.crew}
                horizontal={true}
                keyExtractor={(item) => item.creditId}
                renderItem={castRenderItem}
                contentContainerStyle={{ paddingVertical: 2 }}
                estimatedItemSize={10}
                showsHorizontalScrollIndicator={false}
            />)
            }
        </StyledView>
    );
}

export default MovieDetails;
