import React from "react";
import { useCurrentTarget } from "../../hooks/useCurrentTarget";
import BirthdaySelection from "./inputs/birthday_selection.jsx";
import GenderRadioGroup from "./inputs/gender_radio_group.jsx";

const SignupForm = () => {
  const [firstName, setFirstName] = useCurrentTarget("");
  const [lastName, setLastName] = useCurrentTarget("");
  const [email, setEmail] = useCurrentTarget("");
  const [password, setPassword] = useCurrentTarget("");
  const [birthdate, setBirthdate] = useCurrentTarget("");
  const [gender, setGender] = useCurrentTarget("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({
      first_name: firstName,
      last_name: lastName,
      email: email,
      password: password,
    });
  };

  return (
    <form onSubmit={onSubmit} className="signup-form">
      <button className="signup-form__exit-button"></button>
      <header className="signup-form__header">
        <h3 className="signup-form__title">Sign Up</h3>
        <p className="signup-form__message">It's quick and easy.</p>
      </header>
      <div className="signup-form__divider"></div>
      <div className="signup-form__fields">
        <input
          type="text"
          placeholder="First name"
          onChange={setFirstName}
          className="signup-form__input"
        ></input>
        <input
          type="text"
          placeholder="Last name"
          onChange={setLastName}
          className="signup-form__input"
        ></input>
        <input
          type="text"
          placeholder="Email"
          onChange={setEmail}
          className="signup-form__input"
        ></input>
        <input
          type="password"
          placeholder="New password"
          onChange={setPassword}
          className="signup-form__input"
        ></input>
        <BirthdaySelection className="signup-form__select-group"></BirthdaySelection>
        <GenderRadioGroup className="signup-form__radio-group"></GenderRadioGroup>
      </div>
    </form>
  );
};

export default SignupForm;
