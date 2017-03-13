import React from 'react';
import Tab from './Tab';
import TabContent from './TabContent';
import IconButton from '../button/IconButton';
import style from './style';

class Tabs extends React.Component {
  static propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    disableAnimatedBottomBorder: React.PropTypes.bool,
    addTabButtonDisabled: React.PropTypes.disabled,
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
    pointer: {}
  };

  componentDidMount () {
    !this.props.disableAnimatedBottomBorder && this.updatePointer(this.props.index);
  }

  componentWillReceiveProps (nextProps) {
    !this.props.disableAnimatedBottomBorder && this.updatePointer(nextProps.index);
  }

  componentWillUnmount () {
    clearTimeout(this.pointerTimeout);
  }

  handleHeaderClick = (idx) => {
    if (this.props.onChange) this.props.onChange(idx);
  };

  handleHeaderRemove = (idx) => {
    if (this.props.onRemoveTab) this.props.onRemoveTab(idx);
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

  updatePointer (idx) {
    clearTimeout(this.pointerTimeout);
    this.pointerTimeout = setTimeout(() => {
      const startPoint = this.refs.tabs.getBoundingClientRect().left;
      const child = this.refs.navigation.children[idx];
      const rect = child ? child.getBoundingClientRect() : null;

      const width = rect ? rect.width : 0;
      const left = rect ? rect.left - startPoint : 0;

      this.setState({
        pointer: {
          top: `${this.refs.navigation.getBoundingClientRect().height}px`,
          left: `${left}px`,
          width: `${width}px`
        }
      });
    }, 20);
  }

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

  render () {
    let className = style.root;
    const { headers, contents } = this.parseChildren();
    if (this.props.className) className += ` ${this.props.className}`;

    return (
      <div ref='tabs' data-react-toolbox='tabs' className={className}>
        <nav className={style.navigation} ref='navigation'>
          {this.renderHeaders(headers)}

          {this.props.onAddTab ? (
            <IconButton
              icon="add"
              className={style.add}
              onClick={this.props.onAddTab}
              disabled={this.props.addTabButtonDisabled}
            />
          ) : null}
        </nav>
        <span className={style.pointer} style={this.state.pointer} />
        {this.renderContents(contents)}
      </div>
    );
  }
}

export default Tabs;
