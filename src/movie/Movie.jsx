import React, { useEffect, useState } from 'react'
import { StyledText, StyledTouchableOpacity, StyledView } from '../common/components/StyledComponents'
import { ScrollView } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { Dimensions } from 'react-native'
import HeartIcon from "../../assets/icons/gravity-ui--heart-fill.svg"
import EyeIcon from "../../assets/icons/mdi--eye.svg"
import ListIcon from "../../assets/icons/fa--th-list.svg"
import AddToQueueIcon from "../../assets/icons/add-to-queue.svg"
import AddToWatchList from "../../assets/icons/watchlist-ltr.svg"
import AddToList from "../../assets/icons/fa-solid_list.svg"
import StarIcon from "../../assets/icons/star-icon.svg"
import ArrowBackIcon from "../../assets/icons/ic--round-arrow-back.svg"
import MovieDetails from './components/MovieDetails'
import AllReviews from './components/AllReviews'
import MovieSkeleton from './components/MovieSkeleton'
const text = `UNMASK THE TRUTH.

In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.`
const Movie = () => {
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        setTimeout(() => setLoader(false), 3000)
    })
    return (
        <>
        {loader ? (<MovieSkeleton />)
            : (<ScrollView>
                <StyledView className="relative w-full h-[225px] overflow-hidden bg-transparent">
                    <FastImage className="absolute bottom-0 -right-5 w-[900px] h-[600px]  rounded-full rounded-bl-none bg-red-500 transform translate-x-1/2 translate-y-1/2"
                        source={{
                            uri: "https://i.pinimg.com/originals/2d/44/e9/2d44e965dff94b7aa7a51fb42f25faf8.gif",
                            priority: FastImage.priority.normal,
                        }}
                        s
                        resizeMode={FastImage.resizeMode.cover}></FastImage>
                </StyledView>
                <StyledTouchableOpacity className='absolute rounded-full items-center justify-center top-[30px] ml-5 z-10 bg-[#1F1D36] w-[40px] h-[40px] shadow-xl shadow-black'>
                    <ArrowBackIcon width={20} height={20} />
                </StyledTouchableOpacity>
                <StyledView className='flex-row justify-between  px-5'>
                    <StyledView className='-top-16'>
                        <FastImage className="w-[120px] rounded-lg shadow-black shadow-2xl h-[190px]"
                            source={{
                                uri: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
                                priority: FastImage.priority.normal,
                            }}

                            resizeMode={FastImage.resizeMode.cover}></FastImage>
                        <StyledView className='flex-row items-center mt-2 justify-center'>
                            <StyledView className='items-center '>
                                <EyeIcon width={20} height={20} />
                                <StyledText className='text-xs text-[#8F8E9B]'>30k</StyledText>
                            </StyledView>
                            <StyledView className='items-center mx-4'>
                                <HeartIcon width={20} height={20} />
                                <StyledText className='text-xs text-[#8F8E9B]'>10k</StyledText>
                            </StyledView>
                            <StyledView className='items-center'>
                                <ListIcon width={20} height={20} />
                                <StyledText className='text-xs text-[#8F8E9B]'>25k</StyledText>
                            </StyledView>
                        </StyledView>

                        <StyledView className='px-2 gap-y-2 mt-1 '>
                            <StyledTouchableOpacity className='h-[25px] items-center justify-center rounded-lg flex-row bg-[#E9A6A6]'>
                                <AddToQueueIcon />
                                <StyledText className='ml-1 text-[10px] text-[#1F1D36] font-semibold'>Rate or Review</StyledText>
                            </StyledTouchableOpacity>
                            <StyledTouchableOpacity className='h-[25px] items-center justify-center rounded-lg flex-row bg-[#E9A6A6]'>
                                <AddToList />
                                <StyledText className='ml-1 text-[10px] text-[#1F1D36] font-semibold'>Add to Lists</StyledText>
                            </StyledTouchableOpacity>
                            <StyledTouchableOpacity className='h-[25px] items-center justify-center rounded-lg flex-row bg-[#E9A6A6]'>
                                <AddToWatchList />
                                <StyledText className='ml-1 text-[10px] text-[#1F1D36] font-semibold'>Add To Watchlist</StyledText>
                            </StyledTouchableOpacity>
                        </StyledView>
                    </StyledView>
                    <StyledView className='w-[220px] '>
                        <StyledView className='flex-row items-center   justify-between'>
                            <StyledText className='text-xl text-white font-semibold'>The Batman  <StyledText className='text-[12px] font-normal'>2022</StyledText></StyledText>
                            <StyledText className='text-[10px] self-end mb-1 text-white'>149 min</StyledText>
                        </StyledView>
                        <StyledText className='text-[12px] text-white'>Directed by <StyledText className='font-semibold'>Matt Reeves</StyledText></StyledText>
                        <StyledText className="text-white text-[10px] mt-3" textBreakStrategy="balanced" numberOfLines={5}>
                            {text}
                        </StyledText>
                        <StyledView className='mt-10'>
                            <StyledText className='text-base mb-1 text-[#8F8E9B]'>Ratings</StyledText>
                            <StyledView className='flex-row justify-between items-center '>
                                <StyledView className='self-end'>
                                    <StarIcon width={10} height={10} />
                                </StyledView>
                                <StyledView className='gap-x-[2px] w-[120px] h-[60px] border-b border-b-[#8F8E9B] flex-row-reverse'>
                                    <StyledTouchableOpacity className='w-[10px] h-full  bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[80%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[60%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[40%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[20%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[80%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[60%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-full  bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[20%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                    <StyledTouchableOpacity className='w-[10px] h-[40%] self-end bg-[#8F8E9B]'></StyledTouchableOpacity>
                                </StyledView>
                                <StyledView className='items-center'>
                                    <StyledText className='text-3xl text-[#E9A6A6]'>4.4</StyledText>
                                    <StyledView className='flex-row'>
                                        <StarIcon width={10} height={10} />
                                        <StarIcon width={10} height={10} />
                                        <StarIcon width={10} height={10} />
                                        <StarIcon width={10} height={10} />
                                        <StarIcon width={10} height={10} />
                                    </StyledView>
                                </StyledView>
                            </StyledView>
                        </StyledView>
                    </StyledView>

                </StyledView>
                <MovieDetails />
                <AllReviews />

            </ScrollView>)}
    </>
    )
}

export default Movie