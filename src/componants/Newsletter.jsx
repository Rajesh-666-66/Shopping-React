import { Send } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 50vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;
const SuccessMsg = styled.button`
  color: Green;
  border: none;
`;
const ErrorMsg = styled.button`
  color: black;
  border: none;
`;

class Newsletter extends React.Component  {

  constructor(props){
    super(props);
    
    this.state = {
      username : ''
    }
    
    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    updateInput(event){
    this.setState({username : event.target.value})
    }

  state = {
    showMessage: false,
    showError: false
  }
  handleSubmit = () => {
    var email= this.state.username;
    if(email != ""){
      this.setState({showMessage: true});
    }else{
      this.setState({showError: true});
    }
  };
  
  render(){
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" className="email" onChange={this.updateInput} />
        <Button onClick={this.handleSubmit}>
          <Send />
        </Button>
      </InputContainer>
      {this.state.showMessage && <SuccessMsg className="m-2">You have successfully subscribed</SuccessMsg>}
      {this.state.showError && <ErrorMsg className="m-2">Please enter Email</ErrorMsg>}
    </Container>
  );
};
}

export default Newsletter;