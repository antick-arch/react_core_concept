import { Suspense } from 'react';
import './App.css'
import Meal from './components/Meal/Meal'
import Nav from './components/Navbar/Nav';
import Loading from './components/Loading/Loading';

const fetchMeal = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(res=>res.json());

function App() {

  return (
    <>
    <Nav></Nav>
    <Suspense fallback={<Loading></Loading>}>
      <Meal fetchMeal={fetchMeal}></Meal>
    </Suspense>
    </>
  )
}

export default App
