import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
width: 100%;
display: flex;
background-color: white;
padding-left: 18px;
padding-right: 18px;
`;
const OfferImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;

`;

export const Offers = () => {
    return (
        
            <Container>
                <OfferImage className="p-0" src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2021/9/30/497738c4-3fe2-4c4a-9d6a-17d93a931d531633010449983-Kotak_Desktop.jpg">
                </OfferImage> 
            </Container>
       
    )
}
export default Offers