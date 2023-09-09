import { Outlet } from "react-router-dom"
import NavigationBar from "../../pages/Shared/Header/NavigationBar"
import { Container } from "react-bootstrap"

const LoginLayout = () => {
    return (
        <Container>
            <NavigationBar></NavigationBar>
            {<Outlet></Outlet>}
        </Container>
    )
}

export default LoginLayout