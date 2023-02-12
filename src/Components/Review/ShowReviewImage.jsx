import React, {useState} from 'react'
import { CloudImage } from '../../template/Images/CloudImage'
import classes from "./AddReview.module.css";

export const ShowReviewImage = (props) => {
    let image;
    const imageList = props?.images;
    if (Array.isArray(imageList) && imageList.length > 0 && imageList[0].public_id) {
        image = imageList[0].public_id;
    }

    console.log(classes)
    if (!image && props.user?.name) {
        image = `https://www.gravatar.com/avatar/${props.user?.name}?d=identicon&s=70`
        return (<img src={image} className={`${classes.roundImage}`} />);
    }

    return <CloudImage className={`${classes.roundImage}`} height={80} widht={80} image={image} />
}
