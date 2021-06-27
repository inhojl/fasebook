import { useParams } from 'react-router-dom';

const CurrentUserItem = ({ children, currentUserId, otherUserId }) => {
  const { userId } = useParams();
  return (
    otherUserId ? 
    (currentUserId == otherUserId ? children : null) 
    : (currentUserId == userId ? children : null) 
  )
}

export default CurrentUserItem;