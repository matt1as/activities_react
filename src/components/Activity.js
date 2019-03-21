import React from 'react';
const Activity = ({ activity }) => (
 <article >
    <div className="article-wrapper">
       <h3 className="text-center">{activity.subject}</h3>
       
       <p className="text-center">{activity.description}</p>
    </div>
 </article>
);
export default Activity ;