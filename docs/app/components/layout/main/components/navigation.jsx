import React from 'react';
import { History, Link } from 'react-router';
import { Input, List, ListItem } from 'react-toolbox';
import components from '../modules/components';
import Logo from '../../../logo';
import style from './navigation.scss';

const MainNavigation = React.createClass({
  mixins: [History],

  propTypes: {
    active: React.PropTypes.bool
  },

  handleSearchChange: () => {
    console.log('handleSearchChange', arguments);
  },

  renderDrawerItems () {
    return Object.keys(components).map((key) => {
      const ToolboxComponent = components[key];
      const to = this.context.history.createHref(ToolboxComponent.path);
      let className = style.item;
      if (this.context.history.isActive(ToolboxComponent.path)) {
        className += ` ${style.active}`;
      }

      return (
        <ListItem
          key={key}
          caption={ToolboxComponent.name}
          className={className}
          selectable
          to={to}
        />
      );
    });
  },

  render () {
    let className = style.root;
    if (this.props.className) className += ` ${this.props.className}`;

    return (
      <aside className={className}>
        <header className={style.header}>
          <Link to='/'>
            <Logo className={style.logo} />
          </Link>
          <h1 className={style.heading}>React Toolbox</h1>
        </header>
        <Input
          className={style.finder}
          icon='search'
          onChange={this.handleSearchChange}
          placeholder='Search Components'
          type='search'
        />
        <List className={style.list} selectable ripple>
          { this.renderDrawerItems() }
        </List>
        <footer className={style.footer}>
          <span>React Toolbox © 2015</span>
        </footer>
      </aside>
    );
  }
});

export default MainNavigation;
