import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useNavigate } from "react-router-dom";
import Button from '../components/Button'

export default function Header() {
    const navigate = useNavigate();

    const btnClick = () => {
        navigate('/tanya-dokter')
    }
    return (
        <>
            <Navbar className='navbar-header'>
                <Container>
                    <Navbar.Brand href="/">
                        <div className='fs-4 blue-primary fw-semibold'>
                            MoviesSehat

                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/artikel">Artikel</Nav.Link>
                        <Nav.Link href="/hospital">Info Rumah Sakit</Nav.Link>
                        <Button className="fw-normal ms-4" onClick={btnClick}>
                            Tanya Dokter
                        </Button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}