import React from 'react';

interface ButtonProps {

    type?: 'button' | 'submit' | 'reset';
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    obj:{
        color:any,
        font:any,
        class:any
    };
}
const AddButton = ({ type = 'button', label, onClick ,obj }: ButtonProps) => {
    
    return (
        <>
       
            <button className={obj.class} style={{color:obj.color}}
                type={type}
                onClick={onClick}>{label}</button>
        </>
    );
};

export default AddButton;
