import React from 'react';

class PersonCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        };
    }

    birthday = () => {
        this.setState({age : this.state.age + 1})
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        return (
            <>
                <h2>{lastName}, {firstName} </h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.birthday}>Birthday Button for {firstName} {lastName}</button>
            </>
        )
    }
}

export default PersonCard;