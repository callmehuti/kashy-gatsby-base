import React, { FC } from 'react';

interface ImgItemProps {
  imageSrc: string;
  linkUrl: string;
  altText: string;
}

const HPSubscribePartnerImg: FC<ImgItemProps> = ({imageSrc, linkUrl, altText}) => {
  return (
    <section className='coop-partner-item'>
      <a href={linkUrl} className='coop-partner-item__link' target='_blank'>
        <img src={imageSrc} alt={altText} className='coop-partner-item__thumb'/>
      </a>
    </section>
  );
}

export default HPSubscribePartnerImg;
