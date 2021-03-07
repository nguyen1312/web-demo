import React from "react";
import CountUp from 'react-countup';
const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const containerStyles = {
        height: 30,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 30,
    }

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        transition: 'width 1s ease-in-out',
        borderRadius: 'inherit',
        textAlign: 'center',
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
    }

    return (
        <>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>
                        <CountUp start={0.0000} end={completed} decimals={4}/>
                        <span> %</span>
                    </span>
                </div>
            </div>
        </>
    );
};

export default ProgressBar;
