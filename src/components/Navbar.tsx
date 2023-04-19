import React from 'react'
import { Button, Container, Nav, Navbar as NavbarBs } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
const Navbar = () => {
    return (
        <NavbarBs sticky='top' className='text-white shadow-sm mb-3'>
            <Container className='text-black'>
                <Nav className='me-auto'>
                    <Nav.Link to={'/'} as={NavLink}>Home</Nav.Link>
                    <Nav.Link to={'/store'} as={NavLink}>Store</Nav.Link>
                    <Nav.Link to={'/about'} as={NavLink}>About</Nav.Link>
                </Nav>
                <Button
                    style={{ width: '3rem', height: '3rem', position: 'relative' }}
                    variant={'outline-primary'}
                    className='rounded-circle p-0'>
                    <FaShoppingCart className="d-inline-block" />
                    <div className="rounded-circle bg-danger text-white d-flex justify-content-center align-items-center"
                        style={{
                            width: '1.5rem',
                            height: '1.5rem',
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            transform: 'translate(25%,25%)'
                        }}
                    >3</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}

export default Navbar