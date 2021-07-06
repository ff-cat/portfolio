import s from './Header.module.css';
import Nav from "../nav/Nav";
import style from "../common/styles/Container.module.css";

function Header() {
    return (
        <div className={s.header}>
            <div className={`${style.container} ${s.headerContainer}`}>
                <Nav/>
            </div>
        </div>
    );
}

export default Header;
