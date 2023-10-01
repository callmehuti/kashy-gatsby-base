import React, { FC } from "react";

// common -> media-img.tsx
import HPMediaPhotoItem from "../../common/media-img";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const HPMedia: FC = () => {

  const imageSrcs = [
    require("../../../assets/img/customer-1.jpeg")
  ]

  return (
    <div className="media-inner">
      {/* Left side: Video */}
      <figure className="media-inner__video">
        <iframe
          width="877"
          height="561"
          src="https://www.youtube.com/embed/qHeACpjOj5M"
          title="Should You Change Your Engine Oil"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </figure>

      {/* Right side: Media gallery photos */}
      <div className="media-photo">
        <h2 className="section-heading media-photo__heading">kashyaustralia</h2>
        <div className="btn media-photo__btn">
          <a
            href="https://www.instagram.com/kashyaustralia/"
            className="media-photo__link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="media-photo__icon" />
            <span className="media-photo__text-btn">Follow</span>
          </a>
        </div>

        <div className="media-photo__list">
          <HPMediaPhotoItem imageSrcs={imageSrcs}/>
        </div>
      </div>
    </div>
  );
};

export default HPMedia;
