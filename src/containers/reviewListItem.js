import React from 'react';
import ReviewCard from './../components/cards/reviewCard';

const ReviewListItem = ({item}) => {
  return (
    <ReviewCard reviewerName={item.reviewerName} reviewContent={item.reviewContent}
      replyContent={item.replyContent} replyDate={item.replyDate} likeCount={item.likeCount}/>
  );
};

export default ReviewListItem;
