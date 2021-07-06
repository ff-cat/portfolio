import s from './Skills.module.css';
import style from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";


function Skills() {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum amet duis bibendum sagittis magna justo maecenas, rutrum risus odio massa metus urna: sodales.'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum amet duis bibendum sagittis magna justo maecenas, rutrum risus'}/>
                    <Skill title={'REACT'} description={'Lorem ipsum amet duis '}/>
                </div>
            </div>
        </div>
    )
}

export default Skills;
