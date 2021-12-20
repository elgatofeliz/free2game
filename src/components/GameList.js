import ListItemLong from './ListItems/ListItemLong.js'

import React, { Component } from 'react'


export class GameList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Data: []
        }
    }

    componentDidMount() {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": "ddbd8be2a9msh33549916a898969p161d78jsn9446c5507777"
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ Data: data }, () => { console.log(this.state.Data) })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.Data.map(elt => (
                    <ListItemLong
                        image={elt.thumbnail}
                        alt={elt.title}
                        title={elt.title}
                        short_description={elt.short_description}
                        id={elt.id}
                        platform={elt.platform}
                        genre={elt.genre}
                        key={elt.id}
                    />
                ))}
            </div>
        )
    }
}

export default GameList
