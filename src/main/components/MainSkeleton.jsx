import { useState } from 'react'
import { Dimensions } from 'react-native'
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

function MainSkeleton() {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    const [screenHeight, setScreenHeight] = useState(Dimensions.get('window').height);

    return (
        <SkeletonPlaceholder backgroundColor='#3D3B54' width={screenWidth} height={screenHeight}>
            <SkeletonPlaceholder.Item paddingHorizontal={20} marginBottom={8} marginTop={40}>
                <SkeletonPlaceholder.Item flexDirection='col'>
                    <SkeletonPlaceholder.Item height={28} borderRadius={10} width={200} marginBottom={10} />
                    <SkeletonPlaceholder.Item height={16} borderRadius={10} width={270} />
                    <SkeletonPlaceholder.Item height={24} borderRadius={10} width={270} marginVertical={24} />
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item flexDirection='row' marginBottom={20}>

                    {[...Array(6)].map((_, index) => (
                        <SkeletonPlaceholder.Item key={index} borderRadius={4} width={60} marginRight={13} height={85} />
                    ))}
                </SkeletonPlaceholder.Item>

                <SkeletonPlaceholder.Item height={24} borderRadius={10} marginTop={30} marginBottom={20} width={270} />
                <SkeletonPlaceholder.Item flexDirection='row' marginBottom={20}>

                    {[...Array(5)].map((_, index) => (
                        <SkeletonPlaceholder.Item key={index} >
                            <SkeletonPlaceholder.Item borderRadius={4} width={144} marginRight={15} height={120} />
                            <SkeletonPlaceholder.Item height={24} borderRadius={10} marginTop={10} width={110} />
                            <SkeletonPlaceholder.Item height={24} borderRadius={10} marginTop={10} width={70} />
                            <SkeletonPlaceholder.Item height={16} borderRadius={10} marginTop={15} width={144} />
                        </SkeletonPlaceholder.Item>
                    ))}
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item height={24} borderRadius={10} marginTop={30} marginBottom={20} width={270} />
                <SkeletonPlaceholder.Item>
                    {[...Array(5)].map((_, index) => (
                        <SkeletonPlaceholder.Item key={index} width={screenWidth-40} borderRadius={10} height={200} />
                    ))}
                </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    )
}

export default MainSkeleton