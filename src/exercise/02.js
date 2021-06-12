// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'


const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = React.useState(()=>{
    return JSON.parse(window.localStorage.getItem(key)) || defaultValue
  })

  React.useEffect(()=>{
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState];
}

function Greeting({initialName = ''}) {

  const [value, setValue] = useLocalStorageState('name', initialName);

  function handleChange(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={value} onChange={handleChange} id="name" />
      </form>
      {value ? <strong>Hello {value}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
