import React from 'react';
import styled from 'styled-components';
import userPic from '../../assets/ser.jpg';




const AvatarStyled = styled.div`
  border-radius: 50%;
  background-color: #f7f7f7;
  background-image: url(${props => props.src || userPic});
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  border: 10px solid #fff;
  width: 130px;
  height: 130px;
  margin: 0 auto;
  margin-bottom:25px;
`
const Avatar = ({image}) => {
  return ( <AvatarStyled  src={image}/> );
}

export default Avatar;
