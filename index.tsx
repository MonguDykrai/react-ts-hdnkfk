import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

function Text() {
  return <span>hello my friend</span>;
}

//
const AdvancedText = (props: { children: string }) => (
  <span>{props.children ? <b>{props.children}</b> : null}AdvancedText</span>
);

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>Start editing to see some magic happen :)</p>
        <Text />
        <AdvancedText>custom message</AdvancedText>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
