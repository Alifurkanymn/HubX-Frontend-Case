import React from 'react'

type OutlineButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

const OutlineButton = ({ children, onClick }: OutlineButtonProps) => {
    return (
        <button className="btn btn-outline" onClick={onClick}>
            {children}
        </button>
    )
}

export default OutlineButton