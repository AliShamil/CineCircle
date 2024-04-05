import { useState } from 'react'
import { Dimensions } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

function DiarySkeleton() {
    const [screenWidth, setScreenWidth] = useState(Dimensions.get('window').width);
    return (
        <SkeletonPlaceholder backgroundColor='#3D3B54'>
            <SkeletonPlaceholder.Item height={40} width={screenWidth} borderRadius={24} />
            {[...Array(9)].map((_, index) => (
                index % 2 == 1 ? <SkeletonPlaceholder.Item key={index.toString()} height={40} width={screenWidth} borderRadius={24} /> :
                    <SkeletonPlaceholder.Item key={index} flexDirection="row" padding={10} alignItems="center">
                        <SkeletonPlaceholder.Item width={64} height={64} borderRadius={8} />
                        <SkeletonPlaceholder.Item marginLeft={12} width={64} height={80} borderRadius={8} />
                        <SkeletonPlaceholder.Item marginLeft={12} flexDirection='column'>
                            <SkeletonPlaceholder.Item width={screenWidth - 200} marginBottom={8} height={20} borderRadius={8} />
                            <SkeletonPlaceholder.Item width={150} height={20} borderRadius={8} />
                        </SkeletonPlaceholder.Item>
                    </SkeletonPlaceholder.Item>
            ))}
        </SkeletonPlaceholder>
    )
}

export default DiarySkeleton