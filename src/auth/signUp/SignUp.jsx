import { StyledImage, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import { ScrollView } from "react-native";
import LockIcon from "../../../assets/icons/lock-icon.svg"
import EmailIcon from "../../../assets/icons/email-icon.svg"
import UserIcon from "../../../assets/icons/user-icon.svg"
import EyeIcon from "../../../assets/icons/eye-icon.svg"
import ClosedEyeIcon from "../../../assets/icons/eye-closed-icon.svg"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
const SignUp = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const nav =useNavigation()
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <ScrollView style={{backgroundColor:  "#1F1D36"}}>
            <StyledView className=" flex-1 items-center" >
                <StyledView className="items-center">
                    <StyledImage className="w-screen" source={require('../../../assets/images/login-banner.png')} />
                    <StyledImage className="absolute top-[290]" source={require('../../../assets/images/logo.png')} />
                </StyledView>
                <StyledView className="items-center mt-5">
                    <StyledText className="text-3xl text-white font-bold">Sign Up</StyledText>
                    <StyledText className="text-white">Create an account to continue.</StyledText>
                </StyledView>
                <StyledView className="w-full items-center py-5">
                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px] flex-row items-center">
                        <UserIcon width={20} height={17} />
                        <StyledTextInput className="ml-2 mr-6 text-white " placeholder="Username" placeholderTextColor={"#ACACB4"}></StyledTextInput>
                    </StyledView>

                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px] flex-row items-center">
                        <EmailIcon width={20} height={17} />
                        <StyledTextInput className="ml-2 mr-6 text-white " keyboardType="email-address" placeholder="Email" placeholderTextColor={"#ACACB4"}></StyledTextInput>
                    </StyledView>

                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px]  flex-row items-center">
                        <LockIcon width={20} height={17} />
                        <StyledTextInput className="ml-2 mr-2 w-[75%] text-white" placeholder="Password" placeholderTextColor={"#ACACB4"} secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <StyledTouchableOpacity className="mr-10  " onPress={toggleShowPassword}>
                            {showPassword ? <EyeIcon /> : <ClosedEyeIcon />}
                        </StyledTouchableOpacity>
                    </StyledView>
                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px]  flex-row items-center">
                        <LockIcon width={20} height={17} />
                        <StyledTextInput className="ml-2 mr-2 w-[75%] text-white" placeholder="Confirm Password" placeholderTextColor={"#ACACB4"} secureTextEntry={!showPassword}
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                        />
                        <StyledTouchableOpacity className="mr-10  " onPress={toggleShowPassword}>
                            {showPassword ? <EyeIcon /> : <ClosedEyeIcon />}
                        </StyledTouchableOpacity>
                    </StyledView>

                </StyledView>
                <StyledTouchableOpacity className="bg-[#E9A6A6] h-[40px] w-[140px]  rounded-[30px] items-center justify-center">
                    <StyledText className="text-lg font-bold">
                        Sign Up
                    </StyledText>
                </StyledTouchableOpacity>
                <StyledView className="items-center flex-row mt-5 mb-10">
                    <StyledText className="text-[#E9A6A6] text-xs">
                        Already have an account? Go to the 
                    </StyledText>
                    <StyledTouchableOpacity onPress={()=> nav.navigate("Login")}>
                        <StyledText   className="text-[#8C4480] text-sm ml-1">
                            Login Page.
                        </StyledText>
                    </StyledTouchableOpacity>
                </StyledView>
            </StyledView>
        </ScrollView>
    )
}
export default SignUp;
