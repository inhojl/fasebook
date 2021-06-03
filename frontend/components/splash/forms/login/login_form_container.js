import { connect } from 'react-redux';
import LoginForm from './login_form';
import { login } from '../../../../redux/actions/session';

const mapStateToProps = (state) => ({
  errors: state.errors.session
})

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)