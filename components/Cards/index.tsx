import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const Card = styled.div`
    height: 90%;
    width: 90%;
    margin: auto;
    display: grid;
    column-gap: 40px;
    grid-template-columns: repeat(auto-fill, minmax(200px,1fr));
    background-color: #141313;
    margin-top: .5rem;
    .card {
      display: flex;
      height: 100%;
      background-color: #1c1c1c;
      transition: .3s ease-out;
    }
    .card:hover{
      background-color: #2d2d2d;
    }
    .image-wrapper {
      position: relative;
      height: 80%;
    }
    .image-wrapper > span {
      border-radius: 10px;
    } 
    .card-wrapper {
      margin: auto;
      height: 90%;
      width: 90%;
    }
    .track-name {
      color: white;
    }
    .artist {
      color: #868686;
    }
`
function Cards() {
  return (
    <Card>
      <div className='card'> 
        <div className='card-wrapper'>
          <div className='image-wrapper'>
            <Image src="https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f"
              layout='fill' objectFit='cover' alt='banner' />
              </div>
              <h3 className="track-name">Escalate</h3>
              <p className='artist'>Hari</p> 
          </div>
      </div>
        <div className='card'> 
        <div className='card-wrapper'>
          <div className='image-wrapper'>
            <Image src="https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f"
              layout='fill' objectFit='cover' alt='banner' />
              </div>
              <h3 className="track-name">Breathing</h3>
              <p className='artist'>Ben bohmer</p> 
          </div>
      </div>
          <div className='card'> 
        <div className='card-wrapper'>
          <div className='image-wrapper'>
            <Image src="https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f"
              layout='fill' objectFit='cover' alt='banner' />
              </div>
              <h3 className="track-name">Breathing</h3>
              <p className='artist'>Ben bohmer</p> 
          </div>
      </div>
          <div className='card'> 
        <div className='card-wrapper'>
          <div className='image-wrapper'>
            <Image src="https://i.scdn.co/image/d3ae59a048dff7e95109aec18803f22bebe82d2f"
              layout='fill' objectFit='cover' alt='banner' />
              </div>
              <h3 className="track-name">Breathing</h3>
              <p className='artist'>Ben bohmer</p> 
          </div>
      </div>
     </Card>
  )
}

export default Cards;