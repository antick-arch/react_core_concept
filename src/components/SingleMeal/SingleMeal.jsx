import './SingleMeal.css'
const SingleMeal = ({meal,getCart}) => {
    return (
        <div className="card">
            <img src={meal.strMealThumb} alt={meal.strCategory} />
            <h2>{meal.strMeal}</h2>
            <button onClick={()=>getCart(meal)}>Add to cart</button>
        </div>
    );
};

export default SingleMeal;