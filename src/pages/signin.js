import React from 'react';
import styled from 'styled-components/macro';
import logo from '../img/logo.svg';
import google from '../img/google.svg';

export default function SignIn() {
    return(
        <Container>
            <Logo className="logo">
                <img src={logo} alt="" />
            </Logo>
            <Main>
                <h1>Login</h1>
                <h3>See your growth and get consulting support!</h3>

                <Google>
                    <img src={google} alt="" />
                    <h2>Sign in with google</h2>
                </Google>

                <Or>
                    <div className="line"></div>
                    <h3>or Sign in with Email</h3>
                </Or>
                <Input>
                    <Item>
                        <label htmlFor="Email">Email*</label>
                        <input type="email" name="email" placeholder = "mail@website.com" />
                    </Item>
                    <Item>
                        <label htmlFor="Password">Password*</label>
                        <input type="password" name="password" placeholder = "Min. 8 characters" />
                    </Item>
                    
                </Input>
                <Section>
                    <Check>
                        <input type="checkbox" />
                        <h5>Remember me</h5>
                    </Check>
                    <h3>Forgot password?</h3>
                </Section>
                <Login>
                    <h4>Login</h4>
                </Login>
                <Last>
                    <h2>Not registered yet? <span>Create an account.</span></h2>
                </Last>
            </Main>
        </Container>
    )
}

const Container = styled.div`
    width: 30%;
    height: 100vh;
    margin: auto;
    min-width:450px;
    
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

const Logo = styled.div`
    width: 100%;
    
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
`

const Main = styled.div`
    font-family: sans-serif;
    width: 100%;

    h3{
        color: #999999;
    }
`
const Google = styled.div`
    border: 2px solid #bebebe;
    width:100%;
    border-radius: 25px;
    padding: .5rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor:pointer;
    h2{
        font-size: 1rem;
        margin:0;
        margin-left: 1.5rem;
        
    }

`

const Or = styled.div`

    margin-top: 2rem;
    position: relative;

    .line{
        width: 100%;
        height: 2px;
        background: #bebebe;
        position: absolute;
        top: .4rem;
    }

    h3{
        margin: 0;
        font-size: .8rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%);
        padding:0  1rem;
        background: #fff;
    }
`

const Input = styled.div`
    margin-top: 4rem;
`

const Item = styled.div`
    margin-top: 1.2rem;

    label{
        font-size: 1rem;
        font-weight: bold;
    }

     input{
        border: 2px solid #bebebe;
        border-radius: 25px;
        padding: 1rem 0rem;
        padding-left: 1rem;
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 97%;
        margin-top: .4rem;

        ::-webkit-input-placeholder {
            color: #5f5f5f;
            font-size: 1rem;
            }
            ::-moz-placeholder {
                color: #5f5f5f;
            font-size: 1rem;
            }
            :-ms-input-placeholder {
                color: #5f5f5f;
            font-size: 1rem;
            }
            ::placeholder {
                color: #5f5f5f;
            font-size: 1rem;
            }

            &:focus{
                outline:none;
            }
    }
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
    width: 100%;

    h3{
        font-weight: bold;
        margin: 0;
        font-size: 1rem;
        font-weight: bold;
        color: #4721e1;
    }

`

const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h5{
        margin: 0;
        margin-left: 1.5rem;
        font-size: 1rem;
        font-weight: bold;
    }

    input{
        accent-color: #4721e1;
       cursor:pointer;
        transform: scale(1.5);
        -ms-transform: scale(1.5);
        -webkit-transform: scale(1.5);
    }
`

const Login = styled.div`
        background: #4721e1;
        border-radius: 25px;
        padding: 1rem 0rem;
        
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;
        cursor: pointer;

        h4{
            color: #fff;
            font-weight: bold;
            margin:0
        }
`
const Last = styled.div`
    width: 100%;
    margin-top:2rem;

    h2{
        font-size: 1rem;
        margin: 0;
        font-weight: bold;

        span{
            font-size: 1rem;
            color: #4721e1;
            cursor: pointer;
        }
    }
`