import React from 'react';
import profile1 from './images/pic-1.jpg'

const SingleComment = (props) =>{ // passes the properties of Single Comment to Index.js (name,date,comment,picture)
    return(
        <div className='comment'>
        <a href="/" classNAame="avatar">
        <img src={props.picture}alt="profile picture" />
        </a>
        <div className='content'>
            <a href="/" className='author'>
               {props.name}
            </a>
            <div className='metadata'>
                <span className='date'>
                   {props.date}
                </span>
            </div>
            <div className='text'>
                {props.comment}
            </div>
        </div>
    </div>
    )
}

export default SingleComment;