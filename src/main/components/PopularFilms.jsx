import { FlatList } from "react-native";
import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import useAuthTestStore from "../../common/hooks/useAuthTestStore";
import { useStore } from "zustand";
import useApiStore from "../../common/hooks/useApiStore";
import { useNavigation } from "@react-navigation/native";

import { useEffect, useState } from "react";

const PopularFilms = () => {
    const { token } = useStore(useAuthTestStore);
    const { api } = useStore(useApiStore);
    const [data, setData] = useState();
    const nav = useNavigation();
    const response = async () => {
        await api.get('api/Movie/getTrendingMovies', {
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
        <StyledTouchableOpacity onPress={()=>nav.navigate("MovieDetails",{screen:"Movie" ,item:item?.id,merge: true})} className="">
            <StyledImage className="w-[60px] rounded h-[85px]" source={{ uri: `https://image.tmdb.org/t/p/w500${item.posterPath}` }} />
        </StyledTouchableOpacity>
    );
    useEffect(() => {
        response()
    }, []);
 
    return (
        <StyledView className="mt-6 mb-5 mr-5">
            <StyledText className="text-base mb-5 text-white font-semibold">Popular Films This Month</StyledText>
            <FlatList
                contentContainerStyle={{ gap: 13, }}
                data={data}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </StyledView>
    )
}
export default PopularFilms;