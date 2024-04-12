import { StyledImage, StyledText, StyledTextInput, StyledTouchableOpacity, StyledView } from "../../common/components/StyledComponents";
import { ActivityIndicator, ScrollView } from "react-native";
import LockIcon from "../../../assets/icons/lock-icon.svg"
import UserIcon from "../../../assets/icons/user-icon.svg"
import EyeIcon from "../../../assets/icons/eye-icon.svg"
import ClosedEyeIcon from "../../../assets/icons/eye-closed-icon.svg"
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GoogleSigninButton, GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { storage } from "../../../storage";
import axios from "axios";
import { useStore } from "zustand";
import { useAuthStore } from "../../common/hooks/useAuthStore";
import useApiStore from "../../common/hooks/useApiStore";
import useAuthTestStore from "../../common/hooks/useAuthTestStore";

const Login = () => {
    GoogleSignin.configure({ idTokenAudience: 'cinecircle-6c35d', webClientId: '993553022973-q3a0c3pc699rkbp1og1spe2573gba5ar.apps.googleusercontent.com', });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [test, setTest] = useState();
    const [errors, setErrors] = useState({})
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { setIsAuthorized } = useStore(useAuthStore)
    const { setToken } = useStore(useAuthTestStore);

    const { api } = useStore(useApiStore);
    const nav = useNavigation()
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleGoogleSignIn = async () => {
        try {
            const test = await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const { user } = userInfo;
            const request = { id: user.id, name: user.name, givenName: user.givenName,familyName:user.familyName,email:user.email,photo:user.photo}
            setLoader(true)
            await api.post("api/Auth/googleSignIn", request)
                .then((res) => {
                    let data = res.data;
                    setLoader(false)
                    // console.log( JSON.stringify(data))
                    storage.set("token", data.accessToken);
                    setToken((data.accessToken))
                    setUsername("");
                    setPassword("");
                    setErrors({})
                }).catch((error) => {
                    let errors = {};
                    errors.password = error.message
                    setErrors(errors);
                    setUsername("");
                    setPassword("");
                    return;

                })
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
    const validateForm = () => {
        let errors = {};
        if (!username) errors.username = "Username is required!"
        if (!password) errors.password = "Password is required!"
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }
    const handleSubmit = async () => {
        if (validateForm()) {
            console.log("Submitted", username, password);
            setLoader(true)
            const request = { email: username, password: password }
            await api.post("api/Auth/login", request)
                .then((res) => {
                    let data = res.data;
                    setLoader(false)
                    // console.log( JSON.stringify(data))
                    storage.set("token", data.accessToken);
                    setToken((data.accessToken))
                    setUsername("");
                    setPassword("");
                    setErrors({})
                }).catch((error) => {
                    let errors = {};
                    errors.password = error.message
                    setErrors(errors);
                    setUsername("");
                    setPassword("");
                    return;

                })
        }
    }
    return (
        <ScrollView style={{ backgroundColor: "#1F1D36" }}>
            {loader && (
                <StyledView className="absolute z-50 h-screen w-screen justify-center items-center bg-black/30">
                    <StyledView className="bg-[#29243B] shadow-2xl w-[150px] h-[150px] justify-center rounded-3xl">
                        <ActivityIndicator size="100px" />
                    </StyledView>
                </StyledView>
            )}
            <StyledView className=" flex-1 items-center" >
                <StyledView className="items-center">
                    <StyledImage className="w-screen" source={require('../../../assets/images/login-banner.png')} />
                    <StyledImage className="absolute w-[200px] h-[100px] top-[290]" source={require('../../../assets/images/logo.png')} />
                </StyledView>
                <StyledView className="items-center mt-5">
                    <StyledText className="text-3xl text-white font-bold">Login</StyledText>
                    <StyledText className="text-white">Please sign in to continue.</StyledText>
                </StyledView>
                <StyledView className="w-full items-center py-5">
                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px] flex-row items-center">
                        <UserIcon width={20} height={17} />
                        <StyledTextInput value={username} onChangeText={(text) => { setUsername(text) }} className="ml-2 mr-6 text-white " placeholder="Username" placeholderTextColor={"#ACACB4"}></StyledTextInput>
                    </StyledView>
                    {errors.username ? (<StyledText className="text-red-600 mb-2">{errors.username}</StyledText>) : null}
                    <StyledView className="w-[70%] bg-[#595868] rounded-[30px] px-5 mb-2 h-[40px]  flex-row items-center">
                        <LockIcon width={20} height={17} />


                        <StyledTextInput className="ml-2 mr-2 w-[75%] text-white" placeholder="Password" placeholderTextColor={"#ACACB4"} secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                        />
                        <StyledTouchableOpacity className="mr-10 " onPress={toggleShowPassword}>
                            {showPassword ? <EyeIcon /> : <ClosedEyeIcon />}
                        </StyledTouchableOpacity>
                    </StyledView>
                    {errors.password ? (<StyledText className="text-red-600">{errors.password}</StyledText>) : null}

                    <StyledTouchableOpacity className="ml-[35%] mt-1">
                        <StyledText className="text-[#E9A6A6] text-xs">Forgot Password?</StyledText>
                    </StyledTouchableOpacity>

                </StyledView>
                <StyledTouchableOpacity onPress={() => { handleSubmit() }} className="bg-[#E9A6A6] h-[40px] w-[140px]  rounded-[30px] items-center justify-center">
                    <StyledText className="text-lg font-bold">
                        Login
                    </StyledText>
                </StyledTouchableOpacity>
                <GoogleSigninButton
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={handleGoogleSignIn}
                />
                <StyledView className="items-center flex-row my-5">
                    <StyledText className="text-[#E9A6A6]">
                        Don’t have an account? Please
                    </StyledText>
                    <StyledTouchableOpacity onPress={() => nav.navigate("SignUp")}>
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
