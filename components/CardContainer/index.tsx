import React from 'react';
import styled from 'styled-components';
import Cards from '../Cards';

const Container = styled.div`
    height: 45%;
    margin-bottom: 2.4rem;
    .title {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
    .title h2 {
    margin-left: 60px;
    }
    .title p {
        margin-right: 50px;
    }
    .title {
        color: white;
    }
    a:hover {
        text-decoration: underline;
    }
`


function CardContainer() {
    let trackname = "escalate";
    let artist = 'hari'
    return (
        <>
            <Container>
                <div className='title'>
                    <h2>
                        <a href="">Shows to try</a>
                    </h2>
                    <p>
                        <a href="">SEE ALL</a>
                    </p>
                </div>
                <Cards />
            </Container>

            <Container>
                <div className='title'>
                    <h2>
                        <a href="">Episodes</a>
                    </h2>
                    <p>
                        <a href="">SEE ALL</a>
                    </p>
                </div>
                <Cards />
            </Container>
        </> 
  )
}

interface Props {
  username: string;
}

export default CardContainer