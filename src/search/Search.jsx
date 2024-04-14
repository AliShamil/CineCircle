import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, TextInput } from 'react-native';
import { StyledView, StyledTouchableOpacity, StyledTextInput } from '../common/components/StyledComponents';
import FastImage from 'react-native-fast-image';
import Logo from '../../assets/icons/logo-simple.svg';
import Magnifier from '../../assets/icons/magnifier-animated.svg';
import CinemaIcon from '../../assets/icons/cinema-icon.svg';
import SearchIcon from '../../assets/icons/x-icon.svg';
import { Swing } from 'react-native-animated-spinkit';
import { useStore } from 'zustand';
import useAuthTestStore from '../common/hooks/useAuthTestStore';
import useApiStore from '../common/hooks/useApiStore';
import { useNavigation } from '@react-navigation/native';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [loader, setLoader] = useState(false);
  const [closeVisibility, setCloseVisibility] = useState(false);
  const textInputRef = useRef(null);
  const { token } = useStore(useAuthTestStore);
  const { api } = useStore(useApiStore);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const nav = useNavigation();
  const fetchMovies = async () => {
    setLoader(true)
    const response = await api.get(
      `http://cinecircleapi.azurewebsites.net/api/Movie/searchMovies`,
      {
        params: {
          title: searchText,
          page: currentPage,
          includeAdult: false,
          year: 0,
        },
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      }
    ).then(function (response) {
      setLoader(false)
      const newData = response.data.results;
      setPageCount(response.data.pageCount);
      setData(prevData => [...prevData, ...newData]);
      setCurrentPage(prevPage => prevPage + 1);
      console.log(response);
    })
      .catch(function (error) {
        setLoader(false)
        console.log(error.status);
      })
  };
  const handleOnChangeText = (text) => {
    setSearchText(text);
  };

  const handleFocusTextInput = () => {
    setCloseVisibility(true);
  };
  const handleBlurTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.blur();
      setSearchText("");
      setCloseVisibility(false);
      setData([])
    }
  };
  useEffect(() => {
    if (searchText) {
      setData([]);
      setCurrentPage(0);
      fetchMovies();
    }
  }, [searchText]);

  const loadMoreData = () => {
    if(loader)
    {
      return
    }
    if (currentPage < pageCount - 1) {
      fetchMovies();
    }
  };
  const renderItem = ({ item }) => {
    
    // Render your movie item here
    return (
      // Your movie item component
      <StyledTouchableOpacity onPress={()=>nav.navigate("MovieDetails",{screen:"Movie" ,item:item?.id,merge: true})}   className='w-[30%] h-[200px] mx-[7px] mt-1'>
        {item.posterPath ?
          <FastImage className="rounded object-contain w-full h-full mt-1"
            source={{
              uri: `https://image.tmdb.org/t/p/w500${item.posterPath}`,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover} />
          :
          
          <StyledView className='w-full h-full items-center justify-center'>
            <CinemaIcon />
          </StyledView>}

      </StyledTouchableOpacity>
    );
  };
  return (
    <StyledView>
      <StyledView className="flex-row mb-3 justify-between px-3 mt-2">
        <StyledTouchableOpacity onPress={()=>{nav.navigate("MainPage")}} className="">
          <Logo width={40} height={40} />
        </StyledTouchableOpacity>

        <StyledView className="flex-row rounded-xl items-center px-5 h-[40px] justify-between w-[85%] bg-[#29243B]">
          {loader ? (
            <Swing color="#C7C7CD" size={25} />
          ) : (
            <Magnifier width={25} height={25} />
          )}
          <StyledTextInput
            ref={textInputRef}
            onFocus={() => handleFocusTextInput(true)}
            cursorColor={"#C7C7CD"}
            style={{ width: '85%', marginLeft: 5, color: '#C7C7CD' }}
            placeholder="Search..."
            placeholderTextColor="#C7C7CD"
            onChangeText={handleOnChangeText}
            value={searchText}
          />
          {closeVisibility && (
            <StyledTouchableOpacity onPress={handleBlurTextInput}>
              <SearchIcon />
            </StyledTouchableOpacity>
          )}
        </StyledView>
      </StyledView>
      <StyledView className='w-full h-full'>
        <FlatList
          data={data}
          contentContainerStyle={{ gap: 10 }}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReached={loadMoreData}
          onEndReachedThreshold={0.5}
          numColumns={"3"}
        // Other FlatList props
        />
      </StyledView>
    </StyledView>
  );
};

export default Search;
