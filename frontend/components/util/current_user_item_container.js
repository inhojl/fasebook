import { connect } from 'react-redux';
import CurrentUserItem from './current_user_item';

const mapStateToProps = (state) => {
  return {
    currentUserId: state.session.id,
  }
}


export default connect(mapStateToProps)(CurrentUserItem);