import React from 'react';
import ReactDOM from 'react-dom';
import style from './style';

const HEADER_HEIGHT = 80;

const Markdown = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    markdown: React.PropTypes.string.isRequired
  },

  getDefaultProps () {
    return {
      className: ''
    };
  },

  getInitialState () {
    return {
      scroll: false,
      staticHeader: false
    };
  },

  componentWillReceiveProps () {
    ReactDOM.findDOMNode(this).scrollTop = 0;
  },

  handleScroll (event) {
    const last = this.state.scroll;
    const current = event.target.scrollTop;
    const state = {scroll: current};
    if (last < current && current > HEADER_HEIGHT && !this.state.staticHeader) {
      state.staticHeader = true;
    } else if (last > current && current < HEADER_HEIGHT && this.state.staticHeader ) {
      state.staticHeader = false;
    }
    this.setState(state)
  },

  render () {
    let className = style.markdown;
    if (this.props.className) className += ` ${this.props.className}`;
    if (this.state.staticHeader) className += ` ${style.scroll}`;

    const html = {
      __html: this.props.markdown
    };

    return (
      <article
        className={className}
        dangerouslySetInnerHTML={html}
        onScroll={this.handleScroll}
      />
    );
  }
});

export default Markdown;
