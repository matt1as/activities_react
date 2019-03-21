import React from 'react'
import { connect } from 'react-redux'
import { getType, activateChannel } from '../actions/activitiesAction'
let Type = ({ channelName, channelString, onClick, active }) => (
<div onClick={onClick} className=" col-lg-2 col-md-4 col-sm-6 ">
  <div className="channel-button"
 style={{ backgroundColor: active === channelString ? 'orange' :  ''
 }}>
 <p>{channelName}</p>
 </div>
</div>
)
const mapStateToProps = (state) => ({active: state.channel})
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
     dispatch(getType(ownProps.channelString));
}
})

Type = connect(mapStateToProps,mapDispatchToProps)(Type)
export default Type;