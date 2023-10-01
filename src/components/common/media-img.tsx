import React, { FC } from "react";

interface MediaImgProps {
  imageSrcs: string[];
}

const HPMediaPhotoItem: FC<MediaImgProps> = ({ imageSrcs }) => {
  return (
    <div className="media-photo-item">
      {imageSrcs.map((src, index) => (
        <div key={index} className="media-photo-item__wrapper">
          <img src={src} alt="Kashy Photo" className="media-photo-item__thumb" />
        </div>
      ))}
    </div>
  );
};

export default HPMediaPhotoItem;
