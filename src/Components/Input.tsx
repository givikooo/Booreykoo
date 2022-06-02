import React from 'react'
import styled from 'styled-components';


const Input: React.FC<{
    type: string; 
    placeholder: string;
    value:string;
    onChange: (value: string) => void;

}> = ({
    type,
    placeholder,
    value,
    onChange
 }) => {
    return (
        <>
            <InputTag
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    )
}


const InputTag = styled.input`
    width: 100%;
    padding: 12px 12px;
    border: 2px solid #161616;
    background-color: transparent;
`

export default Input