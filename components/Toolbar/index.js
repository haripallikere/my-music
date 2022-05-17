import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faAngleLeft,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { getSession } from 'next-auth/react';

async function session() {
  const session = await getSession();
  return session;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #141313;
  .navigator {
    display: flex;
    margin: 20px;
  }
  .nav-direction:hover {
    cursor: pointer;
  }
  .navigator > div {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: black;
  }

  .user-profile {
    width: 130px;
    height: 40px;
    border-radius: 30px;
    margin-top: 20px;
    background-color: black;
    margin-right: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    place-content: center;
  }
  .user-profile:hover {
    cursor: pointer;
  }
  .profile-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background-color: #666464;
  }
  .profile-icon img {
    border-radius: 50%;
    object-fit: cover;
  }
  .nav-direction {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
    color: #666464;
  }
  .user-name > p {
    color: whitesmoke;
    font-size: 10px;
  }
`;

export default function Toolbar() {
  // const { data: session } = useSession();
  console.log(session());

  return (
    <Container className="toolbar">
      <div className="navigator">
        <div className="nav-direction">
          <FontAwesomeIcon
            icon={faAngleLeft}
            style={{ color: '#666464', fontSize: '25px' }}
          />
        </div>
        <div className="nav-direction">
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ color: '#666464', fontSize: '25px' }}
          />
        </div>
      </div>
      <div className="user-profile">
        <div className="profile-icon">
          <img src={session?.image} alt="user" />
        </div>
        <div className="user-name">
          <p>{session?.name}</p>
        </div>
        <div className="drop-down">
          <FontAwesomeIcon icon={faCaretDown} style={{ color: 'white' }} />
        </div>
      </div>
    </Container>
  );
}
