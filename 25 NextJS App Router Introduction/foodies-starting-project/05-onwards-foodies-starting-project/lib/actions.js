"use server"

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

function isInvalid(val){
  return val.trim() === ""
}

export async function shareMeal(prevState,formData){
    const meal = {
      title:formData.get("title"),
      summary:formData.get("summary"),
      image:formData.get("image"),
      instructions:formData.get("instructions"),
      creator:formData.get("name"),
      creator_email:formData.get("email"),

    }
    
    if(isInvalid(meal.title) || isInvalid(meal.summary) || isInvalid(meal.instructions) || isInvalid(meal.creator) || isInvalid(meal.creator_email) || !meal.image || meal.image.size===0){
      return {
        message:"Invalid input"
      }
    }
    
    await saveMeal(meal)
    revalidatePath("/meals","layout")
    redirect("/meals")


  }