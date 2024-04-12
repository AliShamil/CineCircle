import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../common/components/StyledComponents";
import HamburgerMenuIcon from '../../assets/icons/hamburger-icon.svg'
import { useNavigation } from "@react-navigation/native";
import PopularFilms from "./components/PopularFilms";
import PopularLists from "./components/PopularLists";
import FriendsReview from "./components/FriendsReview";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import MainSkeleton from "./components/MainSkeleton";
import { storage } from "../../storage";
import { useStore } from "zustand";
import useApiStore from "../common/hooks/useApiStore";
import FastImage from 'react-native-fast-image'
import useAuthTestStore from "../common/hooks/useAuthTestStore";


const MainPage = () => {
    const nav = useNavigation();
    const [loader, setLoader] = useState(false);
    const { profile } = useStore(useAuthTestStore);
console.log(profile.profilePicture)
    const openDrawer = () => {
        nav.openDrawer();
    };
    return (
        <>
            {loader ? (<MainSkeleton />)
                : (<StyledView className="flex-1 relative">
                    <StyledView className=" mt-10 mb-2 flex-row items-center justify-between w-screen px-[20px]">
                        <StyledTouchableOpacity onPress={openDrawer} className="bg-[#1F1D36] ">
                            <HamburgerMenuIcon />
                        </StyledTouchableOpacity>
                        <StyledTouchableOpacity onPress={()=>nav.navigate("ProfilePage",{screen:"Profile"})}>
                            <FastImage className="rounded-full object-contain w-10 h-10 mt-1"
                                source={{
                                    uri: profile.profilePicture,
                                    priority: FastImage.priority.normal,
                                }}
                                resizeMode={FastImage.resizeMode.cover} />
                            <StyledView className="bg-red-600 w-[12px] h-[12px] rounded-full absolute right-0" />
                        </StyledTouchableOpacity>
                    </StyledView>
                    <ScrollView>
                        <StyledView className="pl-[20px]">
                            <StyledText className="text-lg font-bold text-[#E9A6A6]">
                                <StyledText className="text-white">Hello,</StyledText>
                                <StyledText > {profile.username}!</StyledText>
                            </StyledText>
                            <StyledText className="text-white text-xs">
                                Review or track film you’ve watched...
                            </StyledText>
                            <PopularFilms />
                            {profile?.followers?.length > 0 &&
                                <PopularLists />
                            }
                            {profile?.followers?.length > 0 &&
                                <FriendsReview />
                            }
                        </StyledView>

                    </ScrollView>
                </StyledView>)}
        </>
    )
}
export default MainPage;