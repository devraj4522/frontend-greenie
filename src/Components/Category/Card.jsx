import { Link } from "react-router-dom";
import { ShowCategoryImage } from "./ShowCategoryImage";

export const Card = ({ item }) => {
    return (
        <Link
            to={"category/" + item.id}
            className="xl:w-1/3 md:w-1/2 p-4"
        >
            <div className=" bg-[#f5f5f2] p-6 rounded-lg hover:shadow-2xl shadow hover:cursor-pointer ">
                <ShowCategoryImage images={item.images} />
                <h3 className="uppercase tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.subtitle}
                </h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.name}
                </h2>
                <p className="leading-relaxed text-base">
                    {item.description}
                </p>
            </div>
        </Link>
    );
};