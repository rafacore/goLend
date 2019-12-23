import React from 'react';
import styled from 'styled-components';



// const Text = styled.span``

const SpanStyled = styled.div`
  width: 35px;
  height: 35px;
  margin: 5px 5px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  text-transform: none;
  font-weight: 700;
  border: 0 solid transparent;
  border-radius: 100%;
  background-color: #eee;
  border-color: red ;
  color: #000 };

`
const Badge = ({text}) => {
  return (
    <div >
<SpanStyled>{text}</SpanStyled>
  
    </div>
  );
}

export default Badge;
