import {Nav, Navbar} from 'react-bootstrap'
import Cartwidget from './CartWidget'
const NavBar = () => {
    return(
        <Navbar bg="colorPrincipal" variant="dark">
            <Navbar.Brand>
            <div className="logo">
                <img src="logo.png" alt="" />
                    <a href= "index.html" >
                       AHIMSA
                    </a>
                </div>           

            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#">Inicio</Nav.Link>
                <Nav.Link href="#">Conocenos</Nav.Link>
                <Nav.Link href="#">Productos</Nav.Link>
                <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
            <Cartwidget/>

        </Navbar>
       
    )
}
export default NavBar