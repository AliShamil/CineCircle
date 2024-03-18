import { useState } from "react";
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import DraggableFlatList, { ScaleDecorator, } from "react-native-draggable-flatlist";
import FastImage from "react-native-fast-image";
const posterItems = [
    { poster: "https://i.pinimg.com/564x/0f/03/08/0f0308fa107964b8d0542ef8ffe4d119.jpg" },
    { poster: "https://i.pinimg.com/564x/d7/80/c4/d780c4dac2350b97c00177a1190572ec.jpg" },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg" },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg" },
];
const FavoriteFilms = () => {
    const [favFilms, setFavfilms] = useState(posterItems)
    const renderItem = ({ item, drag, isActive }) => (

        <StyledTouchableOpacity onLongPress={drag} disabled={isActive}>

            <FastImage
                style={{ width: 70, height: 90, borderRadius: 7 }}
                source={{
                    uri: item.poster,
                    priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.cover}
            />
            {/* <FastImage className="w-[70px] rounded h-[90px]" style={{ resizeMode: "stretch" }} source={{ uri: item.poster }} /> */}
        </StyledTouchableOpacity>

    );
    return (
        <StyledView className="items-center mb-5">
            <StyledText className="font-semibold my-4 text-white">Kayren's favorite Films</StyledText>
            <DraggableFlatList
                data={favFilms}

                contentContainerStyle={{ gap: 20 ,height: 100,  alignItems:"center"}}
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