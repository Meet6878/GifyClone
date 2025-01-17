import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import Gif from "../components/Gif";
import { HiMiniChevronDown, HiMiniChevronUp } from "react-icons/hi2";
import { HiOutlineExternalLink } from "react-icons/hi";
const GifPage = () => {
  const contentType = ["gifs", "stickers", "texts"];

  const { types, slug } = useParams();

  const { gf , favorites} = useGetAllGiphys();
  const [gif, setGif] = useState({});
  const [reletedGif, seReletedtGif] = useState([]);

  const [readMore, setReadMore] = useState(false);

  const featchGif = async () => {
    const gifId = slug.split("-");
    const { data } = await gf.gif(gifId[gifId.length - 1]);
    const {data: related} = await gf.related(gifId[gifId.length - 1], {
      limit: 10,
    });
    setGif(data);
    seReletedtGif(related);
  };

  useEffect(() => {
    if (!contentType.includes(types)) {
      throw new Error("Content type must be specified");
    }
    featchGif();
  }, []);
  return (
    <div className="grid grid-cols-4 my-10 gap-4">
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
            </div>
            {gif?.user?.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {readMore
                  ? gif?.user?.description
                  : gif?.user?.description.slice(0, 100) + "..."}
                <div
                  className="flex items-center faded-text cursor-pointer"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? (
                    <>
                      Read less <HiMiniChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Read more <HiMiniChevronDown size={20} />
                    </>
                  )}
                </div>
              </p>
            )}
          </>
        )}

        <div className="divider" />

        {gif?.source && (
          <div>
            <span
              className="faded-text" //custom - faded-text
            >
              Source
            </span>
            <div className="flex items-center text-sm font-bold gap-1">
              <HiOutlineExternalLink size={25} />
              <a href={gif.source} target="_blank" className="truncate">
                {gif.source}
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6">
          <div className="w-full sm:w-3/4">
            <div className="mb-2">{gif.title}</div>
            <Gif gif={gif} hover={false} />
          </div>
          Favourite / share /embed
        </div>
        <div>
          <span className="font-extrabold">Related GIFs</span>
          <div className="columns-2 md:columns-3 gap-2">
            { reletedGif && reletedGif?.slice(1).map((gif) => (
              <Gif gif={gif} key={gif.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GifPage;
