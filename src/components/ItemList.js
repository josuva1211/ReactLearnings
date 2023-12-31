import React from "react";
import { FOOD_URL } from "../utils/common";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();

    const handleClick = (item) => {
        dispatch(addItem(item));
    }

    return (
        items.map(item => (
            <div data-testid="menu-item" className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-evenly">
                <div className="w-9/12 my-2">
                    <span className="text-lg font-bold">{item?.card?.info?.name} - </span>
                    <span className="text-lg font-bold">₹ {item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice / 100 : item?.card?.info?.price / 100}</span>
                    <p className="italic text-sm">{item?.card?.info?.description}</p>
                </div>
                <div className="w-3/12 p-4 relative">
                    <div className="absolute bottom-5 right-5">
                        <button className="bg-black text-white p-2" onClick={() => handleClick(item)}>Add +</button>
                    </div>
                    <img className="w-full" src={FOOD_URL + item?.card?.info?.imageId} />
                </div>
            </div>
        ))
        
    )
}

export default ItemList;