import { FlatList } from "react-native";
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
const posterItems = [
    { poster: "https://i.pinimg.com/564x/1b/12/6a/1b126ad3751d8fd49d75d358fdb09859.jpg" },
    { poster: "https://i.pinimg.com/564x/a3/17/74/a31774c4a290ca6ec988f0598cbf9a6b.jpg" },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg" },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg" },
    { poster: "https://i.pinimg.com/564x/6a/bc/ab/6abcab6aed6c25b77d8c2b79e92c021a.jpg" },
];
const PopularFilms = () => {
    const renderItem = ({ item }) => (
        <StyledTouchableOpacity className="">
            <StyledImage className="w-[60px] rounded h-[85px]" source={{ uri: item.poster }} />
        </StyledTouchableOpacity>
    );
    return (
        <StyledView className="mt-6 mb-5 mr-5">
            <StyledText className="text-base mb-5 text-white font-semibold">Popular Films This Month</StyledText>
            <FlatList 
                contentContainerStyle={{gap:13,}}
                data={posterItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal={true}
            />

        </StyledView>
    )
}
export default PopularFilms;