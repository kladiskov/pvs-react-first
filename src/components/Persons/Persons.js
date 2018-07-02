import React, { Component } from 'react';
import Person from '../Persons/Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js]inside constructor', props);
    }

    componentWillMount() {
        console.log('[Persons.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Persons.js] inside componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('[UPDATE Persons.js] inside componentWillReceiveProps', nextProps);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside shouldComponentUpdate', nextProps, nextState);
        return true;//false will stop the update.
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('[UPDATE Persons.js] inside componentWillUpdate', nextProps, nextState);
    }

    componentDidUpdate() {
        console.log('[UPDATE Persons.js] inside componentDidUpdate', this.props, this.state);
    }

    render() {
        console.log('[Persons.js] inside render');
        return this.props.persons.map((person, index) => {
            return <Person
                click={() => this.props.clicked(index)}
                key={person.id}
                name={person.name}
                age={person.age}
                position={index}
                authenticated={this.props.isAuthenticated}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}


export default Persons;