import { Outlet } from 'react-router-dom';
import SkillCss from './SkillCss.module.css';
import Cards from './cards';
import zero from './photos/download.png';
import one from './photos/download(1).png';
import two from './photos/download(2).png';

const Skills = () => {
  const name = ["C", "Verilog", "Matlab"];
  const images = [zero, one, two];

  const cards = name.map((_, i) => <Cards key={i} name={name[i]} imgs={images[i]} />);

  return (
    <div className={SkillCss.outer}>
      <h1>My Skills</h1>
      <br /><br />
      <div className={SkillCss.outerblock}>
        {cards}
      </div>
      <Outlet />
    </div>
  );
}

export default Skills;
