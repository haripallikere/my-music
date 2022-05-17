import React, { useEffect } from 'react';
import styled from 'styled-components';
import { getProviders, signIn } from "next-auth/react"


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


function Login({providers}) {
    const provider = Object.values(providers)[0];
    useEffect(() => {
       async () => {
           
       }
    },[providers])
    return (
         <Container>
            <div className='logo'>
                <img src="https://links.papareact.com/9xl" alt="logo" />
            </div>
            <button onClick={() => signIn(provider.id, {callbackUrl: "/"} )}>
                Login with {provider.name}
            </button>   
        </Container>
  )
}

export default Login;


// server side rendering 

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
           providers
        },
    }
}


