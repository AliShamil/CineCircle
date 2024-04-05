import SkeletonPlaceholder from 'react-native-skeleton-placeholder'
import { useState } from 'react'
import { Dimensions } from 'react-native'

function MovieSkeleton() {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);

    return (
        <SkeletonPlaceholder backgroundColor='#3D3B54'>
            <SkeletonPlaceholder.Item style={{ position: 'relative' }} paddingHorizontal={20}>
                <SkeletonPlaceholder width={900} height={600} borderRadius={9999} style={{ position: 'absolute', top: -370, right: 0 }} />
                <SkeletonPlaceholder.Item paddingTop={225} flexDirection='row' >
                    <SkeletonPlaceholder.Item width={120} borderRadius={8} height={190} />
                    <SkeletonPlaceholder.Item marginLeft={30} paddingTop={20}>
                        <SkeletonPlaceholder.Item height={28} marginVertical={4} borderRadius={4} width={screenWidth - 190} />
                        <SkeletonPlaceholder.Item height={18} borderRadius={4} width={screenWidth - 250} />
                        <SkeletonPlaceholder.Item height={18} marginVertical={12} borderRadius={4} width={screenWidth - 250} />
                        <SkeletonPlaceholder.Item height={70} borderRadius={4} width={screenWidth - 190} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
                <SkeletonPlaceholder.Item marginTop={50} flexDirection='row'>
                    <SkeletonPlaceholder.Item marginRight={12} height={30} width={80} borderRadius={20} />
                    <SkeletonPlaceholder.Item marginRight={12} height={30} width={80} borderRadius={20} />
                    <SkeletonPlaceholder.Item marginRight={12} height={30} width={80} borderRadius={20} />
                </SkeletonPlaceholder.Item>

                <SkeletonPlaceholder.Item marginTop={20} flexDirection='row'>
                    <SkeletonPlaceholder.Item flexDirection='col'>
                        <SkeletonPlaceholder.Item marginRight={30} height={50} width={50} borderRadius={9999} />
                        <SkeletonPlaceholder.Item height={20} width={50} marginTop={5} borderRadius={5} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item flexDirection='col'>
                        <SkeletonPlaceholder.Item marginRight={30} height={50} width={50} borderRadius={9999} />
                        <SkeletonPlaceholder.Item height={20} width={50} marginTop={5} borderRadius={5} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item flexDirection='col'>
                        <SkeletonPlaceholder.Item marginRight={30} height={50} width={50} borderRadius={9999} />
                        <SkeletonPlaceholder.Item height={20} width={50} marginTop={5} borderRadius={5} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item flexDirection='col'>
                        <SkeletonPlaceholder.Item marginRight={30} height={50} width={50} borderRadius={9999} />
                        <SkeletonPlaceholder.Item height={20} width={50} marginTop={5} borderRadius={5} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item flexDirection='col'>
                        <SkeletonPlaceholder.Item marginRight={30} height={50} width={50} borderRadius={9999} />
                        <SkeletonPlaceholder.Item height={20} width={50} marginTop={5} borderRadius={5} />
                    </SkeletonPlaceholder.Item>
                    <SkeletonPlaceholder.Item flexDirection='col'>
                        <SkeletonPlaceholder.Item marginRight={30} height={50} width={50} borderRadius={9999} />
                        <SkeletonPlaceholder.Item height={20} width={50} marginTop={5} borderRadius={5} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>

                <SkeletonPlaceholder.Item marginTop={40}>
                    <SkeletonPlaceholder.Item width={'100%'} height={150} borderRadius={16} />
                </SkeletonPlaceholder.Item>

            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    )
}

export default MovieSkeleton