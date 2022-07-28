import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styled from "styled-components"
const Layout = ({children}) => {

    return (
        <Container>
            <Header/>
                { children }
            <Footer />
        </Container>
    )
}

const Container = styled.div`
position: relative;

`;

export default Layout;