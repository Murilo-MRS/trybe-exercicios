import React, { Component } from 'react'

class Card extends Component {
    render() {
        const { results } = this.props
        const { name: {title, first, last,}, dob: {age}, email, picture: { thumbnail } } = results

        return ( 
            <div>
                <p>{title} {first} {last}</p>
                <p>{email}</p>
                <p>{age} years old</p>
                <img src={thumbnail} alt={first}/>
            </div>
        )
    }
};

export default Card;