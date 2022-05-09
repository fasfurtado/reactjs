import React, {useState, useEffect} from 'react'
import '../ifoodcounter/ifoodcounter.css'

export default function Ifoodcounter() {

  const [value, setValue] = useState(1);

  const [buttonMinusStyle, setButtonMinusStyle] = useState('counter-button-minus-active')
  
  const [buttonPlusStyle, setButtonPlusStyle] = useState('counter-button-plus-active')

  useEffect(()=>{
    document.getElementById("moeda").innerHTML = 2.00 * value
  },[value]
    
  )
  // useEffect é um efeito colateral
  //useEffect(()=>{
  //  console.log(`o estilo do botão atual é: ${buttonPlusStyle}`)}
  //  , [buttonPlusStyle])
 
  

  function down() {

      if (value<=1) {setButtonMinusStyle('className="counter-button-minus-desactive')}
      if (value>0) {
          setValue(value-1)   
          setButtonPlusStyle('counter-button-plus-active')
      }
  }

  function up() {
    if (value>=10) {setButtonPlusStyle('className="counter-button-plus-desactive')}
  
    if (value<10) {
        setValue(value+1)
        setButtonMinusStyle('counter-button-minus-active')

    }
  }
  
  return (
    <div className="countex-wrapper">
        <button className={buttonMinusStyle} onClick={down}>
            -
        </button>
        <p>{value}</p>
        <button className={buttonPlusStyle} onClick={up}>
            +
        </button>
        <button id="moeda">12,00</button>
    </div>
  )
}
