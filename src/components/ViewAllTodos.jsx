import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewAllTodos = () => {
    const [todoData,changeTodoData]=useState(
        {
  "todos": [],
  "total": 254,
  "skip": 0,
  "limit": 30
}

    )
    const fetchData=()=>
    {
        axios.get("https://dummyjson.com/todos").then(
            (response)=>
            {
                changeTodoData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="list-group">
                            <caption>Todo List</caption>
                           {todoData.todos.map(
                            (value,index)=>
                            {
                                return(
                                     <a href="#" class="list-group-item list-group-item-action">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-1">{value.todo}</h6>
                                    <small>{value.completed? 'Completed':'Not completed'}</small>
                                </div>

                            </a>
                                )
                            }
                           )}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAllTodos