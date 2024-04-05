import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../common/components/StyledComponents";
import PenIcon from "../../assets/icons/pen-icon.svg"
import UserStats from "./components/UserStats";
import { ScrollView } from "react-native";
import FavoriteFilms from "./components/FavoriteFilms";
import RecentWatched from "./components/RecentWatched";
import RecentReviewed from "./components/RecentReviewed";
import { useEffect, useState } from "react";
import ProfileSkeleton from "./components/ProfileSkeleton";
const Profile = () => {
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setInterval(() => setLoader(false), 3000)
    })
    return (
        <>
            {loader ? (<ProfileSkeleton />)
                : (<StyledView className="flex-1 ">
                    <StyledView className="w-full h-[23%]  ">
                        <StyledImage className="w-full h-full" style={{ resizeMode: "cover" }} source={{ uri: "https://i.pinimg.com/originals/2d/44/e9/2d44e965dff94b7aa7a51fb42f25faf8.gif" }} />
                    </StyledView>
                    <StyledView className="absolute top-20 z-20 w-full items-center">
                        <StyledView className="w-20 h-20 ">
                            <StyledTouchableOpacity className="w-5 h-5 p-1  items-center bg-[#1F1D36] rounded-full z-10 absolute right-0">
                                <PenIcon />
                            </StyledTouchableOpacity>
                            <StyledImage className="w-full rounded-full h-full" style={{ resizeMode: "cover" }} source={{ uri: "https://i.pinimg.com/564x/ba/a9/b8/baa9b8ff466daf133bb63034e2bd4e2b.jpg" }} />
                        </StyledView>
                        <StyledText className="text-lg font-bold text-white">Ali</StyledText>
                        <StyledText className="text-xs  text-white mx-5 mb-2" numberOfLines={1}>sdjk;vbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</StyledText>
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

                        <RecentWatched />
                        <RecentReviewed />
                    </ScrollView>

                </StyledView>)}
        </>
    )
}
export default Profile;