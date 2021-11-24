import data from "./data"
import List from "./components/list"
import { useState } from "react"

function App() {
  const [people, setPeople] = useState(data)

  function handlerClick() {
    setPeople(0)
  }

  return (
    <div className="App">
      <section className="container">
        <h3>{people ? data.length : 0} birthdays today</h3>
        {people ?
          people.map((person) => {
            const { name, age, image, id } = person
            return <List
                      name={name} 
                      age={age} 
                      imageURL={image} 
                      key={id} 
                    />
          }) :
          console.log("error")}
        <button onClick={handlerClick} >Clear All</button>
      </section>
    </div>
  )
}

export default App
