import { FOOD_URL } from "../utils/common";

const RestaurantCard = (props) => {
    //console.log(props);
    const { resObj } = props;
    const { name, cloudinaryImageId, cuisines, avgRating} = resObj?.info;
    return (
        <div className="res-card m-5 w-400 h-200 bg-orange-500 shadow-2xl rounded-2xl">
            <img className="w-56 p-2 rounded-3xl" src={
                FOOD_URL +  cloudinaryImageId
             } alt="item" />
            <h2 className="text-2xl p-2 text-white font-sans hover:font-serif hover:text-white">{name}</h2>
            <h3 className="text-xl p-2 text-white italic hover:font-serif hover:text-white">{cuisines.join(", ")}</h3>
            <h4 className="text-xl p-2 text-white font-sans hover:font-serif hover:text-white">{avgRating}</h4>
        </div>
    )
    
}

export default RestaurantCard;