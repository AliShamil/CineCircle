import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useState } from 'react'
import { Dimensions } from 'react-native'

function ProfileSkeleton() {
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    return (
        <SkeletonPlaceholder backgroundColor='#3D3B54'>
            <SkeletonPlaceholder.Item width={screenWidth} height={screenHeight * 23 / 100} />
            <SkeletonPlaceholder.Item justifyContent='center' gap={20} marginTop={30} flexDirection='row' width={screenWidth}>
                <SkeletonPlaceholder.Item width={120} borderRadius={4} marginRight={24} height={22} />
                <SkeletonPlaceholder.Item width={120} borderRadius={4} height={22} />
            </SkeletonPlaceholder.Item>
            <SkeletonPlaceholder.Item flexDirection='row' paddingHorizontal={20} justifyContent='space-between' width={screenWidth} gap={20} marginTop={40} >
                <SkeletonPlaceholder.Item borderRadius={4} height={32} width={80} />
                <SkeletonPlaceholder.Item borderRadius={4} height={32} width={80} />
                <SkeletonPlaceholder.Item borderRadius={4} height={32} width={80} />
                <SkeletonPlaceholder.Item borderRadius={4} height={32} width={80} />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item flexDirection='row' justifyContent='center' width={screenWidth} gap={8} marginTop={60}>
                <SkeletonPlaceholder.Item width={80} height={105} borderRadius={7} />
                <SkeletonPlaceholder.Item width={80} height={105} borderRadius={7} />
                <SkeletonPlaceholder.Item width={80} height={105} borderRadius={7} />
                <SkeletonPlaceholder.Item width={80} height={105} borderRadius={7} />
            </SkeletonPlaceholder.Item>

            <SkeletonPlaceholder.Item flexDirection='row' paddingHorizontal={20} width={screenWidth} marginTop={90}>
                <SkeletonPlaceholder.Item width={80} height={110} marginRight={12} borderRadius={4} />
                <SkeletonPlaceholder.Item width={80} height={110} marginRight={12} borderRadius={4} />
                <SkeletonPlaceholder.Item width={80} height={110} marginRight={12} borderRadius={4} />
                <SkeletonPlaceholder.Item width={80} height={110} marginRight={12} borderRadius={4} />
                <SkeletonPlaceholder.Item width={80} height={110} marginRight={12} borderRadius={4} />
            </SkeletonPlaceholder.Item>

                <SkeletonPlaceholder.Item width={screenWidth-40} height={180} marginHorizontal={20} marginTop={90} borderRadius={4} />
        </SkeletonPlaceholder>
    )
}

export default ProfileSkeleton