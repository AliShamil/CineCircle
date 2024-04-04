import { StyledImage, StyledText, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import StarIcon from "../../../assets/icons/star-icon.svg"
import StarEmptyIcon from "../../../assets/icons/star-empty.svg"
import Stars from 'react-native-stars';
import CommentIcon from "../../../assets/icons/comment-icon.svg"
import { FlatList } from "react-native";


const friendsReviewItems = [
    {
        movie: { title: "The Irishman", year: 2019, poster: "https://i.pinimg.com/564x/17/b7/76/17b776a9e2d980bfa56cd6117a538f9e.jpg" }, author: {
            username: "Adrian", ppUrl: "https://i.pinimg.com/564x/ff/88/09/ff88094d95a1fed15700ba9b7cf55602.jpg", review: `working stiffs

not sure i've ever mentioned this before but i have a very personal fear of not... feeling... correctly. like enormously important things are happening around you in a matter-of-fact, dissociative way that you can understand the significance of but you can't shake.`}, starCount: 4, commentCount: 8
    },
    {
        movie: { title: "Zack Snyder’s Justice League", year: 2021, poster: "https://i.pinimg.com/564x/47/38/7c/47387c080decbfb56f75149974564309.jpg" }, author: {
            username: "Audrey", ppUrl: "https://i.pinimg.com/564x/cf/87/cc/cf87ccda6ae9a345e0c9f7424d095162.jpg", review: `the interesting thing about snyder is that he always swings big: whether it results in a colossal whiff or a home run just depends on the particular project, amount of creative control, and audience reception. but he always puts his unique style into it, and for that reason i’ve really grown fond of his stuff. his involvement in the dceu has kept me interested, and i still have fun with both their best content or biggest flops...`
        }, starCount: 4, commentCount: 2
    },
    {
        movie: { title: "tick, tick…BOOM!", year: 2021, poster: "https://i.pinimg.com/564x/74/f2/6c/74f26c887b8b656913b4d0b0d7256b05.jpg" }, author: {
            username: "Rebecca", ppUrl: "https://i.pinimg.com/564x/63/ab/ff/63abfffdeb84cbe05de887ed9a5749e0.jpg", review: `I’ve finally figured out what this movie means to me, in a way. And mostly through comparison to Spielberg’s West Side Story aka the only other musical adaptation I watched this year, whoops. West Side Story is dreamlike, enthralling, heartwrenching, it’s a grand and tragic romance that you can’t help but get swept up into. Tick Tick Boom isn’t that; it has a few more moments of melodrama, the camera movements...`
        }, starCount: 3, commentCount: 20
    },
];







const message = `working stiffs

not sure i've ever mentioned this before but i have a very personal fear of not... feeling... correctly. like enormously important things are happening around you in a matter-of-fact, dissociative way that you can understand the significance of but you can't shake.`
const FriendsReview = () => {
    const renderItem = ({ item }) => (
        <StyledView className="flex-row bg-[#29243B] rounded-2xl  justify-between">
            <StyledImage className="w-[40px] h-[40px] rounded-full" source={{ uri: item.author.ppUrl }} />
            <StyledView className="w-[60%] px-1">
                <StyledView className="flex-row items-center mt-1">
                    <StyledText className="text-sm text-white w-44" numberOfLines={1} >{item.movie.title}</StyledText>
                    <StyledText className="text-[10px] text-[#797684] "> {item.movie.year}</StyledText>
                </StyledView>
                <StyledView className="flex-row mt-1 items-center">
                    <StyledText className="text-[#94929D] text-xs">Review by</StyledText>
                    <StyledTouchableOpacity>
                        <StyledText className="text-[#E9A6A6] text-xs max-w-[60px]" numberOfLines={1}> {item.author.username}</StyledText>
                    </StyledTouchableOpacity>
                    <StyledView className="flex-row ml-1">
                        <Stars
                            display={3.5}
                            spacing={1}
                            count={5}
                            starSize={5}
                            fullStar={<StarIcon width={10} height={10}/>}
                            emptyStar={<StarEmptyIcon width={10} height={10}/>} />
                        {/* {renderStars(item.starCount)} */}
                    </StyledView>
                    <StyledView className="flex-row items-center ml-1">
                        <CommentIcon />
                        <StyledText className="text-[#94929D] ml-1 text-xs">{item.commentCount}</StyledText>
                    </StyledView>
                </StyledView>
                <StyledText className="text-white text-xs mt-1" textBreakStrategy="balanced" numberOfLines={4}>
                    {item.author.review}
                </StyledText>
                <StyledTouchableOpacity className="my-1">
                    <StyledText className="text-[#9C4A8B] text-xs">Read more &gt;</StyledText>
                </StyledTouchableOpacity>
            </StyledView>

            <StyledImage style={{ resizeMode: "stretch" }} className="w-[90px] h-full rounded-2xl" source={{ uri: item.movie.poster }} />


        </StyledView>
    );
    return (
        <StyledView className="mt-6 mb-5 mr-5">
            <StyledText className="text-base mb-5 text-white font-semibold">Recent Friends’ Review</StyledText>

            <FlatList
                contentContainerStyle={{ gap: 13, }}
                data={friendsReviewItems}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                scrollEnabled={false}
            />
        </StyledView>
    )
}
export default FriendsReview;