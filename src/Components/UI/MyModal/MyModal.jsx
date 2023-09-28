import React from 'react';
import cssClasses from './MyModal.css'

const MyModal = ({children,visible,setVisible}) => {
    let modalClass = "myModal";
    if(visible){
        modalClass = "myModal active";
    }
    return (
        <div className={modalClass} onClick={() =>setVisible(false)}>
            <div className="myModalContent" onClick={(event) => event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;