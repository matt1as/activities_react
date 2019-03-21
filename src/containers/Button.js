import React from 'react'
import { connect } from 'react-redux'
import { fetchActivities } from '../actions/activitiesAction'
let Button = ({ getPosts, type }) => (
<button
  onClick={() => { getPosts(type) }}
  className='btn btn-primary btn-lg btn-block' >
  Get activities
</button>
);
const mapStateToProps = (state) => ({ type: state.type })
const mapDispatchToProps = { getPosts: fetchActivities }
Button = connect(mapStateToProps,mapDispatchToProps)(Button)
export default Button;