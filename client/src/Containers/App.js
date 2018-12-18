import React, { Component } from 'react';
import './Main.css';
import DatePicker from '../Components/DatePicker';
import ResultTable from '../Components/ResultTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style={{background: 'black', borderBottom: '30px solid purple'}} >
          <img src='/images/dealer_portal_header_img.jpg' className="App-logo" alt="logo" style={{ margin: '0px auto', display: 'block' }} />
   
        </header>
        <DatePicker />
        <ResultTable />
      </div>
    );
  }
}

export default App;
