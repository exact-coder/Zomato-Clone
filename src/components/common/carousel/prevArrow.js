import React from 'react';

export default function PrevArraw({className, style, onClick}) {
    return (
            <div
        className={className}
        style={{
            ...style,
            background: "white",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "4px",
        }}
        onClick={onClick}
        ></div>
    )
}