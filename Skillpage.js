import React from 'react'
import { Row, Col, Badge } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Skillpage = () => {
    return (
        <div>
            <div>
                <div className='div-box'>
                    <p >SKILLS</p>
                </div>
                <div style={{ marginBottom: '5%', }}>
                    <Badge  >React Js</Badge>
                    <Badge>HTML  </Badge>
                    <Badge>Bootstrap</Badge>
                    <Badge>CSS</Badge>
                    <Badge>Ms Word</Badge>
                    <Badge>video editor</Badge>
                    <Badge>Ms Excel</Badge>
                    <Badge>Ms word</Badge>
                    <Badge>Photoshop</Badge>
                </div>
            </div>
            <>
                <div className='div-box'>
                    <p >PROJECTS</p>
                </div>
                <p><b>Shiksha solutions (11/2022 - Present)</b></p>
                <p>
                    <ul className="horizontal-list" >
                        <b>Dashboard ( User, Admin)</b>
                        <li><p >Responsibilities:- Developed complete dashboard in React to showcase and manage the data of students ( pending fees, results, attendance, form details, online payment )</p></li>
                        <li>Tech : React JS, HTML,CSS, Bootstrap, API Handling, Data Manipulation </li>
                        {/* <li>Live URL:- http://jaimahavir.com/</li> */}
                    </ul>
                    <ul className="horizontal-list" >
                        <b>Jai Mahavir</b>
                        <li><p >Responsibilities:- Developed Website in React JS from Scratch
                            with team of 2 Developers, Major focus on Rice products
                            portfolio showcase</p></li>
                        <li>Tech Stack:- React JS, HTML, CSS</li>
                        {/* <li>Live URL:- http://jaimahavir.com/</li> */}
                    </ul>
                    <ul>
                        <b>Big Star Foods</b>
                        <li>Responsibilities:- Developed website in React JS, Major focus on
                            Home Dashboard and PLP (Product List Page), PDP (Product
                            Description Page)</li>
                        <li>Tech Stack:- React JS, HTML, CSS</li>
                        {/* <li>Live URL:- http:// www.bigstarfoods.com/</li> */}
                    </ul>

                    <ul>
                        <b>Turan Kennel</b>
                        <li  >Responsibilities:- Developed Website in React JS from Scratch
                            with team of 2 Developers, This was B2C Domain Website to sale
                            and purchase of various kind of Dogs.</li>
                        <li>Tech Stack:- React JS, HTML, CSS, Manual Testing</li>
                        {/* <li>Live URL:- http:// turankennel.com/</li> */}
                    </ul>

                    <ul>
                        <b>Personal Websites</b>
                        <li>
                            Youtube clone:- Developed Home Dashboard with categories and
                            subcategories created in React JS
                        </li>
                        <li>Meesho clone:- Same like Youtube Clone, developed Meesho
                            clone to get exposure in e-commerce domain.</li>
                    </ul>
                </p>
            </>


        </div>
    )
}
