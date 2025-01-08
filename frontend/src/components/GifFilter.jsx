import React from "react";
import useGetAllGiphys from "../hooks/useGetAllGiphys";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";

const filters = [
  {
    title: "GIFS",
    value: "gifs",
    background:
      "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
  },
  {
    title: "sticker",
    value: "sticker",
    background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
  },
  {
    title: "Text",
    value: "text",
    background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
  },
];
const GifFilter = ({ alignLeft = false, showTranding = false }) => {
  const { filter, setFilter } = useGetAllGiphys();
  return (
    <div
      className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"} ${
        showTranding
          ? "justify-between flex-col sm:flex-row sm:items-center"
          : ""
      }`}
    >
      {
        <span className="flex gap-2">
          {showTranding && (
            <HiMiniArrowTrendingUp size={25} className="text-teal-400" />
          )}

          <span className="font-semibold text-gray-400">Trending</span>
        </span>
      }
      <div className="flex min-w-80 rounded-full bg-gray-800">
        {filters &&
          filters.map((f) => {
            return (
              <span
                key={f.title}
                className={`${
                  filter === f.value ? f.background : ""
                } font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`}
                onClick={() => setFilter(f.value)}
              >
                {f.title}
              </span>
            );
          })}
      </div>
    </div>
  );
};

export default GifFilter;
