import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup } from '../../../../redux/actions/session';
import { RESET_SIGNUP_ERRORS } from '../../../../redux/actions/session'

const mapStateToProps = (state) => ({
  errors: state.errors.signup
})

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup(user)),
  resetErrors: () => dispatch({ type: RESET_SIGNUP_ERRORS })
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm)