import './App.css';
import { useState } from 'react';

function MyRecipyComponent ({label,image, calories, ingredientLines, dishType, mealType, cuisineType, dietLabels}) {
    const [showMore, setShowMore] = useState(false);
    const [showDiet, setShowDiet]= useState(false);

    return(
        <div className='containerOne'>
        <div className="box" >
              <h2>{label} </h2>
               <h4>{mealType} ({dishType})</h4>
              <img className='img' src={image}alt="foto" width="250px" />
              <p>{calories.toFixed()} calories / cuisineType: {cuisineType}</p>

              <div>
              <span>IngredientLines:</span> 
              <button className='show' onClick={()=>setShowMore(!showMore)}>
                    {showMore ? "show less" : "show more"}
                    </button> 
              <ul style={{ display: showMore ? "block" : "none" }}>       
                {ingredientLines.map((ingredientLint,index)=>(
                <li key={index}> <img src="https://img.icons8.com/material/24/000000/checkmark--v2.png" alt='icon'/>{ingredientLint}</li>
              ))}
                       
              </ul>
              </div>
              <div>
              <span>Health Info:</span> 
              <button className='show' onClick={()=>setShowDiet(!showDiet)}>
                    {showDiet ? "show less" : "show more"}
                    </button> 
                    <ul style={{ display: showDiet ? "block" : "none" }}>      
                    {dietLabels.map((dietLabel,id)=>(
                <li key={id}> <img src="https://img.icons8.com/fluency-systems-regular/48/000000/healthy-food.png"  width={20} alt='icon'/>  {dietLabel}</li>
              ))}
              </ul>
              </div>

        </div>
        </div>
    )
}

export default MyRecipyComponent