import { useStore } from "zustand";
import { StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import useAuthTestStore from "../../common/hooks/useAuthTestStore";

const UserStats = () => {
    const { profile } = useStore(useAuthTestStore);
    return (
        <StyledView className="flex-row gap-10">
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#E9A6A6]">{profile?.totalMovies}</StyledText>
                <StyledText className="text-white">Total Films</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#9C4A8B]">{profile?.thisYearMovies}</StyledText>
                <StyledText className="text-white">Film This year</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#E9A6A6]">{profile?.listCount}</StyledText>
                <StyledText className="text-white">Lists</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="items-center">
                <StyledText className="text-2xl font-bold text-[#9C4A8B]">{profile?.reviewCount}</StyledText>
                <StyledText className="text-white">Review</StyledText>
            </StyledTouchableOpacity>
        </StyledView>
    )
}
export default UserStats;