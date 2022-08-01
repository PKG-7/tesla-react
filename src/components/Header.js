import styled from "styled-components"
import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {
  
  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="logo" />
      </a>
      <Menu>
        <a href="#">Model 3</a>
        <a href="#">Model S</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>


      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu />

      </RightMenu>


    </Container>
  )
}


const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
    }

    @media(max-width: 768px) {
      display: none;
    }

`

const RightMenu = styled.div`
    display: flex;
    align-items: center;

    a {
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
    }

`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`
