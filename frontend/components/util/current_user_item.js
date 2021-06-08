import { useParams } from 'react-router-dom';

const CurrentUserItem = ({ children, currentUserId }) => {

  const { userId } = useParams();
  return (
    currentUserId == userId ? children : null
  )
}

export default CurrentUserItem;