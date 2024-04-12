import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import LikeIcon from "../../../assets/icons/like-icon.svg"
import CommentIcon from "../../../assets/icons/comment-icon.svg"
import { FlatList } from "react-native";
import useAuthTestStore from "../../common/hooks/useAuthTestStore";
import { useStore } from "zustand";
import useApiStore from "../../common/hooks/useApiStore";
import { useEffect, useState } from "react";
const listItems = [
    {
        poster: [
            "https://i.pinimg.com/564x/8a/b6/1e/8ab61ef423f15a8fcebc256f488c3769.jpg",
            "https://i.pinimg.com/564x/f4/ad/55/f4ad55274604a04aec5255ce120eedbb.jpg",
            "https://i.pinimg.com/564x/32/40/73/32407354dad750b4e22b653695355edd.jpg",
            "https://i.pinimg.com/564x/ea/fc/82/eafc82d40b869f2f0a0db0e2d46e1fe1.jpg"
        ],
        title: "Life-Changing Movies",
        author: {
            ppUrl: "https://i.pinimg.com/564x/1d/13/7b/1d137ba70a9d0ae22c38d0fa1e80f5f7.jpg",
            username: "Thomas",
            likeCount: 500,
            commentCount: 79
        }
    },
    {
        poster: [
            "https://i.pinimg.com/564x/28/3e/90/283e904512c6e4884592400676df70d0.jpg",
            "https://i.pinimg.com/564x/3c/46/18/3c4618345f71afc5c9810603ccea03a8.jpg",
            "https://i.pinimg.com/564x/50/62/18/506218f1e12a78a93da47e1c38b1afd8.jpg",
            "https://i.pinimg.com/564x/1f/63/8e/1f638e7f9a45de41e2252ac29982dc6c.jpg"
        ],
        title: "100 Best Thriller Movies",
        author: {
            ppUrl: "https://i.pinimg.com/564x/49/15/5b/49155b99151b9e7c6a98e3dfddf957b7.jpg",
            username: "Wendy",
            likeCount: 887,
            commentCount: 123
        }
    },
    {
        poster: [
            "https://i.pinimg.com/564x/b3/73/36/b3733697605efb2459710c53f7180a37.jpg",
            "https://i.pinimg.com/564x/d6/b3/95/d6b395c6f3045758dc4cde4765b572a1.jpg",
            "https://i.pinimg.com/564x/42/36/2f/42362f58aa607a1057f17c839af2e4fc.jpg",
            "https://i.pinimg.com/564x/f0/21/23/f02123ed88f4fd0209e1e49b6e45d2b3.jpg"
        ],
        title: "Comfort Movies To Watch",
        author: {
            ppUrl: "https://i.pinimg.com/564x/c2/37/a9/c237a934a134ce378470cd76501d30bc.jpg",
            username: "Jesse",
            likeCount: 552,
            commentCount: 37
        }
    },
];

const PopularLists = () => {
    const { token } = useStore(useAuthTestStore);
const { api } = useStore(useApiStore);
const [data, setData] = useState();
const response = async () => {
    await api.get('api/Li/getpopularLists', {
        headers: {
            Authorization: `Bearer ${token.accessToken}`,
        },
    }).then(res => {
        let data = res.data;
        setData(data)
    }).catch(err => {
        console.log(err);
    });
}

    const renderItem = ({ item }) => (
        <StyledView className="w-[144px] ">
            <StyledView className="flex-row shadow-lg shadow-black">
                <StyledView className="shadow-md shadow-black z-50">
                    <StyledImage className="rounded w-24 h-32 object-fill"  source={{ uri: item.poster[0] }} />
                </StyledView>
                <StyledView className="shadow-md shadow-black z-40">
                    <StyledImage className="rounded w-24 h-32  object-fill right-[80px] " source={{ uri: item.poster[1] }} />
                </StyledView>
                <StyledView className="shadow-md shadow-black z-30">
                    <StyledImage className="rounded w-24 h-32 object-fill right-[160px]" source={{ uri: item.poster[2] }} />
                </StyledView>
                <StyledView className="shadow-md shadow-black">
                    <StyledImage className="rounded w-24 h-32 object-fill right-[240px]" source={{ uri: item.poster[3] }} />
                </StyledView>
            </StyledView>
            <StyledTouchableOpacity className="my-1">
                <StyledText className="text-base text-[#E9A6A6] font-semibold">{item.title}</StyledText>
            </StyledTouchableOpacity>
            <StyledTouchableOpacity className="flex-row items-center justify-between mt-1">
                <StyledImage className="w-[25px] h-[25px] rounded-full mr-0.5" source={{ uri: item.author.ppUrl }} />
                <StyledText className="text-[10px] font-semibold text-[#E9A6A6] w-11" numberOfLines={1}>{item.author.username}</StyledText>
                <StyledView className="flex-row items-center mr-1">
                    <LikeIcon />
                    <StyledText className="ml-1 text-[#8F8E9B] text-[10px]">{item.author.likeCount}</StyledText>
                </StyledView>
                <StyledView className="flex-row items-center">
                    <CommentIcon />
                    <StyledText className="ml-1 text-[#8F8E9B] text-[10px]">{item.author.commentCount}</StyledText>
                </StyledView>
            </StyledTouchableOpacity>
        </StyledView>
    );
    // useEffect(() => {
    //     response()
    // }, []);
    console.log(data)
    return (
        <StyledView className="mt-6 mb-5 mr-5">
            <StyledText className="text-base mb-5 text-white font-semibold">Popular Lists This Month</StyledText>
            <FlatList
                contentContainerStyle={{ gap: 15 }}
                data={listItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </StyledView>
    )
}
export default PopularLists;