import React from "react";
import styled from "styled-components";
import Colors from "../assets/colors";
import { Button } from "../GlobalStyle";



const BtnForm: React.FC<{
    children?: React.ReactNode;
    type: "submit" | "reset" | "button";
    value?: string;
    onClick: () => void;
    btnSize: "large" | "small";
    btnBorder?: "orange" | "black";
    btnColor?: string;
}> = ({
    type = "button",
    value,
    onClick,
    btnSize,
    btnBorder = "orange",
    btnColor,
    children
}) => {
        return (
            <>
                <Button
                    $btnSize={btnSize}
                    $btnBorder={btnBorder}
                    type={type}
                    value={value}
                    $btnColor={btnColor}
                    onClick={(event) => onClick()}>
                    {children}
                </Button>
            </>
        )
    }


export default BtnForm 