import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const NavLinkdiv = styled.div`
font-size: 2vh;
margin: 2px;
`;

const Register = () => {

  let history = useHistory();
   function RegisterUser(){
    history.push("/Home");
   }
  return (
    <div>
    <form>
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form >
          <Input type="text"  placeholder="name" required  />
          <Input placeholder="last name" required  />
          <Input placeholder="username" required  />
          <Input type="email" placeholder="email" required  />
          <Input placeholder="password" required  />
          <Input placeholder="confirm password" required  />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button  onClick={ RegisterUser }>CREATE</Button>
        </Form>
        <NavLinkdiv>
       <NavLink to="/home"> i will do it later</NavLink>
       </NavLinkdiv>
      </Wrapper>
     
    </Container>
   
    </form>
    </div>
  );
};

export default Register;