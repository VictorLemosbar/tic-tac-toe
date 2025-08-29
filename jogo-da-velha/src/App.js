//Criação do elemento Square que irá compor o jogo da velha

import './App.css';

//Componente Square

function Square() {
  return (

    <div>
      <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    <div>
      <Square/>
      <Square/>
      <Square/>
    </div>
    

    <button className='square'>1</button>

    </div>
  )
}

export default function Square() {
  return(
    <div>
      <div>
        <button className='square'>1</button>
        <button className='square'>2</button>
        <button className='square'>3</button>
      </div>

      <div>

        <button className='square'>4</button>
        <button className='square'>5</button>
        <button className='square'>6</button>

      </div>

      <div>

        <button className='square'>7</button>
        <button className='square'>8</button>
        <button className='square'>9</button>

      </div>
     
   
      
    </div>
  )
}