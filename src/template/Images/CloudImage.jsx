import { Image } from 'cloudinary-react';
import { MEDIA_CLOUD_NAME } from "../../backend";
import "./CloudImage.css";

export const CloudImage = (props) => {
  return (
    <Image className={`${props.className}`} cloudName={MEDIA_CLOUD_NAME} publicId={props.image} width={props.width}
      height={props.height}

      crop="fill" />
  );
};
