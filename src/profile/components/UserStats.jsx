import { StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";

const UserStats = () => {
    return (
        <StyledView className="flex-row gap-10">
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#E9A6A6]">455</StyledText>
                <StyledText className="text-white">Total Films</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#9C4A8B]">33</StyledText>
                <StyledText className="text-white">Film This year</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#E9A6A6]">4</StyledText>
                <StyledText className="text-white">Lists</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#9C4A8B]">30</StyledText>
                <StyledText className="text-white">Review</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}
export default UserStats;