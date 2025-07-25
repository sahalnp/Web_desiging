import React, { useState } from 'react'

export const Todo = () => {
  const [val,setVal]=useState([])
  const [user,setUser]=useState('')
  const add = () => {
    if (user.trim() !== '') {
      setVal([...val, user]);
      setUser('');
    }
  };
  const h=(index)=>{
    const n=  val.filter((_, i) => i !==index );
    setVal(n)
  }
  const complete=(index)=>{
    const check=val[index]
    const rem= val.filter((_, i) => i !==index );
    setVal(rem)
    const stored = JSON.parse(localStorage.getItem('Tasks')) || [];
    const update=[...stored,check]
    localStorage.setItem('Tasks',JSON.stringify(update))
  }
  
  const renderCompleted=()=>{
       const stored = JSON.parse(localStorage.getItem('Tasks')) || [];
    return (
     <ul>
        {stored.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
  return (
    <div>
      <h1>My To-Do List</h1>
      <input
        type="text" 
        value={user}
        onChange={(e) => setUser(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={add}>Add</button>
     
<ul>
  {val.map((item, index) => (
    <li key={index}>
      <input type="checkbox" onClick={()=>complete(index)}/>
      {item}
      <button onClick={() => h(index)}>Delete</button>
    </li>
  ))}
</ul>
     <h3>Completed</h3>
      {renderCompleted()}
    </div>
  )
}
