import ReactDOM from 'react-dom'
import React from 'react'
import { connect } from 'react-redux'
import Activity from '../components/Activity';

let Activities = ({ channels, loading, type }) => {
    let activities = '';
    if (channels) {
        activities = channels.map((article, index) => (
            <div key={`${index}`} className='row'>
                <Activity activity={channels[index]} />
            </div>
        ))
    }
    if (loading) {
        activities = <h3 className="loading-indicator">Loading ...</h3>
    }
    return (
        <div>
            {activities}
        </div>
    )
}

const mapStateToProps = (state) => ({
    channels: state.json,
    loading: state.loading,
    type: state.type
})
Activities = connect(mapStateToProps, null)(Activities)
export default Activities;