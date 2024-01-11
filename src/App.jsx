import { useEffect, useRef, useState } from "react"
import Vazn from "./components/Vazn"

function App() {
  const [yerdagiVazn, setYerdagiVazn] = useState(58)
  const vaznim = (e) => {
    e.preventDefault
    setYerdagiVazn(e.target.value)
  }

  useEffect(() => {
    console.log(1);
  }, [yerdagiVazn])
  return (
    <div>
      <div className="Human-weith">
        <h2>Enter your weight on Earth (kg):</h2>
        <input className="human-inp" type="number" defaultValue={58} onChange={(e) => vaznim(e)} />
      </div>
      <Vazn yerdagiVazn={yerdagiVazn} />
    </div>
  )
}

export default App