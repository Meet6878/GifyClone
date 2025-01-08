import { useEffect } from "react";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import Gif from "../components/Gif";
import GifFilter from "../components/GifFilter";

const HomePage = () => {
  const { gf, gifs, setGifs, filter } = useGetAllGiphys();

  const fetchTrendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      rating: "g",
      type: filter,
    });

    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);
  return (
  <>
  <GifFilter showTranding />
  <div className="mt-5 columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-2">
    {
      gifs && gifs.map((gif,i)=>{
        return (<Gif gif={gif} key={i}/>)
      })
    }
   
  </div>
  </>
  );
};

export default HomePage;
