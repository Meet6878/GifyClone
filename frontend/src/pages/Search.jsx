import { useEffect, useState } from "react";
import Gif from "../components/Gif";
import GifFilter from "../components/GifFilter";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import { useParams } from "react-router-dom";


const Search = () => {
  const { query } = useParams();

  const [searchResult, setSearchResult] = useState([]);

  const { gf, filter } = useGetAllGiphys();

  const featchSearchResult = async () => {
    const { data } = await gf.search(query, {
      sort: "relevant",
      lang: "en",
      type: filter,
      limit: 20,
    });
    setSearchResult(data);
  };
  useEffect(()=>{
    featchSearchResult();
  },[query]);
  return (
    <div>
    <h2>{query}</h2>
    <GifFilter alignLeft={true} />
    {searchResult.length > 0 ? (<div className="columns-2 md:columns-3 lg:columns-4 gap-2">
      {
        searchResult.map((gif) => (
         <Gif gif={gif} key={gif.id}/>
        ))
      }
    </div>) : (<div> no gif found </div>)}
    </div>
  )
}

export default Search
