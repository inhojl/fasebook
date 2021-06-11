import React from 'react';
import CommentItem from './comment_item';


const SubcommentList = ({
  comments
}) => {


  return (
    <ul className='subcomment-list'>
      {
        comments.map((comment) => {
          <CommentItem 
            comment={comment}
          />
        })
      }
    </ul>
  );
}

export default SubcommentList;
