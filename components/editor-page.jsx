import React, {Component} from 'react';
import MyStatefulEditor from './my-stateful-editor.jsx';

export default class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorContent: ''
    }
  }

  render() {
    return <div>
      <MyStatefulEditor onChange={this._onChange.bind(this)}/>
      <hr/>
      <div>
        <h2>Editor Content</h2>
        <div>{this.state.editorContent}</div>
      </div>
    </div>
  }

  _onChange(editorContent) {
    this.setState({editorContent});
  }
}