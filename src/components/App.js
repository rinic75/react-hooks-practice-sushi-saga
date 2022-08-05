import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushi] = useState([])
  const [money, setMoney] = useState(100)
  useEffect(()=>{
    fetch(API)
    .then(r => r.json())
    .then(data => {
      const updateSushi = data.map(sushi => {
        return {...sushi, eaten: false}
      })
      setSushi(updateSushi)
    }
    )},[])

  function eatenSushi(eatenSushi) {
    if(money >= 0 && !eatenSushi.eaten) {
    setMoney(money - eatenSushi.price)
    }
    const updatedSushi = sushis.map(sushi => sushi.id === eatenSushi.id? {...sushi, eaten: true} : sushi)
    setSushi(updatedSushi)
  }

  const tableSushi = sushis.filter(sushi=> sushi.eaten)
  console.log(tableSushi)
    
  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatSushi={eatenSushi}/>
      <Table plates={tableSushi} money={money}/>
    </div>
  );
}

export default App;
