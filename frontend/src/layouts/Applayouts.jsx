import { Outlet } from "react-router-dom";
import Hearder from "../components/Hearder";

const Applayouts = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full ">
      <div className="container px-6 py-3 mx-auto">
        <Hearder />
        <Outlet />
      </div>
    </div>
  );
};

export default Applayouts;
