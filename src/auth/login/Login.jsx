import { StyledImage, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import { ScrollView } from "react-native";
import LockIcon from "../../../assets/icons/lock-icon.svg"
import UserIcon from "../../../assets/icons/user-icon.svg"
import EyeIcon from "../../../assets/icons/eye-icon.svg"
import ClosedEyeIcon from "../../../assets/icons/eye-closed-icon.svg"
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GoogleSigninButton,GoogleSignin,statusCodes } from "@react-native-google-signin/google-signin";
const Login = ({ onSuccess, onError }) => {
    GoogleSignin.configure({ webClientId: '993553022973-q3a0c3pc699rkbp1og1spe2573gba5ar.apps.googleusercontent.com',});
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const nav = useNavigation()
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleGoogleSignIn = async () => {
        try {
         const test =  await GoogleSignin.hasPlayServices();
         console.log(test)
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo)
         await onSuccess(userInfo); // Pass the user info to the parent component
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            console.log('Google Sign-In cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            console.log('Google Sign-In is in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            console.log('Play services not available or outdated');
          } else {
            console.log('Something went wrong with Google Sign-In: ' + error.message);
          }
        }
      };
    
    return (
        <ScrollView>
            <StyledView className=" flex-1 items-center" >
                <StyledView className="items-center">
                    <StyledImage className="w-screen" source={require('../../../assets/images/login-banner.png')} />
                    <StyledImage className="absolute top-[290]" source={require('../../../assets/images/logo.png')} />
                </StyledView>
                <StyledView className="items-center mt-5">
                    <StyledText className="text-3xl text-white font-bold">Login</StyledText>
                    <StyledText className="text-white">Please sign in to continue.</StyledText>
                </StyledView>
                <StyledView className="w-full items-center py-5">
                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px] flex-row items-center">

                        <UserIcon width={20} height={17} />
                        <StyledTextInput className="ml-2 mr-6 text-white " placeholder="Username" placeholderTextColor={"#ACACB4"}></StyledTextInput>
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

                    <StyledTouchableOpacity className="ml-[35%] mt-1">
                        <StyledText className="text-[#E9A6A6] text-xs">Forgot Password?</StyledText>
                    </StyledTouchableOpacity>

                </StyledView>
                <StyledTouchableOpacity className="bg-[#E9A6A6] h-[40px] w-[140px]  rounded-[30px] items-center justify-center">
                    <StyledText className="text-lg font-bold">
                        Login
                    </StyledText>
                </StyledTouchableOpacity>
                <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleSignIn}
      />
                <StyledView className="items-center flex-row mt-5">
                    <StyledText className="text-[#E9A6A6]">
                        Don’t have an account? Please
                    </StyledText>
                    <StyledTouchableOpacity onPress={()=> nav.navigate("SignUp")}>
                        <StyledText className="text-[#8C4480] mx-1 text-base font-bold">
                            Sign Up
                        </StyledText>
                    </StyledTouchableOpacity>
                    <StyledText className="text-[#E9A6A6]">first.</StyledText>
                </StyledView>
            </StyledView>
        </ScrollView>
    )
}
export default Login;
