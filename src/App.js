import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

// DATA
import { players } from './players.json'

// SUBCOMPONENTS
import NewPlayer from './components/NewPlayer'

class App extends Component {
  constructor() {
    super()
    this.state = {
      players
    }
    this.handleAddPlayer = this.handleAddPlayer.bind(this)
  }

  handleAddPlayer(player) {
    this.setState({
      players: [...this.state.players, player]
    })
  }

  removePlayer(index) {
    if (window.confirm('Are you sure that you want to delete it?')) {
      this.setState({
        players: this.state.players.filter((e, i) => {
          return i !== index
        })
      })
    } 
  }

  render() {
    const players = this.state.players.map((players, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{players.name}</h3>
              <span className="badge badge-pill badge-success ml-2">
                {players.position}
              </span>
            </div>
            <div>
              <p>{players.nationality}</p>
              <p><mark>{players.team}</mark></p>
            </div>
            <div className="card-footer">
            <button
              className="btn btn-danger"
              onClick={this.removePlayer.bind(this, i)}>
              Delete
            </button>
          </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a href="/" className="text-white">
            My team
            <span className="badge badge-pill badge-light ml-2">
              {this.state.players.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">
            <div className="col-md-3">
              <img src={logo} className="App-logo" alt="logo" />
              <NewPlayer onAddPlayer={this.handleAddPlayer}/>
            </div>
            <div className="col-md-9">
              <div className="row">
                {players}
              </div>
            </div>
          </div>
        </div>

        
      </div>
    )
  }
}

export default App