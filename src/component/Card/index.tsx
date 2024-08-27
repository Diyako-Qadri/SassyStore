'use client';

import { useCard } from '@/context/StateContext';
import { IoIosRemoveCircleOutline } from "react-icons/io";

const Card = () => {
  const { cardItems, removeFromCard } = useCard();

  return (
    <div>
      {cardItems.map(item => (
        <div className="card__product" key={item.id}>
          <div className="card__product--leftContainer">
            <h4>{item.title.slice(0, 15) + '...'}</h4>
          </div>
          <div className="card__product--rightContainer">
          <p>{item.quantity}x</p>
            <p>${item.price}</p>
           
            <button
              className="card__product--rightContainer--btn"
              onClick={() => removeFromCard(item.id)}
            >
              <IoIosRemoveCircleOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
