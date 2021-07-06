import s from './Main.module.css';
import style from '../common/styles/Container.module.css';

function Main() {
    return (
        <div className={s.mainBlock}>
            <div className={style.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Jeffrey Aaron</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={s.photo}>

                </div>
            </div>
        </div>
    );
}

export default Main;
