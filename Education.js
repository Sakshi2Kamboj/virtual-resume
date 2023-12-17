import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';
export const Education = () => {
    return (
        <div>
            <div className='div-box'>
                <p >EDUCATION</p>
            </div>
            <div >
                <Row>
                    <Col md={1}><b>M.com(Honors)</b>  </Col>
                    <p>D.A.V PG COLLEGE KARNAL</p>
                </Row>

                <Row>
                    <Col md={1}><b>B.com(Honors)</b>  </Col>
                    <p>Sahid Udham Singh Clg Indri</p>
                </Row>
            </div>

        </div>
    )
}
