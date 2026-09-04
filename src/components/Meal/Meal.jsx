import { use } from "react";
import SingleMeal from "../SingleMeal/SingleMeal";
import './Meal.css'
const Meal = ({ fetchMeal }) => {
    const mealData = use(fetchMeal).meals;
    return (
        <div className="container">
            <div style={{width:'75%'}} className="card-container">
                {
                    mealData.map(meal => (
                        <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>
                    ))
                }
            </div>
            <div style={{width:'25%',backgroundColor:'gold'}} className="cart">
                
            </div>
        </div>
    );
};

export default Meal;