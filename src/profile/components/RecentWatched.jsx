import FastImage from "react-native-fast-image";
import StarIcon from "../../../assets/icons/star-icon.svg"
import { StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";

const RecentWatched = () => {
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<StarIcon width={100} height={10} key={i} />);
        }
        return stars;
    };
    return (
        <StyledView className="p-5">
            <StyledView className="flex-row justify-between">
                <StyledText className="text-white">Kyran’s Recent Reviewed</StyledText>
                <StyledTouchableOpacity>
                    <StyledText className="text-[#E9A6A6]">See all</StyledText>
                </StyledTouchableOpacity>
            </StyledView>
            <StyledView>
            <FastImage
                style={{ width: 70, height: 90, borderRadius: 7 }}
                source={{
                    uri: "https://i.pinimg.com/564x/be/39/60/be39608ec01a8b8d305ba15c2932a690.jpg",
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            </StyledView>
            <StyledView className="flex-row">
                {renderStars(3)}
            </StyledView>
        </StyledView>
    )
}
export default RecentWatched;