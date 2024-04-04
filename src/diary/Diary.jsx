import React from 'react'
import { StyledText, StyledTouchableOpacity, StyledView } from '../common/components/StyledComponents'
import { SectionList } from 'react-native';
import { format } from 'date-fns';
import FastImage from 'react-native-fast-image';
import Stars from 'react-native-stars';
import HeartIcon from "../../assets/icons/gravity-ui--heart-fill.svg"
import StarIcon from "../../assets/icons/star-icon.svg"
import StarEmptyIcon from "../../assets/icons/star-empty.svg"
const date = new Date();
const DATA = [
    {
        title: `${format(date, "MMMM yyyy")}`,
        data: [
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
        ],
    },
    {
        title: `${format(date, "MMMM yyyy")}`,
        data: [
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
        ],
    },
    {
        title: `${format(date, "MMMM yyyy")}`,
        data: [
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
        ],
    },
    {
        title: `${format(date, "MMMM yyyy")}`,
        data: [
            {
                movieId: "6",
                date: `${format(date, "dd")}`,
                poster: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                title: "Scot Pilgrim vs. the World",
                movieYear: 2010,
                starCount: 3,
                isLiked: true,
            },
        ],
    },

];
const Diary = () => {
    const ItemSeparatorComponent = () => {
        return (
            <StyledView className='h-[1px] mt-2 bg-[#29243B]' /> // Separator style
        );
    };

    const renderItem = ({ item }) => (
        <StyledTouchableOpacity className='flex-row items-center'>
        <StyledView className='w-16 h-16 ml-5 border-[#E9A6A6] border-[1px] rounded-lg items-center justify-center'>
            <StyledText className='text-xl text-white'>{item.date}</StyledText>
        </StyledView>
        <StyledView className='ml-3'>
            <FastImage className="w-[64px] rounded-lg shadow-black shadow-2xl h-[80px]"
                source={{

                    uri: item.poster,
                    priority: FastImage.priority.normal,
                }}

                resizeMode={FastImage.resizeMode.cover}></FastImage>
        </StyledView>
        <StyledView className='ml-2 '>
            <StyledText className='text-white'>{item.title} <StyledText className='text-[10px] '>{item.movieYear}</StyledText></StyledText>
            <StyledView className='flex-row mt-1'>
                <StyledView className='mr-3'>
                    <Stars
                        display={item.starCount}
                        spacing={1}
                        count={5}
                        starSize={5}
                        fullStar={<StarIcon width={12} height={12} />}
                        emptyStar={<StarEmptyIcon width={12} height={12} />}
                    />
                </StyledView>
                {item.isLiked ? <HeartIcon width={12} height={12} /> : null}
            </StyledView>
        </StyledView>
    </StyledTouchableOpacity>
    );
    return (
        <StyledView>
            <SectionList
                sections={DATA}
                keyExtractor={(item, index) => item + index}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title } }) => (
                    <StyledText className='bg-[#29243B] text-white text-lg pl-5 py-2 rounded-3xl'>{title}</StyledText>
                )}
                stickySectionHeadersEnabled={true}
                contentContainerStyle={{ gap: 5 }}
                ItemSeparatorComponent={ItemSeparatorComponent}

            />
        </StyledView>
    )
}


export default Diary