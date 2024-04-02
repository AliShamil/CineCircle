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
const Review = () => {
    const [stars, setStars] = useState(0);
    const [isLiked, setLike] = useState(false);
    const [loader, setLoader] = useState(true);
    const [selectedImage, setSelectedImage] = useState();
    const [selectedDate, setSelectedDate] = useState('');
    const [isCalendarModalVisible, setCalendarModalVisible] = useState(false);
    const formatDate = (dateString) => {
        const [year, month, day] = dateString.split('/');
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = months[parseInt(month, 10) - 1];
        return `${parseInt(day, 10)} ${monthName} ${year}`;
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
    const date = new Date();

    
    useEffect(() => {
        setTimeout(() => {
            setLoader(false);
        }, 3000);
    }, []);
    return (
        <ScrollView>
            {isCalendarModalVisible && (
  <Modal visible={isCalendarModalVisible}  animationType="slide">
    
                       <DatePicker
      options={{
        backgroundColor: '#090C08',
        textHeaderColor: '#FFA25B',
        textDefaultColor: '#F6E7C1',
        selectedTextColor: '#fff',
        mainColor: '#F4722B',
        textSecondaryColor: '#D6C7A1',
        borderColor: 'rgba(122, 146, 165, 0.1)',
      }}
      current={date.getFullYear()`-`}
      selected="2020-07-23"
      mode="calendar"
      minuteInterval={30}
      onSelectedChange={date => setSelectedDate(date)}
      style={{ borderRadius: 10 }}
      onDateChange={date => {
        setSelectedDate(date);
        setCalendarModalVisible(false); // Close modal on date selection
      }}
    />
  </Modal>
)}
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
                        <StyledText className='text-xl text-white font-semibold'>The Batman <StyledText className='text-[12px] font-normal'>{formatDate(selectedDate)}</StyledText></StyledText>
                        <StyledView className='mt-[18px]'>
                            <StyledText className='text-white'>Specify the date you watched it</StyledText>
                            <StyledView className='flex-row py-2 px-[15px] bg-[#3D3B54] rounded-xl justify-between mt-[6px]'>
                                <CalendarIcon />
                                <StyledText className='text-white text-xs font-semibold'>06 March 2022</StyledText>
                                <StyledTouchableOpacity onPress={() => setCalendarModalVisible(true)}>
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

                            uri: "https://i.pinimg.com/564x/23/cc/58/23cc58d19fceb5d508cd30beba74fbb5.jpg",
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



        </ScrollView>
    )
}

export default Review