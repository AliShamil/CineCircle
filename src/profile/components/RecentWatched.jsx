import FastImage from "react-native-fast-image";
import StarIcon from "../../../assets/icons/star-icon.svg"
import StarEmptyIcon from "../../../assets/icons/star-empty.svg"
import { StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import Stars from 'react-native-stars';
import { FlashList } from "@shopify/flash-list";
import useAuthTestStore from "../../common/hooks/useAuthTestStore";
import { useStore } from "zustand";
const listItems = [
    {
        posterUri:"https://i.pinimg.com/564x/be/39/60/be39608ec01a8b8d305ba15c2932a690.jpg",
        starValue:3.5,
    },
    {
        posterUri:"https://i.pinimg.com/564x/be/39/60/be39608ec01a8b8d305ba15c2932a690.jpg",
        starValue:1,
    },
    {
        posterUri:"https://i.pinimg.com/564x/be/39/60/be39608ec01a8b8d305ba15c2932a690.jpg",
        starValue:5,
    },
    {
        posterUri:"https://i.pinimg.com/564x/be/39/60/be39608ec01a8b8d305ba15c2932a690.jpg",
        starValue:2,
    },
    {
        posterUri:"https://i.pinimg.com/564x/be/39/60/be39608ec01a8b8d305ba15c2932a690.jpg",
        starValue:3,
    },
];
const RecentWatched = () => {
    const { profile } = useStore(useAuthTestStore);
    const renderItem = ({ item }) => (
        <StyledView className="w-[80px] items-center mr-3">
            <FastImage
                className="w-[80px] h-[110px] mb-1 rounded"
                source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster}`,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            <Stars
                display={3}
                spacing={5}
                count={5}
                starSize={5}
                fullStar={<StarIcon width={12} height={12} />}
                emptyStar={<StarEmptyIcon width={12} height={12} />} />
            <StyledTouchableOpacity className="flex-row">
                <StyledText className="text-xs text-[#9C4A8B]">Read Review &gt;</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    );
    return (
        <StyledView className="px-5 pt-5">
            <StyledView className="flex-row justify-between mb-5">
                <StyledText className="text-white">Ali’s Recent Watched</StyledText>
                <StyledTouchableOpacity>
                    <StyledText className="text-[#E9A6A6]">See all</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
            <FlashList
                data={profile?.recentWatched}
                horizontal={true}
                renderItem={renderItem}
                contentContainerStyle={{paddingVertical:2}}
                estimatedItemSize={5}
                showsHorizontalScrollIndicator={false}
            />

        </StyledView>
    )
}
export default RecentWatched;