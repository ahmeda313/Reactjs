"use client"
import { useRef, useState } from "react"

import classes from "./image-picker.module.css"
import Image from "next/image"

export default function ImagePicker({label, name}){

    const imageInput = useRef()
    const [pickedImage, setPickedImage] = useState()

    function handleClick(){
        imageInput.current.click()
    }

    function handleImageChange(e){
        const file = e.target.files[0]

        if(!file){
            setPickedImage(null)
            return
        }

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = ()=>{
            setPickedImage(fileReader.result)
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={name}> {label} </label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked</p>}
                    {pickedImage && <Image src={pickedImage} alt="image picked by user" fill required/>}
                </div>
                <input onChange={handleImageChange} ref={imageInput} type="file" id={name} accept="image/png, image/jpeg" name={name} className={classes.input}/>
                <button onClick={handleClick} className={classes.button} type="button"> pick an image </button>
            </div>
        </div>
    )
}