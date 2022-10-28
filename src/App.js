import './App.css';
import { useEffect, useState } from 'react';
import video from "./food.mp4"
import MyRecipyComponent from './MyRecipyComponent';

function App() {
  const MY_ID="9aae4b70";
  const MY_KEY="4650fc8e36109255bd6b30c4395b22e4"

  const[mySearch, setMySearch]=useState("")
  const [myRecipy, setMyRecipy]=useState([])
  const [worldsubmited, setWorldSubmited]= useState("shrimp")

  useEffect(() => {
    async function fetchData() {
       const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${worldsubmited}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipy(data.hits);
      console.log(data.hits)
    }
    fetchData();
  }, [worldsubmited]);
  const myRecipeSearch=(e)=>{
    console.log(e.target.value)
    setMySearch(e.target.value)
  }

  const finalSearch =(e)=>{
    e.preventDefault()
    setWorldSubmited(mySearch)
  }
  return (
    <div className="App">

 <div className='container'>
<video autoPlay muted loop> 
<source src={video} type="video/mp4"/>
</video>
<h1>Find a Recipe</h1>
 </div>

<div className='container'>
<form onSubmit={finalSearch}>
  <input className='search' placeholder='Search' onChange={myRecipeSearch} value={mySearch}>
  </input>
</form>
</div>

<div className='container'>
<button className='button'>
<img src="https://img.icons8.com/color/48/000000/search--v1.png" height={33} alt='icon'/>
</button>

</div>
{myRecipy.map(element =>(
  <MyRecipyComponent 
  label={element.recipe.label} 
  image={element.recipe.image}
  calories={element.recipe.calories}
  ingredientLines={element.recipe.ingredientLines}
  dishType={element.recipe.dishType}
  mealType={element.recipe.mealType}
  cuisineType={element.recipe.cuisineType }
  dietLabels={element.recipe.dietLabels}
    />
))}
    </div>
  );
}

export default App;
