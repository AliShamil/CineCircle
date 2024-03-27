import React, { useState } from 'react';
import { StyledText, StyledTouchableOpacity, StyledView } from '../../common/components/StyledComponents';
import FastImage from 'react-native-fast-image';
import { FlatList } from 'react-native-gesture-handler';

const MovieDetails = () => {
    const [activeItem, setActiveItem] = useState('Cast');

    const chooseOption = (option) => {
        setActiveItem(option);
    };

    const data = [
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

    const castData = [
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
        { ppUri: 'https://i.pinimg.com/564x/e5/58/3e/e5583e507f6cbf49000218116dd9757c.jpg', name: 'Ryan Gosling', role: 'Driver' },
    ];

    const castRenderItem = ({ item }) => (
        <StyledTouchableOpacity className='w-[70px] items-center mr-3'>
            <FastImage className="w-[50px] h-[50px]  rounded-full shadow-black shadow-2xl "
                source={{
                    uri: item.ppUri,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover} />
            <StyledText className='text-[11px] text-center text-white font-semibold'>{item.name}</StyledText>
            <StyledText className='text-[9px] text-center text-[#8F8E9B] font-semibold' >{item.role}</StyledText>
        </StyledTouchableOpacity>
    );

    let renderedContent;
    switch (activeItem) {
        case 'Cast':
            renderedContent = (
                <FlatList
                    data={castData}
                    horizontal={true}
                    renderItem={castRenderItem}
                    contentContainerStyle={{ paddingVertical: 2 }}
                    estimatedItemSize={10}
                    showsHorizontalScrollIndicator={false}
                />
            );
            break;
        case 'Crew':
            renderedContent = (
                <FlatList
                    data={castData}
                    horizontal={true}
                    renderItem={castRenderItem}
                    contentContainerStyle={{ paddingVertical: 2 }}
                    estimatedItemSize={10}
                    showsHorizontalScrollIndicator={false}
                />
            );
            break;
        default:
            renderedContent = null;
            break;
    }

    return (
        <StyledView className='px-5'>
            <FlatList
                data={data}
                horizontal={true}
                renderItem={renderItem}
                contentContainerStyle={{ paddingVertical: 2 }}
                estimatedItemSize={3}
                scrollEnabled={false}
            />
            <StyledView className='my-1' />
            {renderedContent}
        </StyledView>
    );
}

export default MovieDetails;
