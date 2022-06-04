import React from "react";
import styled from "styled-components";


const BtnForm: React.FC<{
    title: string;
    value?: string;
    onClick: () => void;
    width: boolean;
    height: boolean;
    borderColor: boolean
    btnType?: string;
}> = ({
    title,
    value,
    onClick,
    width = false,
    height = false,
    borderColor = false,
    btnType
}) => {
        return (
            <>
                <Button
                    type="submit"
                    value={value}
                    onClick={(event) => onClick()}
                    style={{
                        width: width === true ? 180 : 195,
                        height: height === true ? 45 : 55,
                        borderColor: borderColor === true ? "#CDC152" : "#161616",
                    }}
                >
            
                    <Span $btnColor={btnType}> {title} </Span>

                </Button>
            </>
        )
    }


const Span = styled.span<{ $btnColor?: string }>`
    color: ${({$btnColor}) => ($btnColor === "contact" ? "#ffffff" : $btnColor === "send" ? "#161616" : "unset")};
    font-family: 'Roboto';
    font-weight: bold;
`;
const Button = styled.button`
    border: 3px solid;
    box-sizing: border-box;
    background-color: transparent;
    &:hover{
        background-color: rgba(205,193,82);
    }
    cursor: pointer;
`

export default BtnForm 