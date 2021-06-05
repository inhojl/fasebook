import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../../../redux/actions/user';
import { RESET_SESSION_ERRORS } from '../../../../redux/actions/user';

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)),
  resetErrors: () => dispatch({ type: RESET_SESSION_ERRORS })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)