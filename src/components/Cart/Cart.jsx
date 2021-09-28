import React from 'react';

const Cart = (props) => {
    const {order} = props
     
    const count = order.reduce((prev, meal)=> prev + meal.quantity ,0)
    console.log(order);
    return (
        <div>
            
            <h3> Order List</h3>
                <hr />
                <h4>Order Items : {count} </h4>
        </div>
    );
};

export default Cart;