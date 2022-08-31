import React from 'react'

const Todo = (submitData) => {
  return (
    <div>
      <form>
        <input type='text' placeholder="enter text" />
        <button type='submit' onSubmit={()=>submitData()}>send</button>
      </form>
    </div>
  )
}

export default Todo
