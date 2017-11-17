import PropTypes from 'prop-types';
import React from 'react';
import RadioButton from './RadioButton';

class RadioGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any
  };

  static defaultProps = {
    className: '',
    disabled: false
  };

  handleChange = (value) => {
    if (this.props.onChange) this.props.onChange(value);
  };

  renderRadioButtons () {
    return React.Children.map(this.props.children, (radio, idx) => {
      return (
        <RadioButton
          {...radio.props}
          checked={radio.props.value === this.props.value}
          disabled={this.props.disabled || radio.props.disabled}
          key={idx}
          label={radio.props.label}
          onChange={this.handleChange.bind(this, radio.props.value)}
          value={radio.props.value}
        />
      );
    });
  }

  render () {
    return (
      <div data-react-toolbox='radio-group' className={this.props.className}>
        {this.renderRadioButtons()}
      </div>
    );
  }
}

export default RadioGroup;
