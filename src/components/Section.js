import styled from "styled-components"

export default function Section() {
  return (
    <Wrap>
        <ItemText>
            <h1>Model 3</h1>
            <p>Order Online for Touchless Delivery</p>
        </ItemText>

        <Buttons>
        <ButtonGroup>
            <LeftButton>
                Custom order
            </LeftButton>
            <RightButton>
                Existing inventory
            </RightButton>
        </ButtonGroup>
        
        <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
    </Wrap>
  )
}

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('/images/model-3.jpg');
    display: flex;
    flex-direction: column;
    justify-content: space-between; // vertical alignment
    align-items: center; //horizontal

`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;

`
const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`

`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
`

const Buttons = styled.div`
`