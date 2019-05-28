import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [text, setText] = useState('');
  let [list, setList] = useState([]);

  const onChange = (input) =>{
    setText(input.target.value)
  }
  const onSubmit = () =>{
    if(text==='') return;
    setList([...list, {
      value:text,
      done:false
    }])
    setText('');
    document.querySelector('input').value='';
  }
  const done = (i) =>{
    setList([...list],  list[i].done = !list[i].done )
  }
  return (
    <div>
      <input onChange = {onChange} />
      <button onClick= {onSubmit} > Submit </button>
      <ul>
        {
          list.map((item, index) => 
            <li key={index} 
            onClick={e => done(index)}
            className={(list[index].done) ? 'done': null}
            >
            {item.value}
            </li>)
        }
      </ul>
    </div>
  );
}

export default App;
