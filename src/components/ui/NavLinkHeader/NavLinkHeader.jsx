import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

const NavLinkHeader = ({ href, onClick, children }) => {
  return (
    <li>
      <a className={s.header__navItem} href={href} onClick={onClick}>
        {children}
      </a>
    </li>
  );
};

NavLinkHeader.propTypes = {
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default NavLinkHeader;

