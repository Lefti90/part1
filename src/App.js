const App = () => {
  props = {
    name: 'Maya',
    age: 36,
  }
  return (
    <div>
      <h1>Greetings</h1>
      <Hello />
    </div>
  )
}

const Hello = ({ name, age }) => {

  const bornYear = () => new Date().getFullYear() - age
  
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

export default App