import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {

    const increase = () => {
        props.dispatch({ type: "INCREASE" })
    }

    const decrease = () => {
        props.dispatch({ type: "DECREASE" })
    }

    return (
        <div>
            <h2>My Redux Counter</h2>
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
            <p>Counter: {props.count}</p>
            <p>Clicks: {props.click}</p>
            <p>Status: {props.status}</p>
        </div>
    )
}

const MapStateToProps = state => {
    return {
        count: state.count,
        click: state.click,
        status: state.status,
        date: state.date
    } // ok you can now use dispatch as props.dispatch
}

export default connect(MapStateToProps)(Counter)