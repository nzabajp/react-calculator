import React from 'react'

export default function App() {

  const initialDisplay = "0"

  const [display, setDisplay] = React.useState(initialDisplay)

  function toggleNumbers(event) {
    const {innerText} = event.target
    setDisplay(prevDisplay => {
      if(prevDisplay.length === 1 && prevDisplay[0] === "0" && innerText === "0") {
        return prevDisplay
      }else if(prevDisplay[0] === "0" && prevDisplay.length === 1) {
        return innerText
      } else {
        return prevDisplay.concat(innerText)
      }
    })
  }

  function toggleSigns(event) {
    const {innerText} = event.target
    setDisplay(prevDisplay => `${prevDisplay} ${innerText} `)
  }

  function toggleDecimal(event) {
    const {innerText} = event.target
    const displayToArr = display.split(" ")
    const lastNum = displayToArr[displayToArr.length - 1]
    setDisplay(prevDisplay => {
      if(lastNum.includes(innerText)) {
      return prevDisplay 
      } else {
        return prevDisplay.concat(innerText)
      }
    })
  }

  function equals() {
    const adjustDisplay = display.split(" ").join("")
    const filterRegex = /(\*|\+|\/|-)?(\.|\-)?\d+/g
    const filteredEquation = adjustDisplay.match(filterRegex).join("")
    const sumFiltered = eval(filteredEquation)
    setDisplay([Math.round(sumFiltered * 10000)/10000])
  }

  return (
    <div className="app">
      <div className='calculator'>
        <div id="display" className='display'>
          {display}
        </div>
        <div className='buttons'>
          <div id="clear" className='clear' onClick={() => setDisplay(initialDisplay)}>
            AC
          </div>
          <div id="divide" className='divide' onClick={toggleSigns}>
            /
          </div>
          <div id="multiply" className='multiply' onClick={toggleSigns}>
            *
          </div>
          <div id="subtract" className='subtract' onClick={toggleSigns}>
            -
          </div>
          <div id="add" className='add' onClick={toggleSigns}>
            +
          </div>
          <div id="one" className='one' onClick={toggleNumbers}>
            1
          </div>
          <div id="two" className='two' onClick={toggleNumbers}>
            2
          </div>
          <div id="three" className='three' onClick={toggleNumbers}>
            3
          </div>
          <div id="four" className='four' onClick={toggleNumbers}>
            4
          </div>
          <div id="five" className='five' onClick={toggleNumbers}>
            5
          </div>
          <div id="six" className='six' onClick={toggleNumbers}>
            6
          </div>
          <div id="seven" className='seven' onClick={toggleNumbers}>
            7
          </div>
          <div id="eight" className='eight' onClick={toggleNumbers}>
            8
          </div>
          <div id="nine" className='nine' onClick={toggleNumbers}>
            9
          </div>
          <div id="zero" className='zero' onClick={toggleNumbers}>
            0
          </div>
          <div id="decimal" className='decimal' onClick={toggleDecimal}>
            .
          </div>
          <div id="equals" className='equals' onClick={equals}>
            <span>=</span>
          </div>
        </div>
      </div>
      <p className='footer'>
        Made with <i class="fa-solid fa-heart" /> by <a 
          href="https://github.com/nzabajp" target="_blank" rel="noreferrer">
          /nzabajp
          </a>
      </p>
    </div>
  );
}
