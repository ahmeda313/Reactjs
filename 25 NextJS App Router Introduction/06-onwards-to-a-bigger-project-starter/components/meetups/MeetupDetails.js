import classes from "./MeetupDetails.module.css"


export default function MeetupDetails({image, title, address, description}){
    return(
        <section className={classes.details}>
            <img src={image} alt={title}/>
            <h1>{title}</h1>
            <address>{address}</address>
            <p>{description}</p>
        </section>
    )
}