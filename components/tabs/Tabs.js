import React from 'react';
import Tab from './Tab';
import TabContent from './TabContent';
import IconButton from '../button/IconButton';
import FontIcon from '../font_icon';
import style from './style';

class Tabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    arrowsClassName: React.PropTypes.string,
    disableAnimatedBottomBorder: React.PropTypes.bool,
    addTabButtonTitle: React.PropTypes.string,
    addTabButtonDisabled: React.PropTypes.bool,
    index: React.PropTypes.number,
    onChange: React.PropTypes.func,
    onAddTab: React.PropTypes.func,
    onRemoveTab: React.PropTypes.func
  };

  static defaultProps = {
    index: 0,
    addTabButtonDisabled: false
  };

  state = {
    pointer: {},
    arrows: {}
  };

  componentDidMount () {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();

    if (!this.props.disableAnimatedBottomBorder) {
      this.updatePointer(this.props.index);
      this.scrollNavigation(this.props.index);
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.disableAnimatedBottomBorder) {
      this.updatePointer(nextProps.index);
      this.scrollNavigation(nextProps.index);
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.handleResize);

    clearTimeout(this.pointerTimeout);
    clearTimeout(this.resizeTimeout);
  }

  handleHeaderClick = (idx) => {
    if (this.props.onChange) this.props.onChange(idx);
  };

  handleHeaderRemove = (idx) => {
    if (this.props.onRemoveTab) this.props.onRemoveTab(idx);
  };

  handleResize = () => {
    if (this.resizeTimeout) clearTimeout(this.resizeTimeout);

    this.resizeTimeout = setTimeout(() => {
      this.updatePointer(this.props.index);
      this.scrollNavigation(this.props.index);
    }, 100);
  };

  scrollRight = () =>{
    this.refs.navigation.scrollLeft += this.refs.navigation.clientWidth;
    this.updateArrows();
    this.updatePointer(this.props.index);
  };

  scrollLeft = () => {
    this.refs.navigation.scrollLeft -= this.refs.navigation.clientWidth;
    this.updateArrows();
    this.updatePointer(this.props.index);
  };

  parseChildren () {
    const headers = [];
    const contents = [];

    React.Children.forEach(this.props.children, (item) => {
      if (item.type === Tab) {
        headers.push(item);
        if (item.props.children) {
          contents.push(<TabContent children={item.props.children}/>);
        }
      } else if (item.type === TabContent) {
        contents.push(item);
      }
    });

    return {headers, contents};
  }

  scrollNavigation = (idx) => {
    const child = this.refs.navigation.children[idx];

    if (!child) {
      this.refs.navigation.scrollLeft = 0;
      this.updateArrows();
      return false;
    }

    const rect = child.getBoundingClientRect();
    const navRect = this.refs.navigation.getBoundingClientRect();
    const navScrollPosition = this.refs.navigation.scrollLeft;

    if (navRect.right < rect.right) {
      this.refs.navigation.scrollLeft = Math.ceil(rect.right - navRect.right + navScrollPosition);
    }

    if ((rect.left - navRect.left) < 0) {
      this.refs.navigation.scrollLeft = Math.round(rect.left - navRect.left + navScrollPosition);
    }

    this.updateArrows();
  };

  updatePointer (idx) {
    clearTimeout(this.pointerTimeout);
    this.pointerTimeout = setTimeout(() => {
      const child = this.refs.navigation.children[idx];
      const rect = child ? child.getBoundingClientRect() : null;
      const navRect = this.refs.navigation.getBoundingClientRect();

      const width = rect ? rect.width : 0;
      const left = rect ? rect.left - navRect.left + this.refs.navigation.scrollLeft : 0;

      this.setState({
        pointer: {
          top: `${this.refs.navigation.getBoundingClientRect().height}px`,
          left: `${left}px`,
          width: `${width}px`
        }
      });
    }, 20);
  }

  updateArrows = () => {
    const idx = this.refs.navigation.children.length - 2;
    const navRect = this.refs.navigation.getBoundingClientRect();
    const lastChildRect = this.refs.navigation.children[idx].getBoundingClientRect();

    this.setState({
      arrows: {
        left: this.refs.navigation.scrollLeft,
        right: navRect.right < lastChildRect.right,
        height: `${navRect.height}px`
      }
    });
  };

  renderHeaders (headers) {
    return headers.map((item, idx) => {
      return React.cloneElement(item, {
        key: idx,
        active: this.props.index === idx,
        onClick: this.handleHeaderClick.bind(this, idx, item),
        onRemove: this.handleHeaderRemove.bind(this, idx)
      });
    });
  }

  renderContents (contents) {
    const activeIdx = contents.findIndex((item, idx) => {
      return this.props.index === idx;
    });

    if (contents && contents[activeIdx]) {
      return React.cloneElement(contents[activeIdx], {
        key: activeIdx,
        active: true,
        tabIndex: activeIdx
      });
    }
  }

  renderArrows () {
    if (!this.state.arrows.left && !this.state.arrows.right) {
      return null;
    }

    const styles = {
      height: this.state.arrows.height || 'auto'
    };

    return (
      <div
        className={`${style.arrowsContainer} ${this.props.arrowsClassName}`}
        style={styles}
        ref="arrows"
      >
        <FontIcon
          value="keyboard_arrow_left"
          className={style.arrowButton}
          onClick={this.scrollLeft}
          disabled={!this.state.arrows.left}
        />
        <FontIcon
          value="keyboard_arrow_right"
          className={style.arrowButton}
          onClick={this.scrollRight}
          disabled={!this.state.arrows.right}
        />
      </div>
    );
  }

  render () {
    let className = style.root;
    const { headers, contents } = this.parseChildren();
    if (this.props.className) className += ` ${this.props.className}`;
    if (this.state.arrows.left || this.state.arrows.right) className += ` ${style.withArrows}`;

    return (
      <div ref='tabs' data-react-toolbox='tabs' className={className}>
        <nav className={style.navigation} ref='navigation'>
          {this.renderHeaders(headers)}

          {this.props.onAddTab ? (
            <IconButton
              icon="add"
              className={style.add}
              onClick={this.props.onAddTab}
              title={this.props.addTabButtonTitle}
              disabled={this.props.addTabButtonDisabled}
            />
          ) : null}
          <span className={style.pointer} style={this.state.pointer} />
        </nav>
        {this.renderArrows()}
        {this.renderContents(contents)}
      </div>
    );
  }
}

export default Tabs;
