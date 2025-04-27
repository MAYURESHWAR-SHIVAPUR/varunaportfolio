import { Outlet } from 'react-router-dom'
import SkillCss from './SkillCss.module.css'
import Cards from './cards'
import { useEffect, useState } from 'react';
import Loading from '../Loading/Loadingpage'
import zero from './photos/download.png'
import one from './photos/download(1).png'
import two from './photos/download(2).png'

const Skills = () => {

  const [loading, setLoading] = useState(true);

  const imgsource = [zero,one,two];

  useEffect(() => {
    let loadedImg = 0;
    imgsource.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedImg++;
        if (loadedImg == imgsource.length) {
          setTimeout(() => {
            setLoading(false);
          }, 0);
        }
      }
    })
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  }

  const name = ["C","Verilog","Matlab"];
  const imgs = [zero,one,two];
  const cards = name.map((_, i) => <Cards name={name[i]} imgs={imgs[i]} />);
  return (
    <div className={SkillCss.outer}>
      <h1>My Skills</h1>
      <br /><br />
      <div className={SkillCss.outerblock}>
        {cards}
      </div>
      <Outlet />
    </div>
  )
}

export default Skills
