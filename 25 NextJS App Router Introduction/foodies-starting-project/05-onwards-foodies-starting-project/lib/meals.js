import fs from "node:fs"

import sql from "better-sqlite3"
import xss from "xss"
import slugify from "slugify"



const db = sql("meals.db")


export async function getMeals(){
    await new Promise((resolve)=>{setTimeout(resolve,2000)})

    // throw new Error("unable to fetch meals")
    return db.prepare("SELECT * FROM meals").all()
}


export function getMeal(slug){
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:true})
    meal.instructions = xss(meal.instructions)

    const extention = meal.image.name.split('.').pop()
    const filename = `${meal.slug}.${extention}`

    const stream = fs.createWriteStream(`public/images/${filename}`)
    const bufferImage = await meal.image.arrayBuffer()

    stream.write(Buffer.from(bufferImage), (error)=>{
        if(error){
            throw new Error("failed to save file")
        }
    })

    meal.image = `/images/${filename}`

    db.prepare(`INSERT INTO meals (title, summary, instructions, creator, creator_email, image, slug) VALUES (
        @title,
        @summary,
        @instructions,
        @creator,
        @creator_email,
        @image,
        @slug )`).run(meal)
        
}
