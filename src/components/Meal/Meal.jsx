import { use, useState } from "react";
import SingleMeal from "../SingleMeal/SingleMeal";
import './Meal.css'
import Cart from "../Cart/Cart";

const Meal = ({ fetchMeal }) => {
    const mealData = use(fetchMeal).meals;
    const [cart,setCart] = useState([]);
    const getCart = (cartItems)=>{
        setCart([...cart,cartItems]);
    }
    return (
        <div className="container">
            <div style={{width:'75%'}} className="card-container">
                {
                    mealData.map(meal => (
                        <SingleMeal key={meal.idMeal} meal={meal} getCart={getCart}></SingleMeal>
                    ))
                }
            </div>
            <div style={{width:'25%',backgroundColor:'gold'}} className="cart">
                <Cart cart={cart} setCart={setCart}></Cart>
            </div>
        </div>
    );
};

export default Meal;