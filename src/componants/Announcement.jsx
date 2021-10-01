import styled  from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

 const Announcement = () => {
    return (
        <Container >
            <marquee scrollamount="5" loop="infinite">Super deal! free shipping on orders over $50</marquee>
        </Container>
    )
}

export default Announcement