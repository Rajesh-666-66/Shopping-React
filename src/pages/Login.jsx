import styled from "styled-components";
import {mobile} from "../responsive";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
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
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const NavLinkdiv = styled.div`
font-size: 2vh;
margin: 2px;
color: black;
`;
const DisErr = styled.div`
color: red;
font-size: 12px;
`;

const Login = () => {

  let history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
const onSubmit = (data) => {
  console.log(data)
  history.push("/Home");
}
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Input type="text" placeholder="username" {...register('username', { required: true })} />
         <DisErr> {errors.username && <p>Username is required</p>} </DisErr>
          <Input type="password" placeholder="password" {...register('password', { required: true })} />
          <DisErr> {errors.password && <p>Password is required</p>} </DisErr>
          <Button type="submit">LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
           <NavLink to="/home"><NavLinkdiv>I WILL DO IT LATER </NavLinkdiv></NavLink>
      
        </Form>
      </Wrapper>
    </Container> 
    
  );
};

export default Login;