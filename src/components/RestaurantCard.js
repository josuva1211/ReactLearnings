import { FOOD_URL } from "../utils/common";

const RestaurantCard = (props) => {
    //console.log(props);
    const { resObj } = props;
    const { name, cloudinaryImageId, cuisines, avgRating} = resObj?.info;
    return (
        <div className="res-card">
            <img src={
                FOOD_URL +  cloudinaryImageId
             } alt="item" />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating}</h4>
        </div>
    )
    
}

export default RestaurantCard;