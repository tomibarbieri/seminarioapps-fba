import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';


class App extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1yqYvP-8uvDNhGv5F1sT7nelN09XiXVG2Hkpxp_2I4Ck',
      callback: googleData => {
        console.log('Data --->', googleData)
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }

  render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            {
              data.map(obj => {
                return (
                  <p key={obj.id}>
                    <b>{obj.nombre}: </b>{obj.descripcion}
                  </p>
                )
              })
            }
        </header>
      </div>
    );
  }
}

export default App;
