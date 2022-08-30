import React,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import {getData,postData,postDataAndImage, ServerURL} from '../User/NewCompoment/FetchNodeServices'

function UserTableInfo() {
const [get_Data, set_Data]=useState([]);



 const fetchList =()=>{
   return(
     get_Data.map((item,i)=>{
      return(
        <tr key={i}>
        <td>{i+1}</td>
        <td>{item.name}</td>
        <td>{item.lname}</td>
        <td>{item.email}</td>
        <td>{item.password}</td>
        <td><img src={`${ServerURL}/images/${item.img}`} alt="userImage" width="55px" height="55px" /></td>
      </tr>
      )
     })
   )
 }

useEffect(()=>{
  const showData = async()=>{
    const list = await getData('fetchdata/displayData');
    set_Data(list)
  }
  showData()
},[])

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
         {fetchList()}
      </tbody>
    </Table>
  );
}

export default UserTableInfo;