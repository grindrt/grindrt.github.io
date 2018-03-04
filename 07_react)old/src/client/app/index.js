import React from 'react';
import {render} from 'react-dom';
import AwesomeComponent from './AwesomeComponent.js';
import RecordComponent from './RecordComponent.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <p> Hi there! </p>
        <AwesomeComponent/>
        <RecordComponent/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'));
