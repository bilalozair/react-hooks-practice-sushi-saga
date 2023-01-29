import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";


function App() {

  const [sushiList, setSushiList] = useState([])
  const [wallet, setWallet] = useState(100)



  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(data => {
      setSushiList(data)   
    })
  },[])

  function handleEatSushi(eatenSushi) {
    const updatedSushiList = sushiList.map((sushi) => {
      if (wallet >= eatenSushi.price) {
       if (sushi.id === eatenSushi.id) {
        setWallet(wallet - eatenSushi.price)
        return {...sushi, eaten:true}}
       return sushi

      } else {
        return sushi
      }
    })
    setSushiList(updatedSushiList)
   
  }

  const emptyPlates = sushiList.filter((sushi) => sushi.eaten)

  return (
    <div className="app">
      <SushiContainer sushiList = {sushiList} onEatSushi = {handleEatSushi} />
      <Table  plates = {emptyPlates} wallet = {wallet}/>
    </div>
  );
}

export default App;
