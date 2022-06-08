import React from "react";
import styled from "styled-components";
import Colors from "../assets/colors";


const BtnForm: React.FC<{
    children?: React.ReactNode;
    type: "submit" | "reset" | "button";
    title: string;
    value?: string;
    onClick: () => void;
    btnType?: string;
    btnWidth?: "large" | "small";
    btnHeight?: "high" | "low";
    btnBorder?: "orange" | "black"
}> = ({
    type = "button",
    title,
    value,
    onClick,
    btnType,
    btnWidth = "small",
    btnHeight = "low",
    btnBorder = "orange",
    children
}) => {
        return (
            <>
                <Button
                    $btnWidth={btnWidth}
                    $btnHeight={btnHeight}
                    $btnBorder ={btnBorder}
                    type={type}
                    value={value}
                    onClick={(event) => onClick()}
                >

                    {title.length <= 0 ? null : (
                        <Span $btnColor={btnType}> {title} </Span>
                    )}
                    {children}

                </Button>
            </>
        )
    }


const Span = styled.span<{ $btnColor?: string }>`
    color: ${({ $btnColor }) => ($btnColor === "contact" ? "#ffffff" : $btnColor === "send" ? "#161616" : "unset")};
    font-family: 'Roboto';
    font-weight: bold;
`;
const Button = styled.button<{ $btnWidth?: "large" | "small", $btnHeight?: "high" | "low", $btnBorder?: "orange" | "black" }>`
    border: 3px solid;
    box-sizing: border-box;
    background-color: transparent;
    /* button width style */
    width: ${({ $btnWidth }) => ($btnWidth === "large" ? 195 : 180)}px;
    /* button high style */
    height: ${({ $btnHeight }) => ($btnHeight === "high" ? 55 : 45)}px;;
    /* button borderColor style */
    border-color: ${({$btnBorder}) => ($btnBorder === "orange" ? Colors.Orange : Colors.Black)};

    &:hover{
        background-color: rgba(205,193,82);
    }
    cursor: pointer;
`

export default BtnForm 