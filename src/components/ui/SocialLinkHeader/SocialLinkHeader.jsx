import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';
import classNames from 'classnames';

const SocialLinkHeader = ({ href, className, src, alt, width, height }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img
        className={className}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </a>
  );
};

SocialLinkHeader.propTypes = {
  href: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SocialLinkHeader.defaultProps = {
  width: 'auto',
  height: 'auto',
};

export default SocialLinkHeader;
