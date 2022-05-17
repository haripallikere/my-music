import React from 'react';
import styled from 'styled-components';
import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
} from '@heroicons/react/outline';
import { useSession } from 'next-auth/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  .nav-tools {
    height: 50%;
  }
  ul {
    list-style: none;
  }
  .img {
    width: 200px;
    height: 100px;
  }
  img {
    object-fit: contain;
    max-width: 100%;
    height: auto;
    background-color: white;
  }
  a {
    color: white;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 20px;
    padding-inline: 16px;
  }
  li {
    display: flex;
    gap: 20px;
    align-items: center;
    margin-top: 10px;
  }
  li > :hover {
    cursor: pointer;
    font-weight: bolder;
    color: whitesmoke;
  }
  .icons {
    width: 35px;
    height: 35px;
    color: #d7d4d4;
  }
`;
function Navbar() {
  return (
    <Container className="nav-root">
      <div className="nav-tools">
        <div className="img">
          <a href="#">
            <img
              src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
              alt="logo"
            />
          </a>
        </div>
        <div>
          <a href=""></a>
          <ul className="links">
            <li>
              <HomeIcon className="icons" />
              <a href="">Home</a>
            </li>
            <li>
              <SearchIcon className="icons" />
              <a href="">Search</a>
            </li>
            <li>
              <LibraryIcon className="icons" />
              <a href="">Your Library</a>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <PlusCircleIcon className="icons" />
              <a>Create Playlist</a>
            </li>
            <li>
              <HeartIcon className="icons" />
              <a>Liked Songs</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default Navbar;
