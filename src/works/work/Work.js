import s from './Work.module.css';


function Work(props) {
    return (
        <div className={s.work}>
            <img src="#" alt="#" className={s.img}/>
            <h3>{props.title}</h3>
            <span>{props.description}</span>
        </div>
    )
}

export default Work;
