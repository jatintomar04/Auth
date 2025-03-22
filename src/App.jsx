import React from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Todocontainer from './Components/Todocontainer'
import Todocard from './Components/Todocard'

const App = () => {
  return (
    <>
    <Navbar />

    <div className="container p-2">
    <Form />
    <Todocontainer />
    </div>
    </>

  )
}

export default App