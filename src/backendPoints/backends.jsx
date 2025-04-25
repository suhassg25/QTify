import axios from 'axios';

const Backend_Endpoint = "https://qtify-backend-labs.crio.do";

const fetchTopAlbums = async ()=>{
    try{
        const response = await axios.get(`${Backend_Endpoint}/albums/top`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
};

const fetchNewAlbums = async ()=>{
    try{
        const response = await axios.get(`${Backend_Endpoint}/albums/new`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }

};

const fetchSongs = async ()=>{
    try{
        const response = await axios.get(`${Backend_Endpoint}/songs`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
};

const fetchFilters = async() => {
    try{
        const response = await axios.get(`${Backend_Endpoint}/genres`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
} ;


const  fetchQuestions = async () => {
    try{
        const response = await axios.get(`${Backend_Endpoint}/faq`);
        return response.data;
    }catch(e){
        console.error(e);
        
    }
};

export {fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchFilters, fetchQuestions};