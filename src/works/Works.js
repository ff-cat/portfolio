import s from './Works.module.css';
import style from '../common/styles/Container.module.css';
import Work from "./work/Work";


function Works() {
    return (
        <div className={s.worksBlock}>
            <div className={`${style.container} ${s.worksContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.works}>
                    <Work title={'Название проекта'} description={'Lorem ipsum amet duis bibendum sagittis magna justo maecenas, rutrum risus odio massa metus urna: sodales.'}/>
                    <Work title={'Название проекта'} description={'Lorem ipsum amet duis bibendum sagittis magna justo maecenas.'}/>
                </div>
            </div>
        </div>
    )
}

export default Works;
