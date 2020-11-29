import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0();
  const authenticatedUser = isAuthenticated && user;
  const hasPicture = user && user.picture;
  
  
  console.log({user});
  return (
  <Wrapper>
    {authenticatedUser && hasPicture && <img src={user.picture} alt={user.name} /> }
   
    {authenticatedUser && user.name && (<h4>Welcome, <strong>{user.name}</strong>!</h4>)}
    {authenticatedUser && !user.name && user.nickname && (<h4>Welcome, <strong>{user.nickname}</strong>!</h4>)}
    
    {authenticatedUser ? 
    (<button  onClick={() => {logout({ returnTo: window.location.origin });}}>Log out</button>) 
    : 
    (<button  onClick={loginWithRedirect}>Login</button>)}
  </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-grey-8);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: right;
  align-items: center;
  gap: 1.5rem;
  
  h4 {
    margin-bottom: 0;
    font-weight: 400;
    
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    border: 1px solid blue;
    width :10%!important;
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
    white-space: nowrap; 
  }
`;

export default Navbar;
