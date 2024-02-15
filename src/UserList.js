import React from 'react'
import './App.css';


const UserList = ({user,id}) => {
  return (
    <div className="cards">
  <div className="card-container">
	<span className="pro">PRO</span>
	<img className="round" src="https://randomuser.me/api/portraits/women/79.jpg" alt="user" />
	<h3>{user.name}</h3>
	<h3>{user.username}</h3>
  <h3>{user.email}</h3>
      <h3>{user.address.street}</h3>
      <h3>{user.address.suite}</h3>
			<h3>{user.address.city}</h3>
			<h3>{user.address.zipcode}</h3>
			
			   <h6>{user.address.geo.lat}</h6>
			   <h6>{user.address.geo.lng}</h6>
  
	<div className="skills">
			
			<h3>{user.phone}</h3>
      <h3>{user.website}</h3>
      
      <h6>{user.company.name}</h6>
      <h6>{user.company.catchPhrase}</h6>*
      <h6>{user.company.bs}</h6>

	</div>
  </div>
</div>
  
  )
}

export default UserList
