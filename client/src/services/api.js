import axios from 'axios';


const API_URL='http://localhost:8000';

export const uploadFile=async (data)=>{
    try {
      console.log("hello");
      let response=await  axios.post(`${API_URL}/upload`,data);
      console.log("first");
      return response.data;
    } catch (error) {
        console.log('error while calling api',error.message);
    }

  }