import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getAllGiphy } from "../redux/features/GiphySlice";
import {GiphyFetch} from "@giphy/js-fetch-api";
const useGetAllGiphys = () => {
  
  const [gifs, setGifs] = useState([]);
  const [filter, setFilter] = useState("gifs");
  const [favourite, setFavourite] = useState([]);

const gf = new GiphyFetch(import.meta.env.VITE_GIFY_KEY);

  
  
  
  const dispatch = useDispatch();
  
  
  
  // console.log("me @giphy/js-fetch-api",{gf});
  const getGif = async () => {
    try {

dispatch(getAllGiphy(gf));
      // const res = await axios.get(
      //   "http://localhost:8000/api/v2/product/get/67738894fa2b8a1313174a20");
      // dispatch(getAllGiphy(res.data.products));
      // console.log("res", res.data.products);
    } catch (error) {
      console.log("error", error.message);
    }
  };

  useEffect(() => {
    getGif();
    return () => console.log("Cleanup on unmount.");
  }, [dispatch]);
  return { gf, gifs,setGifs,filter,setFilter,favourite };
};

export default useGetAllGiphys;
