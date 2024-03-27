import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../common/components/StyledComponents";
import PenIcon from "../../assets/icons/pen-icon.svg"
import UserStats from "./components/UserStats";
import { ScrollView } from "react-native";
import FavoriteFilms from "./components/FavoriteFilms";
import RecentWatched from "./components/RecentWatched";
import RecentReviewed from "./components/RecentReviewed";
const Profile = () => {
    return (
        <StyledView className="flex-1 ">
            <StyledView className="w-full h-[25%]  ">
                <StyledImage className="w-full h-full" style={{ resizeMode: "cover" }} source={{ uri: "https://i.pinimg.com/736x/3a/cc/25/3acc25f4d5b4d7b26f5132b0aed3c745.jpg" }} />
            </StyledView>
            <StyledView className="absolute top-28 z-20 w-full items-center">
                <StyledView className="w-20 h-20 ">
                    <StyledTouchableOpacity className="w-5 h-5 p-1  items-center bg-[#1F1D36] rounded-full z-10 absolute right-0">
                        <PenIcon />
                    </StyledTouchableOpacity>
                    <StyledImage className="w-full rounded-full h-full" style={{ resizeMode: "cover" }} source={{ uri: "https://i.pinimg.com/564x/ba/a9/b8/baa9b8ff466daf133bb63034e2bd4e2b.jpg" }} />
                </StyledView>
                <StyledText className="text-lg font-bold text-white">Ali</StyledText>
                <StyledView className="flex-row gap-10">
                    <StyledTouchableOpacity className="items-center">
                        <StyledView className="flex-row">
                            <StyledText className="text-white text-xs">500</StyledText>
                            <StyledText className="ml-1 text-white text-xs">Followers</StyledText>
                        </StyledView>
                        <StyledView className="w-[85%] h-[2px] mt-1 bg-[#E9A6A6]"></StyledView>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity className="items-center">
                        <StyledView className="flex-row">
                            <StyledText className="text-white text-xs">420</StyledText>
                            <StyledText className="ml-1 text-white text-xs">Followings</StyledText>
                        </StyledView>
                        <StyledView className="w-[85%] h-[2px] mt-1 bg-[#E9A6A6]"></StyledView>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledView>
            <ScrollView className="mt-20">

                <StyledView className=" flex-1 h-full w-full  items-center">
                    <UserStats />
                    <FavoriteFilms />
                </StyledView>
                <StyledView className="h-[2px] mt-5 w-full bg-[#49485C]"></StyledView>
                
                <RecentWatched/>
                <RecentReviewed/>
            </ScrollView>

        </StyledView>
    )
}
export default Profile;