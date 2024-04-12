import { useState } from "react";
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import DraggableFlatList, { ScaleDecorator, } from "react-native-draggable-flatlist";
import FastImage from "react-native-fast-image";
import useAuthTestStore from "../../common/hooks/useAuthTestStore";
import { useStore } from "zustand";

const posterItems = [
    { poster: "https://i.pinimg.com/564x/0f/03/08/0f0308fa107964b8d0542ef8ffe4d119.jpg" },
    { poster: "https://i.pinimg.com/564x/d7/80/c4/d780c4dac2350b97c00177a1190572ec.jpg" },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg" },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg" },
];
const FavoriteFilms = () => {
    const { profile } = useStore(useAuthTestStore);
    const [favFilms, setFavfilms] = useState(posterItems)
    const renderItem = ({ item, drag, isActive }) => (

        <StyledTouchableOpacity onLongPress={drag} disabled={isActive}>

            <FastImage
                style={{ width: 80, height: 105, borderRadius: 7 }}
                source={{
                    uri:  `https://image.tmdb.org/t/p/w500${item.poster}`,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.stretch}
            />
            {/* <FastImage className="w-[70px] rounded h-[90px]" style={{ resizeMode: "stretch" }} source={{ uri: item.poster }} /> */}
        </StyledTouchableOpacity>

    );
    return (
        <StyledView className="items-center ">
            <StyledText className="font-semibold mt-4 mb-2 text-base text-white capitalize">Ali's favorite Films</StyledText>
            <DraggableFlatList
                data={profile?.favoriteMovies}

                contentContainerStyle={{ gap: 8 ,height: 120,  alignItems:"center"}}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                onDragEnd={({ data }) => setFavfilms(data)}
                scrollEnabled={false}
                horizontal={true}
            />
        </StyledView>
    )
}
export default FavoriteFilms;