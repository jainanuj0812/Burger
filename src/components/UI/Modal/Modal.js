import React from 'react';
import classes from './Modal.css';

const modal = (props) => (
    <div
        className={classes.Modal}
        style={{
            transform: props.show ? 'translate'
        }}
        >
        {props.children}
    </div>
);

export default modal;