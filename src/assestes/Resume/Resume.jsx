import React, { useEffect, useRef } from 'react'
import ResumeCss from './ResumeCss.module.css'
import frontend from './oneone.png'
import frontendone from './onetwo.png'
import Errors from '../Error/Error'
  
const Resume = () => {

  const shows = useRef();
  const back = useRef();
  const arr = [frontend, frontendone];

  function hide() {
    shows.current.style.visibility = "hidden";
    back.current.style.visibility = "visible";
  }

  function show(e) {
    shows.current.style.visibility = "visible";
    back.current.style.visibility = "hidden";
    shows.current.style.backgroundImage = `url(${arr[e]})`;
  }

  useEffect(() => {
    shows.current.style.visibility = "hidden";
  }, []);
  return (
    <>
      <h1>MY <span className={ResumeCss.fonts}>Resume</span> </h1>
      <div ref={back} className={ResumeCss.outer}>

        <div className={ResumeCss.resume}>
          <div id={ResumeCss.frontend} className={ResumeCss.frontend}></div>
          <h1> </h1>
          <button onClick={() => show(0)}>Read</button>
          <button className={ResumeCss.download}>Download</button>
        </div>

        <div className={ResumeCss.resume}>
          <div id={ResumeCss.backend} className={ResumeCss.frontend}></div>
          <h1> </h1>
          <button onClick={() => show(1)}>Read</button>
          <button className={ResumeCss.download}>Download</button>
        </div>

        <div ref={shows} className={ResumeCss.Reading}>
          <div className={ResumeCss.image}></div>
          <button onClick={hide} className={ResumeCss.showButton}>Cancel</button>
        </div>
      </div>
    </>
  )


}

export default Resume
