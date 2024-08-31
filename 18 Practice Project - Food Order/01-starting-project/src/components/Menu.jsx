import { Meal } from './Meal'

import useHttp from '../hooks/useHttp'

const requestConfig = {}

export const Menu = () => {

  const {data,isLoading,error} = useHttp("http://localhost:3000/meals",requestConfig,[])


  if(isLoading){
    return(
      <div id="meals">
        <h2 className='center'>Loading meals...</h2>
      </div>
    )
  }

  if(error){
    return(
      <div id="meals">
        <h2 className='center'>Unable to fetch meals</h2>
      </div>
    )
  }

  return (
    <div id="meals">
            {data.map(meal=>{
                return(
                    <Meal key={meal.id} mealName={meal.name} image={meal.image} description={meal.description} price={meal.price}/>
                )
            })}
            
    </div>
  )
}
