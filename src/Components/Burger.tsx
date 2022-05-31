import React, { useState } from 'react'
import styled from 'styled-components'



const Burger = () => {
    const [open, setOpen] = useState (false)

    return (
        <StyledBurger open={open} onClick = { () => setOpen(!open)} >
            <div/>
            <div/>
            <div/>
        </StyledBurger>
    )
}

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: ${({open}) => open ? '#f1f1f1' : '#161616'};
        border-radius: 10px;
    }
`

export default Burger