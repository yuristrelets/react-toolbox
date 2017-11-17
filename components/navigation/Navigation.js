import PropTypes from 'prop-types';
import React from 'react';
import style from './style';
import Button from '../button';
import Link from '../link';

const Navigation = props => {
  let className = `${style[props.type]}`;
  if (props.className) className += ` ${props.className}`;

  const buttons = props.actions.map((action, index) => {
    return <Button className={style.button} key={index} {...action} />;
  });

  const links = props.routes.map((route, index) => {
    return <Link className={style.link} key={index} {...route} />;
  });

  return (
    <nav data-react-toolbox='navigation' className={className}>
      {links}
      {buttons}
      {props.children}
    </nav>
  );
};

Navigation.propTypes = {
  actions: PropTypes.array,
  children: PropTypes.node,
  className: PropTypes.string,
  routes: PropTypes.array,
  type: PropTypes.oneOf(['vertical', 'horizontal'])
};

Navigation.defaultProps = {
  actions: [],
  className: '',
  type: 'horizontal',
  routes: []
};

export default Navigation;
