import classes from './View.module.css';
import Modal from '../UI/Modal';

const View = (props) => {

    return (

        <Modal onClose={props.onClose}>
            <div className={classes.container}>
                <div className={classes.image}>
                    <img src={props.data.images.jpg.image_url} alt='img' />
                </div>
                <div className={classes.details}>
                    <h4><b>Title:</b> {props.data.title}</h4>
                    <h4><b>Rating:</b> {props.data.rating}</h4>
                    <h4><b>Year:</b> {props.data.year}</h4>
                    <h4><b>Aired:</b> {props.data.aired.string}</h4>
                    <h4><b>synopsis:</b> {props.data.synopsis}</h4>
                </div>
            </div>
        </Modal>
    )
}

export default View;