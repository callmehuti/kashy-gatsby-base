import React, { FC } from "react";

// common -> media-img.tsx
import HPMediaPhotoItem from "../../common/media-img";

// Import icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

// Import image sources
// Import image sources
import thumb1 from "../../../assets/img/thumb-1.jpeg";
import thumb2 from "../../../assets/img/thumb-2.jpeg";
import thumb3 from "../../../assets/img/thumb-3.jpeg";
import thumb4 from "../../../assets/img/thumb-4.jpeg";
import thumb5 from "../../../assets/img/thumb-5.jpeg";
import thumb6 from "../../../assets/img/thumb-6.jpeg";
import thumb7 from "../../../assets/img/thumb-7.jpeg";
import thumb8 from "../../../assets/img/thumb-8.jpeg";

const HPMedia: FC = () => {
  const imageSrcs = [
    thumb1,
    thumb2,
    thumb3,
    thumb4,
    thumb5,
    thumb6,
    thumb7,
    thumb8,
  ];

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
          <HPMediaPhotoItem imageSrcs={[thumb1]} />
          <HPMediaPhotoItem imageSrcs={[thumb2]} />
          <HPMediaPhotoItem imageSrcs={[thumb3]} />
          <HPMediaPhotoItem imageSrcs={[thumb4]} />
          <HPMediaPhotoItem imageSrcs={[thumb5]} />
          <HPMediaPhotoItem imageSrcs={[thumb6]} />
          <HPMediaPhotoItem imageSrcs={[thumb7]} />
          <HPMediaPhotoItem imageSrcs={[thumb8]} />
        </div>
      </div>
    </div>
  );
};

export default HPMedia;
