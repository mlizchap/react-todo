import React, { Component } from 'react';

export default () => {
    return (
        <div data-test="component-read-mode" style={{ color: props.completed ? 'red': 'blue'}}>
            {props.name} 
        </div>
    )
}