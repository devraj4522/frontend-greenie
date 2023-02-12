import React, {useState} from 'react'
import { CloudImage } from '../../template/Images/CloudImage'


export const ShowCartImage = (props) => {
    let image;
    const imageList = props?.images;
    
    if (Array.isArray(imageList) && imageList.length > 0) {
        image = imageList[0].public_id;
        console.log(image)
    }

    console.log(image)
    if (!image) {
        image = 'https://images.unsplash.com/photo-1621076806681-a82129e952d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
        return (<img src={image} className={`w-20 h-20 md:w-24 md:h-24`} />);
    }

    return <CloudImage className={`w-20 h-20 md:w-24 md:h-24`}  image={image} />
}

