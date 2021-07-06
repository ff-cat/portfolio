import s from './Nav.module.css';
import style from "../common/styles/Container.module.css";

function Nav() {
    return (
        <div className={s.navBlock}>
            <a href="">Главная</a>
                <a href="">Скилы</a>
                <a href="">Проекты</a>
                <a href="">Контакты</a>
        </div>
    );
}

export default Nav;
