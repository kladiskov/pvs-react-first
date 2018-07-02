import React, { Component } from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js]inside constructor', props);
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] inside componentWillMount');
    }

    componentDidMount() {
        console.log('[Person.js] inside componentDidMount');
        if (this.props.position === 0)
            this.inputElement.current.focus();
    }

    componentWillUnmount() {
        // Component is about to get removed => Perform any cleanup work here!
        console.log('[Person.js] inside componentWillUnmount');
    }

    render() {
        console.log('[Person.js] inside render');
        return (<div className={classes.Person}>
            {this.props.authenticated ? <p> I'm authenticated.</p> : null }
            <p onClick={this.props.click}> Hi, I am {this.props.name} and I am {this.props.age} years old</p>
            <p>{this.props.children}</p>
            <input
                ref={this.inputElement}
                type="text"
                onChange={this.props.changed}
                value={this.props.name} />
        </div>)
    }
}

Person.prototypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;