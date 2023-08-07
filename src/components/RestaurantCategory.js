import { useState } from "react";

import ItemList from "./ItemList";

const RestaurantCategory = ({category, showItems, setItemIndex}) => {
    //const [showItems, setShowItems] = useState(false)
    const handleClick = () => {
        setItemIndex();
    }
    return (
        <div>
            <div className="w-6/12 bg-gray-50 mx-auto my-6 p-4 shadow-xl">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-xl">{category?.title} ({category?.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                <div>
                    { showItems && <ItemList items={category?.itemCards} /> }
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantCategory;