import React from 'react';
import ReactDOM from 'react-dom';
import profile1 from './images/pic-1.jpg';
import profile2 from './images/pic-2.jpg';
import profile3 from './images/pic-3.jpg';
import SingleComment from './SingleComment';// looks up the Single Comment JS file to create the div content
const App= () => {
    return(
        <div className='ui comments'>
           <SingleComment 
           name ='Rebecca' 
           date='Today at 5:00pm' 
           comment='Its Amazin' 
           picture={profile1}/>
           <SingleComment 
           name='John'
            date='Today at 2:00pm' 
            comment='Great'
            picture={profile2}/>
           <SingleComment 
           name='Shane'
           date='Today at 3:00pm' 
           comment='Wow'
           picture={profile3}/>
        </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)