/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import GifFilter from "../components/GifFilter";
import Gif from "../components/Gif";

const CategoryPage = () => {
  const { category } = useParams();

  // console.log("category: " , category)

  const [result, setResult] = useState([]);

  const { gf, filter } = useGetAllGiphys();

  const featchSearchResult = async () => {
    const { data } = await gf.gifs(category, category);
    setResult(data);
  };
  useEffect(() => {
    featchSearchResult();
  }, [category]);
  return (
    <div>
      <h2>{category}</h2>
      <GifFilter alignLeft={true} />
      {result.length > 0 ? (
        <div className="flex flex-col sm:flex-row gap-5 my-4">
          <div className="w-full sm:w-72">
            <Gif gif={result[0]} hover={false} />

            <span>dont tell it to me i am not gif</span>

            <div className="w-full h-0.5 my-6 bg-gray-800" />
          </div>
          <div>
            <h2 className="text-4xl font-bold capitalize">
              {category.split(" - ").join(" & ")} Gif
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {result.slice(1).map((gif) => {
              return <Gif key={gif.id} gif={gif} />;
            })}
          </div>
        </div>
      ) : (
        <div> no gif found </div>
      )}
    </div>
  );
};

export default CategoryPage;
