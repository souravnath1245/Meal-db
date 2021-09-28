import React from 'react';
import './Food.css'

const Food = (props) => {
    const {strMeal, strInstructions, strMealThumb} =props.meal;
    const {handleOrder} = props;
    
    return (
        <div>
            <div className="meal">
                <div className="image">

                <img src={strMealThumb} alt="" />
                </div>
                <h4>{strMeal}</h4>
                <p>{strInstructions.slice(0, 100)}</p>
                <button className='btn btn-danger' onClick={handleOrder}>Add this Food</button>
            </div>
        </div>
    );
};

export default Food;