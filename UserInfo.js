
import React from 'react';
import "./UserInfo.css"
const UserInfo = ({ userData }) => {

  const { name, username, email, address, phone, website, company } = userData;

 
  const addressDetails = address ? `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}` : '';

  return (
  <div className="userinfo">
    <div className='img'>
    <img style={{width:'230px',  borderRadius:'200px' }} src="https://pbs.twimg.com/profile_images/1562753500726976514/EPSUNyR3_400x400.jpg">
    
    </img>
    </div>
    <div className="info">
      <h2>{username}</h2>
      <p>{name}</p>
      <div className='bio'>
      {/* <h4>Bio</h4> */}
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>address:{addressDetails}</p>
      </div>
      {/* Display other user information as needed */}
      <div className='comp'>

      
      <h4>Company</h4>
      
       <p>{company.name}</p>
       <p>{company.catchPhrase}</p>
       <p>{company.bs}</p>
      
     <p> <span style={{fontWeight:'lighter'}}>Followed by</span> <span style={{fontWeight:"bolder"}}>mahi7781,sachintendulkar+150more</span></p>
     </div>
      </div>
    </div>
  );
};

export default UserInfo;
