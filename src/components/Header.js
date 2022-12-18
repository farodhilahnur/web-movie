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
            <Navbar style={{ backgroundColor: 'rgba(3,37,65,1)', position: 'fixed', width: '100%' }}>
                <Container style={{ paddingLeft: '20px' }}>
                    <Navbar.Brand href="/">
                        <div className='text-white fs-4 blue-primary fw-semibold'>
                            MoviesSehat

                        </div>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="/movies"><span className='text-white font-medium'>Movies</span></Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}