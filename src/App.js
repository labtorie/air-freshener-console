import './App.css';
import Header from "./components/common/Header";
import {useEffect, useState} from "react";
import {getGraph} from "./api/api";
import moment from "moment";
import Graph from "./components/Graph";

function App() {
  const [data, setData] = useState([])
  const getData = async () => {
  const {data} = await getGraph()
    const dataArray = Object
        .entries(data)
        .filter(([key])=>key!=='last_id')
        .map(([key, value])=>({...value, time: moment(value?.timestamp).format('DD/MM HH:MM:SS')}))
    setData(dataArray)
  }
  useEffect(()=>{
    getData()
  }, [])

  return <div>
    <Header/>
    <Graph data={data}/>
  </div>
}

export default App;
