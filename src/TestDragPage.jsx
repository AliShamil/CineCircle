
import { useState } from "react";
import { NestableScrollContainer, NestableDraggableFlatList } from "react-native-draggable-flatlist"
import { StyledImage, StyledTouchableOpacity } from "./common/components/StyledComponents";
import DraggableFlatList, {
    ScaleDecorator,
} from "react-native-draggable-flatlist";
const posterItems = [
    { poster: "https://i.pinimg.com/564x/1b/12/6a/1b126ad3751d8fd49d75d358fdb09859.jpg" },
    { poster: "https://i.pinimg.com/564x/a3/17/74/a31774c4a290ca6ec988f0598cbf9a6b.jpg" },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg" },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg" },
    { poster: "https://i.pinimg.com/564x/6a/bc/ab/6abcab6aed6c25b77d8c2b79e92c021a.jpg" },
];
const TestDragPage = () => {
    const [data1, setData1] = useState(posterItems);
    console.log(data1)
    const renderItem = ({ item, drag, isActive }) => (
        <ScaleDecorator>
            <StyledTouchableOpacity onLongPress={drag} disabled={isActive} className="">
                <StyledImage className="w-full rounded h-[85px]" source={{ uri: item.poster }} />
            </StyledTouchableOpacity>
        </ScaleDecorator>
    );
    return (

        <DraggableFlatList
            data={data1}
            contentContainerStyle={{ gap: 10 }}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            onDragEnd={({ data }) => setData1(data)}
        />
    )
}
export default TestDragPage;