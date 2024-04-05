import React, { useState, useEffect } from 'react';
import { StyledTouchableOpacity, StyledView } from '../common/components/StyledComponents';
import { FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Stars from 'react-native-stars';
import HeartIcon from "../../assets/icons/gravity-ui--heart-fill.svg"
import StarIcon from "../../assets/icons/star-icon.svg"
import StarEmptyIcon from "../../assets/icons/star-empty.svg"
import FilmsSkeleton from './components/FilmsSkeleton';

const filmItems = [
    { poster: "https://i.pinimg.com/564x/0f/03/08/0f0308fa107964b8d0542ef8ffe4d119.jpg", starCount: 3.5, isLiked: false },
    { poster: "https://i.pinimg.com/564x/d7/80/c4/d780c4dac2350b97c00177a1190572ec.jpg", starCount: 5, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/f2/ed/56/f2ed560fe62d4de524ad4be43d5658fb.jpg", starCount: 1, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
    { poster: "https://i.pinimg.com/564x/81/1f/2a/811f2a680f852b5ae38b1ffbe17af470.jpg", starCount: 3, isLiked: false },
];

const Films = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Adjust this to control the number of items per page
  const [loader, setLoader] = useState(true);

  const handleLoadMore = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const newData = filmItems.slice(startIndex, endIndex);

    setData([...data, ...newData]);
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const initialData = filmItems.slice(0, itemsPerPage);
    setData(initialData);

    setTimeout(() => setLoader(false), 3000)
  }, []);


  const renderItem = ({ item }) => (
    <StyledTouchableOpacity className='mx-[9px] mt-2'>
      <FastImage
        style={{ width: 80, height: 105, borderRadius: 7 }}
        source={{ uri: item.poster, priority: FastImage.priority.normal }}
        resizeMode={FastImage.resizeMode.stretch}
      />
      <StyledView className='flex-row'>
        <Stars
          display={item.starCount}
          spacing={1}
          count={5}
          starSize={5}
          fullStar={<StarIcon width={10} height={10} />}
          emptyStar={<StarEmptyIcon width={10} height={10} />}
        />
        {item.isLiked ? <HeartIcon /> : null}
      </StyledView>
    </StyledTouchableOpacity>
  );

  return (
    <>
    {loader ? (<FilmsSkeleton />)
      : (<StyledView className='flex'>
        <FlatList
          data={data}
          numColumns={4}
          contentContainerStyle={{ paddingBottom: 5 }}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          onEndReached={handleLoadMore}
          ListFooterComponent={() => {
            return null;
          }}
        />
      </StyledView >)
    }
  </>
  );
};

export default Films;
