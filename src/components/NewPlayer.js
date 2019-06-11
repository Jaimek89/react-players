import React, { Component } from 'react'

class NewPlayer extends Component {
    constructor () {
        super()
        this.state = {
            name: '',
            team: '',
            nationality: '',
            position: 'Goalkeeper'
        }
    }

    handleInput = (e) => {
        const { value, name } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddPlayer(this.state)
        this.setState({
            name: '',
            team: '',
            nationality: '',
            position: 'Goalkeeper'
        })
    }

    render() {
        return (
            <div className="card">
                <form className="card-body" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="team"
                            className="form-control"
                            placeholder="Team"
                            value={this.state.team}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="nationality"
                            className="form-control"
                            placeholder="Nationality"
                            value={this.state.nationality}
                            onChange={this.handleInput}
                        />
                    </div>
                    <div className="form-group">
                        <select
                            name="position"
                            className="form-control"
                            value={this.state.position}
                            onChange={this.handleInput}>
                            <option>Goalkeeper</option>
                            <option>Defender</option>
                            <option>Midfielder</option>
                            <option>Forward</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default NewPlayer