import React, { useEffect, useState } from 'react'
import AboutCss from './About.module.css'
import mayur from '../Home/image.png';
import Loading from '../Loading/Loadingpage'
const About = () => {


  const imgsorce = mayur;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const img = new Image();
    img.src = imgsorce;
    img.onload = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
    img.onerror = (e) => {
      console.log("error", e.message);
    }
  }, []);
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div className={AboutCss.outer}>
      <div className={AboutCss.child1}>
        <h2>Hi, I'm <b className={AboutCss.fonts}>VARUN</b> </h2>
        <p>I'm a passionate Electronics and Communication Engineering student in the final semester of my B.E. at Cauvery Institute of Technology, Mandya, with a strong foundation in core electronics, embedded systems, and circuit design. My curiosity to understand how technology works has driven me to explore projects in battery pack design using MATLAB and digital system design using Verilog and UVM.

          With hands-on experience in microcontrollers (8051), communication protocols like UART, SPI, I2C, and CAN, and tools like KiCad for PCB design, I enjoy building solutions that bridge theory with practical application. I'm also skilled in C programming and have a growing interest in power electronics and system simulation.

          Known for my problem-solving mindset, collaborative spirit, and adaptability, I'm always eager to take on new challenges, contribute meaningfully to tech-driven projects, and continuously expand my technical horizon.</p>
        <h2 className={AboutCss.fonts}>Educational History</h2>
        <h3> Bachelor of Engineering (2021 - 2025)(CGPA : 8.6)</h3>
        <p> I am currently pursuing my Engineering degree in Electronis and Communication Engineering at
          Cauvery Institute of Technology, Mandya, graduated in 2025.
          I'm excel in collaboration and communication, skills that set me apart and
          enhance my ability to work effectively in team environments</p>
        <br />
        <h3> Pre University College (2019 - 2021)(Percentage : 88%)</h3>
        <p>I completed my Pre-University Course (PUC) at STG PU College, Mandya,
          from 2019 to 2021,with a focus on PCMB which helped to me understand science better and increased my interest in technology..</p>
        <br />
        <h3>SSLC (2019)(Percentage : 85%)</h3>
        <p>I completed my 10th from Nirmala English High school in pandavapura, where I built a strong foundation in science and mathematics.</p>
      </div>
      <div className={AboutCss.child2}>
        <img loading='lazy' src={mayur} alt="" />
      </div>
    </div>
  )
}

export default About
