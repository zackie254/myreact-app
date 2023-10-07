'use client'
import React, { useState, useEffect } from 'react'


export const Dashboard = () => {
    const[user,setUser]=useState({Email:'',Password:''});
    useEffect(()=>{
        var a = localStorage.getItem('myData');
        var b= JSON.parse(a);
    })


  return (
    <>
     <div class="col-sm-12 btn btn-primary"> 
     <div>dashboard</div>
     </div>
     <h1>Welcome :{user.EmployeeName}</h1>
    </>
   
  )
}
export default Dashboard;