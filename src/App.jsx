
import React,{useEffect,useState,useMemo} from 'react';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from "react-router-dom";
import { StyledEngineProvider } from '@mui/material/styles';
import {fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilters} from './backendPoints/backends';
function App() {
  const [loading, setLoading] = useState(false);
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]); 
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try{
        setLoading(true);
        const [topAlbumsData, newAlbumsData, songsData, genresData] = await Promise.allSettled([
          fetchTopAlbums(),
          fetchNewAlbums(),
          fetchSongs(),
          fetchFilters()
        ]);
        setTopAlbums(topAlbumsData.value);
        setNewAlbums(newAlbumsData.value);
        setSongs(songsData.value);
        setGenres(genresData.value);

      }catch(e){
        console.error(e);
    }finally{
        setLoading(false);
      }
    }
    fetchData();
  },[]);
  const searchData = useMemo(() => [...topAlbums,...newAlbums],[topAlbums,newAlbums]);

  const contextData = useMemo(() => ({
    data: {
      topAlbums,
      newAlbums,
      songs,
      genres,
      loading,
    }
  }),[topAlbums,newAlbums,songs,genres,loading]);

  return (
    <StyledEngineProvider injectFirst>
      <Navbar searchData={searchData}/>
      <Outlet context={contextData} />
    </StyledEngineProvider>
  )
}

export default App
