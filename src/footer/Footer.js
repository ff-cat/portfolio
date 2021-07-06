import s from './Footer.module.css';
import style from "../common/styles/Container.module.css";

function Footer() {
    return (
        <div className={s.footerBlock}>
            <div className={`${style.container} ${s.footerContainer}`}>
               <h2>ИВАН ИВАНОВ</h2>
                <div>
                    ##########
                </div>
                <span>2019 Все права защищены</span>
            </div>
        </div>
    );
}

export default Footer;
