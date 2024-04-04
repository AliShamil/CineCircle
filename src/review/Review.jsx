import React, { useEffect, useState } from 'react'
import { StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from '../common/components/StyledComponents'
import ArrowBackIcon from "../../assets/icons/ic--round-arrow-back.svg"
import CalendarIcon from "../../assets/icons/mage--calendar.svg"
import StarIcon from "../../assets/icons/star-icon.svg"
import StarEmptyIcon from "../../assets/icons/star-empty.svg"
import StarHalfIcon from "../../assets/icons/ph--star-half-fill.svg"
import HeartIcon from "../../assets/icons/gravity-ui--heart-fill.svg"
import HeartEmptyIcon from "../../assets/icons/heart-empty.svg"
import Stars from 'react-native-stars';
import FastImage from 'react-native-fast-image'
import { ScrollView } from 'react-native'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import DatePicker from 'react-native-modern-datepicker';
import { Modal } from 'react-native'
import { format } from 'date-fns';
import RNDateTimePicker from '@react-native-community/datetimepicker'
const Review = () => {
    const [stars, setStars] = useState(0);
    const [isLiked, setLike] = useState(false);
    const [loader, setLoader] = useState(true);
    const [selectedImage, setSelectedImage] = useState("https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg");
    const [date, setDate] = useState(new Date());
    const [showCalendar, setShowCalendar] = useState(false);
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowCalendar(false);
        setDate(currentDate);
      };

    const openImagePicker = () => {
        const options = {
            mediaType: 'quality',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setSelectedImage(imageUri);
            }
        });
    };



    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);
    console.log(date)
    return (
        <ScrollView>
            <StyledView className='mt-[30px] px-5 flex-row items-center'>
                <StyledTouchableOpacity>
                    <ArrowBackIcon width={20} height={20} />
                </StyledTouchableOpacity>
                <StyledText className='text-base ml-5 font-semibold text-white'>Write Your Review</StyledText>
            </StyledView>
            {loader ?
                (<>
                    <SkeletonPlaceholder borderRadius={4} backgroundColor='#3D3B54'>
                        <SkeletonPlaceholder.Item paddingHorizontal={5} flexDirection="row" alignItems="center">

                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder>
                </>)
                : (<><StyledView className='px-5 mt-10 flex-row justify-between'>
                    <StyledView>
                        <StyledText className='text-xl text-white font-semibold'>The Batman <StyledText className='text-[12px] font-normal'></StyledText></StyledText>
                        <StyledView className='mt-[18px]'>
                            <StyledText className='text-white'>Specify the date you watched it</StyledText>
                            <StyledView className='flex-row py-2 px-[15px] bg-[#3D3B54] rounded-xl justify-between mt-[6px]'>
                                <CalendarIcon />
                                <StyledText className='text-white mx-1 text-xs font-semibold'>{format(date, 'dd MMMM yyyy')}</StyledText>
                                <StyledTouchableOpacity onPress={() => setShowCalendar(true)}>
                                    <StyledText className='text-[#E9A6A6] text-xs font-semibold'>Change</StyledText>
                                </StyledTouchableOpacity>
                            </StyledView>
                        </StyledView>
                        <StyledView className='mt-[18px]'>
                            <StyledText className='mb-[6px] text-white'>Give Your Rating</StyledText>
                            <StyledView className='flex-row justify-between'>
                                <Stars
                                    half={true}
                                    default={0}
                                    update={(val) => { setStars(val) }}
                                    spacing={4}
                                    starSize={40}
                                    count={5}
                                    fullStar={<StarIcon width={20} height={20} />}
                                    emptyStar={<StarEmptyIcon width={20} height={20} />}
                                    halfStar={<StarHalfIcon width={20} height={20} />} />
                                <StyledTouchableOpacity onPress={() => setLike(!isLiked)}>
                                    {isLiked ? <HeartIcon width={20} height={20} /> : <HeartEmptyIcon width={20} height={20} />}
                                </StyledTouchableOpacity>
                            </StyledView>
                        </StyledView>
                    </StyledView>
                    <FastImage className="w-[120px] rounded-lg shadow-black shadow-2xl h-[190px]"
                        source={{

                            uri: selectedImage,
                            priority: FastImage.priority.normal,
                        }}

                        resizeMode={FastImage.resizeMode.cover}></FastImage>
                </StyledView>
                    <StyledView className='px-5 my-[18px]'>
                        <StyledView className=' h-[410px] rounded-[20px] bg-[#3D3B54]'>
                            <StyledTextInput className='px-[18px] py-[16px] text-white' placeholder="Write down your review..." multiline={true} placeholderTextColor={"#ACACB4"} />
                        </StyledView>
                    </StyledView>
                    <StyledTouchableOpacity onPress={openImagePicker} className='bg-[#E9A6A6] w-[104px] h-[36px] items-center justify-center rounded-[20px] self-end mr-5 mb-[18px]'>
                        <StyledText className='text-black font-semibold'>Publish</StyledText>
                    </StyledTouchableOpacity></>)}
            {showCalendar && (
                <RNDateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={'date'}
                    is24Hour={true}
                    onChange={onChange}
                    maximumDate={new Date()}
                    minimumDate={new Date(1939, 8, 2)}
                />
            )}

        </ScrollView>
    )
}

export default Review