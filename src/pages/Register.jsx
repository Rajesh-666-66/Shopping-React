import styled from "styled-components";
import { mobile } from "../responsive";
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
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 30%;
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

const DisErr = styled.span`
  color: red;
  font-size: 12px;
`;

const Register = () => {
  let history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    history.push("/Home");
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
           <Input
              type="text"
              placeholder="First Name"
              {...register("name", { required: true })}
            /> 
            <DisErr> {errors.name && <p>Name is required</p>} </DisErr>
            <Input
              type="text"
              placeholder="Last Name"
              {...register("lastname", { required: true })}
            />
            <DisErr> {errors.lastname && <p>Lastname is required</p>} </DisErr>
            <Input
              type="text"
              placeholder="Username"
              {...register("username", { required: true })}
            />
            <DisErr> {errors.username && <p>Username is required</p>} </DisErr>
            <Input
              type="email"
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            <DisErr> {errors.email && <p>Email is required</p>} </DisErr>
            <Input
              type="password"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            <DisErr> {errors.password && <p>Password is required</p>} </DisErr>
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button type="submit">CREATE</Button>
          </Form>
          <NavLinkdiv>
            <NavLink to="/home"> i will do it later</NavLink>
          </NavLinkdiv>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;
