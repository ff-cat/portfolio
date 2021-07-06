import s from './Contacts.module.css';
import style from "../common/styles/Container.module.css";

function Contacts() {
    return (
        <div className={s.contactsBlock}>
            <div className={`${style.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form action="" className={s.form}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
                <button>Send</button>
            </div>
        </div>
    );
}

export default Contacts;
