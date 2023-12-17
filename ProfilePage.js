import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Badge } from 'react-bootstrap';
import { Middlepage } from './Middlepage';
import { Skillpage } from './Skillpage';
import { Contact } from './Contact';
import { Workexp } from './Workexp';
import { Education } from './Education';

export const ProfilePage = () => {
    return (
        <div style={{ backgroundColor: "#e9e9e9", }}>
            <Row>
                <Col md={4} style={{ paddingLeft: '5%' }} >
                    <div className='col-box'>
                        <Contact />
                    </div>
                    <div className='div-box'>
                        <p >PROFILE</p>
                    </div>
                    <p>Software Developer in React Js, with management and
                        development of complete websites (mainly B2C and B2B)
                        using html, CSS . Quick to grasp new concepts and ideas and
                        develop innovative and creative solutions to problems.
                    </p>

                    <>
                        <Workexp />
                    </>
                    <>
                        <Education />
                    </>

                </Col>
                <>
                    <Col md={4} >
                        <Middlepage />
                    </Col>
                </>
                <>
                    <Col md={4} className='col-box' style={{ paddingRight: '5%' }} >
                        <Skillpage />
                    </Col>
                </>
            </Row>
        </div >

    )
}

