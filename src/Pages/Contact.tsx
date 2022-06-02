import React from 'react'
import Input from '../Components/Input'
import { useState } from 'react';
import TextArea from '../Components/TextArea';
import styled from 'styled-components';
import BtnForm from '../Components/Button';
import BurgerMenu from '../Components/BurgerMenu';

import Burger from '../Components/Burger';

const Contact = () => {
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')
    const [mobile, setMobile] = useState('')
    const [mail, setMail] = useState('')
    const [question, setQuestion] = useState('')

    const [showHide, setshowHide] = useState<boolean>(false);

    return (

        <Body>
            <FormWrapper action="">
                <Div>
                    <Input
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(value) => setName(value)}
                    />
                </Div>
                <Div>
                    <Input
                        type='text'
                        placeholder='Company'
                        value={company}
                        onChange={(value) => setCompany(value)}
                    />
                </Div>
                <Div>
                    <Input
                        type='text'
                        placeholder='Mobile'
                        value={mobile}
                        onChange={(value) => setMobile(value)}
                    />
                </Div>
                <Div>
                    <Input
                        type='text'
                        placeholder='Email'
                        value={mail}
                        onChange={(value) => setMail(value)}
                    />
                </Div>
                <Div>
                    <TextArea
                        value={question}
                        onChange={(value) => setQuestion(value)}
                        placeholder='question'
                        rows={5}
                    />
                </Div>
                <Div>
                    <BtnForm
                        title='Send'
                        btnType="send"
                        width={true}
                        height={true}
                        borderColor={false}
                        onClick={() => alert('Button 1 is clicked !')}
                    />
                </Div>
            </FormWrapper>
            <RightSide>
                <Title>Just be <br /> Yourself!</Title>
                <div>
                    <ContactText>
                        Contact us:
                        <span> <TelAtag href="tel:+1 (533) 6454 45454">+1 (533) 6454 45454</TelAtag></span>
                        12/53 Towers Ave., 19726, California, USA
                        <br /> <span> <Mailatag href="mailto:info@booreykoo.com">info@booreykoo.com</Mailatag></span>
                    </ContactText>
                </div>
            </RightSide>
            {showHide === true ? (
                    <BurgerMenu />
                ) : null}
                <Button onClick={() => setshowHide(showHide === true ? false : true)}>
                    <Burger
                        divType='black'
                    />
                </Button>
        </Body>

    )
}


const Button = styled.button`
    background-color: transparent;
    border: 0px;
`

const Div = styled.div`
    margin-top: 20px;
`
const Body = styled.section`
    background-color: #CDC152;
    height: 100vh;
    display: flex;
    justify-content: space-around;
`
const FormWrapper = styled.form`
    width: 650px;
    margin-top: 300px;
`
const RightSide = styled.div`
    margin-top: 430px;
`

const Title = styled.h1`
    text-align: right;
    color: #161616;
    font-weight: bold;
    font-family: 'Roboto';
    font-size: 48px;
    line-height: 56px;
`
const ContactText = styled.p`
    color: #161616;
    font-family: 'Roboto';
    font-size: 14px;
    line-height: 16px;
    text-align: right;
`
const TelAtag = styled.a`
    text-decoration: unset;
    color: #161616;
`
const Mailatag = styled.a`
    text-decoration: unset;
    color: #161616;
    font-weight: bold;
`

export default Contact
