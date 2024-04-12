import { StyledView, StyledImage, StyledText ,StyledTouchableOpacity } from "../common/components/StyledComponents";

const StartPage = () => {
    return (
        <StyledView className="flex-1 items-center">
            <StyledView className="w-full h-[50%]  absolute top-0">
                <StyledImage className="w-screen" source={require("../../assets/images/start-header.png")} />
            </StyledView>
            <StyledImage className="absolute w-[240px] h-[120px] top-1/2" source={require("../../assets/images/logo.png")} />
            <StyledView className="w-[80%] absolute bottom-[20%] items-center">
                <StyledText className="text-white text-center text-xl font-bold">
                    “Track films you’ve watched. Save those you want to see.
                    Tell your friends what’s good.”
                </StyledText>
            </StyledView>
            <StyledTouchableOpacity className="bg-[#E9A6A6] absolute bottom-[10%] h-[40px] w-[140px]  rounded-[30px] items-center justify-center">
                    <StyledText className="text-lg font-bold">
                       Get Started
                    </StyledText>
                </StyledTouchableOpacity>
        </StyledView>
    )
}
export default StartPage;