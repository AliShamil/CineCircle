import SkeletonPlaceholder from 'react-native-skeleton-placeholder'

function FilmsSkeleton() {
    return (
        <SkeletonPlaceholder backgroundColor='#3D3B54'>
            <SkeletonPlaceholder.Item padding={8} flexDirection='col'>
                {[...Array(8)].map((_, index) => (
                    <SkeletonPlaceholder.Item flexDirection='row' key={index} >
                        {[...Array(4)].map((_, index) => (
                            <SkeletonPlaceholder.Item key={index}>
                                <SkeletonPlaceholder.Item marginHorizontal={8} marginTop={8} marginBottom={4} width={80} height={105} borderRadius={7} />
                                <SkeletonPlaceholder.Item marginLeft={8} width={55} borderRadius={8} height={10} />
                            </SkeletonPlaceholder.Item>
                        ))}
                    </SkeletonPlaceholder.Item>
                ))}
            </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
    )
}

export default FilmsSkeleton