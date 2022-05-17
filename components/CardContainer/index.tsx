import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import Cards from '../Cards';
import { useSession } from 'next-auth/react';
import useSpotify from '../../hooks/useSpotify';

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
    const spotifyApi = useSpotify()
    const { data: session } = useSession();
    const [playList, setPlayList] = useState([]);

    useEffect(() => { 
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlayList(data.body.items)
            })
        }
    }, [session, spotifyApi]);
    
    console.log(playList)
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