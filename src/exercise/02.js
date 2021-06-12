// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import * as React from 'react'


const useLocalStorageState = (key, defaultValue = '') => {
  const [state, setState] = React.useState(()=>{
    return window.localStorage.getItem(key) || defaultValue
  })

  React.useEffect(()=>{
    window.localStorage.setItem('name', state)
  }, [state])

  return [state, setState];
}

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName

  // normal initialization
  // const [name, setName] = React.useState(window.localStorage.getItem('name') || initialName)
  // lazy initialization

  // const [name, setName] = React.useState(()=>{
  //   return window.localStorage.getItem('name') || initialName
  // })

  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)

  // React.useEffect(()=>{
  //   window.localStorage.setItem('name', name)
  // }, [name])



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
