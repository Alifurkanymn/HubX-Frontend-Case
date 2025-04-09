import React from 'react'

type OutlineButtonProps = {
    buttonText: string;
    onClick?: () => void;
}

const OutlineButton = ({ children, onClick }: CustomButtonProps) => {
    return (
        <button className="btn btn-outline" onClick={onClick}>
            {children}
        </button>
    )
}

export default OutlineButton