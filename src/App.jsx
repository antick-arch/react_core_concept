import './App.css'
import Meal from './components/Meal/Meal'

const fetchMeal = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json());

function App() {

  return (
    <>
    <Meal fetchMeal={fetchMeal}></Meal>
    </>
  )
}

export default App
