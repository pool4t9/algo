import { useState } from 'react'
import './App.css'
import { findPath } from './utils'

function App() {
  const [size, setsize] = useState(4);
  const [start, setStart] = useState([0, 0]);
  const [end, setEnd] = useState([size - 1, size - 1]);
  let matrix = Array(size).fill().map(() => Array(size).fill(0));
  let ans = findPath(0, 0, 4, 4, matrix)
  console.log(ans)
  return (
    <>
      <div className="main-container">
        <div className="main-row">
          {matrix.map((mat, i) => {
            return mat.map((item, j) => <div key={Math.random() * 100} className={`main-col ${i == 0 && j == 0 ? 'bg-orange' : ''}`}></div>)
          })}
        </div>
      </div>
      <br />
      <h2>Solution</h2>
      <div className='main-container solution'>
        <div className='main-row'>
          {ans.map((mat, i) => {
            return mat.map((item, j) => <div key={Math.random() * 100} className={ans[i][j] == 1 ? 'main-col bg-green' : "main-col"}></div>)
          })}
        </div>
      </div>
    </>
  )
}

export default App
