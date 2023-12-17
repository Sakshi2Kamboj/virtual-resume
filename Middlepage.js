import React from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { getValue } from '@testing-library/user-event/dist/utils';
// import { intro } from "./Intro";
// import { questions } from "./Intro";

export const Middlepage = () => {

    const introduceValue = [{

        introduction: 'Hello I am Sakshi Software Developer in React Js, with management and development of complete websites (mainly B2C and B2B) using html, CSS. ',
        skill: 'I am Sakshi, a skilled and passionate professional in the field of web development, design, and office software. This comprehensive skill report showcases my expertise and experience in various areas, including Bootstrap, HTML, CSS, ReactJs, MS Word, MS Excel, MS PowerPoint, Photoshop, and video editing.',
        expereince: 'I am sakshi, Senior Executive with a strong background in the financial and business sectors. This work experience report highlights my significant contributions and achievements during my tenure at various esteemed organizations, including Magma Fincorp Limited, Vatican Pharma, and my current role at Shiksha Solutions as a web devloper.',
    }]
    const [isSpeaking, setIsSpeaking] = useState(false)

    const handleTextToSpeech = (content) => {
        const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(content);
        const voices = speechSynthesis.getVoices();

        const desiredVoice = voices.find(
            (voice) => voice.name === "Microsoft Zira Mobile - English (United States)"
        );
        utterance.voice = desiredVoice;
        const handleSpeechEnd = () => {
            setIsSpeaking(false)
        }
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        setIsSpeaking(true)

        window.speechSynthesis.speak(utterance);
        utterance.onend = handleSpeechEnd;
    };

    return (
        <div style={{ backgroundColor: "#e9e9e9" }}>
            <Row >
                <Col md={12} style={{ justifyContent: 'center' }}>
                    {(isSpeaking) ? (<img src="images/sakshi.gif" alt="Image" className="img-fluid circle-image " style={{ justifyContent: 'center' }} />) : (<img src="images/still.png" alt="Image" className="img-fluid circle-image " style={{ justifyContent: 'center' }} />)}
                </Col>
            </Row>
            <Row>
                <Col md={12}>
                    <div className='name-cls'>
                    </div>
                    <div className='name-cls'>
                        <h4>SAKSHI WEB DEVELOPER</h4>
                        <h5 style={{ color: "blue" }}> Click Below Button To Get Audio</h5>
                        <button class="btn btn-primary btn-lg" onClick={() => handleTextToSpeech(introduceValue[0].introduction)}>Introduction</button>
                        <button style={{ marginLeft: '10px' }} class="btn btn-primary btn-lg" onClick={() => handleTextToSpeech(introduceValue[0].skill)}>Skill</button>
                        <button style={{ marginLeft: '10px' }} class="btn btn-primary btn-lg" onClick={() => handleTextToSpeech(introduceValue[0].expereince)}>Work experience</button>
                    </div>
                </Col>
            </Row >
        </div >
    )
}
