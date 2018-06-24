import React, { Component } from 'react';
import classes from './App.css'
import Person from '../components/Persons/Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: 'id1', name: "dexter", age: "30" },
      { id: 'id2', name: "hunt", age: "31" },
      { id: 'id3', name: "bond", age: "34" }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {
    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const myClasses = [];
    if (this.state.persons.length <= 2) {
      myClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      myClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Welcome to react app.</h1>
        <p className={myClasses.join(' ')}>This will work</p>
        <button
          className={btnClass}
          onClick={this.togglePersonsHandler}>Toggle Persons
        </button>
        {persons}
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m a react app!!!'));
  }
}

export default App;
