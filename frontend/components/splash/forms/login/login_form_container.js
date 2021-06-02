import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../../../redux/actions/session';

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginForm)