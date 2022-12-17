import React, { Suspense } from 'react';
import { useState } from 'react';
import classes from './Card.module.css';
const View = React.lazy(() => import("./View"))


const Card = (props) => {
    const [show, setShow] = useState(false)

    const showView = () => {
        setShow(true)
    }

    const hideView = () => {
        setShow(false)
    }

    return (
        <Suspense fallback={<p>Please wait...</p>}>
            {show && <View onClose={hideView} data={props.data} />}
            <div className={classes.container}>
                <img src={props.data.images.jpg.image_url} alt='img' onClick={showView} />
                <div className={classes.details}>
                    <h4>Title: {props.data.title}</h4>
                    <h4>Rating: {props.data.rating}</h4>
                </div>
            </div>
        </Suspense>
    )
}

export default Card;