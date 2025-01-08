import { Link } from "react-router-dom";

const Gif = ({ gif, hover = true }) => {
  return (
    <Link to={`${gif.type}/${gif.slug}`}>
      <div className="w-full  mb-2 relative cursor-pointer group aspect-video">
        <img className="w-full object-cover rounded transition-all duration-300" src={gif?.images?.fixed_width.webp} alt={gif?.title} />
        {hover && (<div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 bg-gradient-to-b from-transparent via-transparent to-black font-bold flex items-end gap-2 p-2">
            <img src={gif?.user?.avatar_url} alt={gif?.user?.display_name} className="h-5"/>
            <span> {gif?.user?.display_name}</span>
        </div>)}
      </div>
    </Link>
  );
};

export default Gif;
