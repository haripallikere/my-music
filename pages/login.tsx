import React from 'react';
import styled from 'styled-components';
import { getProviders, signIn} from 'next-auth/react'


const Container = styled.div`
    background-color: #1c1c1c;
    height: 100vh;
    text-align: center;
    padding: 5rem;
    .logo {
        width: 300px;
        height: 300px;
        margin: auto;
    }
    button { 
        margin-top: 2rem;
        background-color: #55d855;
        border: none;
        border-radius: 10px;
        padding: 10px;
    }
`
function Login() {
    // const v = 
    return (
         <Container>
            <div className='logo'>
                <img src="https://links.papareact.com/9xl" alt="" />
            </div>
            <button>
                <a href="http://">Login with Spotify</a>
            </button>   
        </Container>
  )
}

export default Login;

