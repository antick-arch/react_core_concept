import './SingleMeal.css'
const SingleMeal = ({meal}) => {
    return (
        <div className="card">
            <img src={meal.strMealThumb} alt={meal.strCategory} />
            <h2>{meal.strMeal}</h2>
            <button>Add to cart</button>
        </div>
    );
};

export default SingleMeal;