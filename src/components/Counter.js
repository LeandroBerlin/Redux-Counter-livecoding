import React from 'react'
import { connect } from 'react-redux'

function Counter() {
    return (
        <div>
            <h2>My Redux Counter</h2>
            <button>+</button>
            <button>-</button>
            <p>Counter: </p>
            <p>Clicks:</p>
            <p>Status:</p>
        </div>
    )
}

const MapStateToProps = state => {
    return {
        count: state.count,
        click: state.click
    }
}

export default connect(MapStateToProps)(Counter)