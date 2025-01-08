import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import meetlogo from "../assets/meet_logo.jpg";
import { HiEllipsisVertical, HiMiniBars3BottomRight } from "react-icons/hi2";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import { useSelector } from "react-redux";
import GifSearch from "./GifSearch";
const Hearder = () => {
  const silecter = useSelector((state) => state.giphy.gifs);

  const [category, setCategory] = useState([]);
  const [showCategory, setShowCategory] = useState(false);

  const { gf, favourite } = useGetAllGiphys();

  // console.log( "i log this ",useGetAllGiphys())

  // console.log("ye raha me",silecter);
  const fetchGifCategory = async () => {
    const { data } = await gf.categories();
    setCategory(data);
  };

  useEffect(() => {
    fetchGifCategory();
  }, []);

  console.log("ye category he", category);
  return (
    <>
      <nav>
        <div className="relative flex justify-between items-center mb-2">
          <Link to="/">
            <div className="flex gap-2 items-center">
              <img src={meetlogo} alt="logo" className="w-14 h-14 rounded-md" />

              <h1 className=" font-bold text-2xl">Gify</h1>
            </div>
          </Link>

          {category &&
            category?.slice(0, 5)?.map((cate) => {
              return (
                <Link
                  key={cate.name}
                  to={`/${cate.name_encoded}`}
                  className="text-xl font-medium px-4 py-1 transition hover:gradient  border-b-4 hidden lg:block"
                >
                  {cate.name}
                </Link>
              );
            })}

          <button
            onClick={() => setShowCategory(!showCategory)}
            className={`${
              showCategory ? "gradient" : ""
            } px-4 py-1 hover:gradient border-b-4 hidden lg:block`}
          >
            <HiEllipsisVertical size={34} className="text-2xl font-bold" />
          </button>
          {favourite && favourite.length > 0 && (
            <Link
              to="/favourite"
              className="bg-gray-700 text-white font-bold px-5 py-3 rounded-md "
            >
              Favourite
            </Link>
          )}

          <button className="px-4 py-1 block lg:hidden">
            <HiMiniBars3BottomRight
              size={34}
              className="text-sky-400 text-2xl font-bold "
            />
          </button>

          {showCategory && (
            <div className="absolute right-0 top-20 px-10 pt-6 pb-9 gradient w-full z-20">
              <span className="text-3xl font-bold">Categorys</span>
              <hr className="bg-gray-100 opacity-50 my-5 " />
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
                {category && category.length > 0 && category?.map((categorys)=>{
                  return (
                    <Link key={categorys.name} to={`/${categorys.name_encoded}`}>
                      {categorys.name}
                    </Link>
                  );
                })}
                <Link to="/reaction">Reaction</Link>
              </div>
            </div>
          )}

        </div>
     <GifSearch/>
      </nav>
    </>
  );
};

export default Hearder;
