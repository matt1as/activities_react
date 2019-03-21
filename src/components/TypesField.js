import React from 'react'
import Type from '../containers/Type'
const ChannelsField = () => (
   <div className="row" >
     <Type channelName="E-post" channelString="email" />
     <Type channelName="Anteckning" channelString="note" />
    
   </div> 
 );
export default ChannelsField;