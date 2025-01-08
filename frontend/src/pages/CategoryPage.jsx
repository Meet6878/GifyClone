import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import GifFilter from "../components/GifFilter";
import Gif from "../components/Gif";

const CategoryPage = () => {
  const { category } = useParams();

  const [result, setResult] = useState([]);

  const { gf, filter } = useGetAllGiphys();

  const featchSearchResult = async () => {
    const { data } = await gf.gifs(category,category);
    setResult(data);
  };
  useEffect(()=>{
    featchSearchResult();
  },[category]);
  return <div>
    <h2>{query}</h2>
    <GifFilter alignLeft={true} />
    {searchResult.length > 0 ? (<div>
      {
        searchResult.map((gif) => (
         <Gif gif={gif} key={gif.id}/>
        ))
      }
    </div>) : (<div> no gif found </div>)}
    </div>;
};

export default CategoryPage;
