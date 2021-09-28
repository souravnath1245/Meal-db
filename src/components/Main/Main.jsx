import React, { useState , useEffect} from 'react';
import { addToDb, getDb } from '../../localStorage';
import Cart from '../Cart/Cart';
import Food from '../food/Food';
import './Main.css';

const Main = () => {
    const [meals, setMeals] = useState([])
    const [order, setOrder] = useState([])
    useEffect(() => {
       fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
       .then(res => res.json())
       .then(data => setMeals(data.meals))
    }, [])

    useEffect(()=>{
        if(meals.length){
            const saveDb = getDb();
            const saveOrder =[]
            for(let mealId in saveDb ){
                console.log(saveDb[mealId]);
                let meal = meals.find( ml => ml.idMeal === mealId) 
                let quantity = saveDb[mealId]
                meal.quantity = quantity
               saveOrder.push(meal)
               
            }
            setOrder(saveOrder);  
        }

    }, [meals])

    const handleAddToOrder =(meal)=>{
        meal.quantity = 1;
        const newOrder = [...order, meal]
        setOrder(newOrder);
        addToDb(meal.idMeal)
    }
    return (
        <div className='mainContainer'>
            <div className="mainGreed">

            {
                meals.map(meal => <Food key={meal.idMeal} meal={meal} handleOrder={()=>handleAddToOrder(meal)} />)
            }
            </div>
            <div className='mainCart text-center'>
                <Cart order={order} />
            </div>
        </div>
    );
};

export default Main;