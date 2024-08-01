import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

const SocialLinkHeader = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img className={s.header__navSocialListItem} src={src} alt={alt} />
    </a>
  );
};

SocialLinkHeader.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default SocialLinkHeader;
