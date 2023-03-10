import logo from './logo.svg';
import './App.css';
import Person from './components/Person/Person';
import Example from './components/Example';
import { useState } from 'react';
import Radium from 'radium';

function App() {
  const [showPerson, setShowPerson] = useState(true)
  const [persons, setPerson] = useState([
    {name: "Hao", age: 1},
    {name: "Haos", age: 2},
    {name: "Haot", age: 3},
    {name: "Haog", age: 4},
    {name: "Haoz", age: 5}
  ]);

  // const changeNameHandler = ()=> {
  //   setPerson([
  //     { name: "Hao", age: 20 },
  //     { name: "Hao 2", age: 25 },
  //   ]);
  // }

  // const switchNameHandler = (event) => {
  //   setPerson([
  //     { name: "Hao", age: 10 },
  //     { name: event.target.value, age: 25 },
  //   ]);
  // };

  const togglePersons = () => {
    setShowPerson(!showPerson)
  }

  const deletePerson = (index) => {
    let newPersons = [...persons];
    newPersons.splice(index,1);
    setPerson(newPersons)
  }

  const btnStyles = {
    backgroundColor: 'red',
    border: '1px solid black',
    cursor: 'pointer',
    padding: '8px',
    color: 'white',
    ':hover' : {
      backgroundColor: 'lightred',
      color: 'black'
    }
  }

  let classes = [];
  if (persons.length <= 3) classes.push('red');
  if (persons.length <= 1) classes.push('bold');

  let listPersons = null;
  if (showPerson === true) {
    listPersons = <div>
      {
        persons.map((item, index) => {
          return (
            <Person
              key={index}
              click={() => deletePerson(index)}
              name={item.name}
              age={item.age}
            ></Person>
          );
        })
      }
    </div>

    btnStyles.backgroundColor = 'green';
    btnStyles[':hover'] = {
      backgroundColor: 'grey',
      color: 'black'
    }
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Learn React</h1>
      <p className={classes.join(' ')}>this is dynamic classes</p>
      <button style={btnStyles} onClick={() => togglePersons()}>Toggle Persons</button>
      <br />

      {listPersons}
      <br />

      <Example></Example>
    </div>
  );
}

export default Radium(App);
