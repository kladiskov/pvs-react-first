import React from 'react';
import classes from './Cockpit.css';
//import Aux from '../../hoc/Aux';
const cockpit = (props) => {
    const myClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
      myClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      myClasses.push(classes.bold);
    }
    return (<div className={classes.Cockpit}>
        <h1>{props.appTitle}</h1>
        <p className={myClasses.join(' ')}>This will work</p>
        <button
            className={btnClass}
            onClick={props.clicked}>Toggle Persons
        </button>
        <button onClick={props.login}>Log in</button>
    </div>);
};
export default cockpit;