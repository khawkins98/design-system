import React from 'react';
import './download-card.scss';
import '../../../assets/scss/_grid.scss';
import { Publicationthumb } from '../../../Atom/Cards/Publication-thumbnail/PublicationThumbnail';
import { Cardthumb } from '../../../Atom/Cards/Card-thumbnail/CardThumbnail';

export const DownloadCard = ({
  image, image2, title, format, download, ...args
}) => (
  <div className="download-card">
    <a href="#">
      {image && <Publicationthumb Hovercolors="yellow" />}
      {image2 && <Cardthumb image={image2} />}
      <div className="download-card__description">
        <p className="download-card__title">{title}</p>
        <p className="download-card__format">{format}</p>
        <span href="#" className="download-card__download">
          {download}
          <span className={[`${(args.variant == 'External Link' ? 'external-link' :'download-icon')}`]}><i/></span>
        </span>
      </div>
    </a>
  </div>
);
