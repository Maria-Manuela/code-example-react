import { useEffect, useState } from "react";

//UseEffect on Mount
// import useEffect from react at the top
//inside the function component above the return statement call the useEffect hook
//insert an arrow function as the first argument
// insert an arrow function console.log("mount")

/*
import { useEffect} from 'react'

export const App = () => {

  useEffect(() => {
    console.log('mount')
  })
  return (
    <div>App</div>
  )
}
*/

//UseEffect on state Update
//import useState hook at the top 
//initiate a state variable called count with default value 0
//create a button inside the div that display counts and increments the count by one when clicked

/*
import { useEffect, useState} from 'react'

export const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('mount')
  })
  return (
    <div className="App">
      <button  onClick={() => setCount(c => c + 1)}>{count}</button>
    </div>
  )
}
*/

//UsEffect on Multiple State Updates
//initiate anothe state variable called "decrement". set default value to 100
//inside the div class "App", add another button that displays the calue of decrement and decrements by one when the button is clicked

/*
import { useEffect, useState} from 'react'

export const App = () => {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(100)

    useEffect (() => {
        console.log('mount')
    })

  return (
    <div className="App">
      <button onClick={() => setCount(c => c +1)}>{count}</button>
      <button onClick={() => setDecrement(d => d - 1)}>{decrement}</button>
    </div>
  )
}
*/

//UseEffect with a dependency when multiple states are updated
//we want to useEffect to update when ciunts updates. we do that by adding a dependency array as a second parrameter
  //add an array as a second parameter to the useEffect hook
  //add count inside the array
  //save and refresh
  //By only passing count as a dependency to the useEffect hook, we are essentially telling useEffect to only be called again when the count state variable changes.
  
/*
import { useEffect, useState} from 'react'

export const App = () => {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(100)

    useEffect (() => {
        console.log('mount')
    }, [count])

  return (
    <div className="App">
      <button onClick={() => setCount(c => c +1)}>{count}</button>
      <button onClick={() => setDecrement(d => d - 1)}>{decrement}</button>
    </div>
  )
}
*/


//Multiple UseEffects On Multiple State Updates
//create another UseEffect hook and add decrement as a dependency
//update both console.logs to log their dependecy variable
//Both useEffects are called after the component has been mounted and are called again depending on when their dependencies update.

/* 

export const App = () => {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(100)

    useEffect (() => {
      console.log(count)
    }, [count])

    useEffect (() => {
      console.log(decrement)
    }, [decrement])

  return (
    <div className="App">
      <button onClick={() => setCount(c => c +1)}>{count}</button>
      <button onClick={() => setDecrement(d => d - 1)}>{decrement}</button>
    </div>
  )
}
*/

//Perfom Actions when the component will unmount
//A perfect example of when we would need to implement a process like this is when we subscribe to a listener and want to unsubscribe before the component unmounts.

//remove the useEffects we previously created
// create a new useEffect and in side we will subscribe to the event listener "click"

export const App = () => {
  const [count, setCount] = useState(0);
  const [decrement, setDecrement] = useState(100)

  const onClick = (e) => console.log('clicked')   

  useEffect (() => {
    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [])

   return (
    <div className="App">
      <button onClick={() => setCount(c => c +1)}>{count}</button>
      <button onClick={() => setDecrement(d => d - 1)}>{decrement}</button>
    </div>
  )
}

//return a function at the end of the useEffect function to perform actions before a component will unmount. Similarly to the lifecycle method componentWillUnmount.