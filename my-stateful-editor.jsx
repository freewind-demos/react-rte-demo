import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

class MyStatefulEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: RichTextEditor.createEmptyValue()
    }
  }

  render() {
    return <RichTextEditor
      value={this.state.value}
      onChange={this._onChange.bind(this)}/>;
  }

  _onChange(value) {
    this.setState({value});
    if (this.props.onChange) {
      this.props.onChange(value.toString('html'));
    }
  }
}
;


MyStatefulEditor.propTypes = {
  onChange: PropTypes.func
}

export default MyStatefulEditor;