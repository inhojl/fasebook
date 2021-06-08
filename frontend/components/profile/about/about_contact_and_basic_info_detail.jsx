import React, { useState } from 'react';
import PlusCircleIcon from '../../icons/plus_circle';
import UserInputForm from './user_input_form';
import UserInputDisplay from './user_input_display';
import AboutGenderInput from './about_gender_input';
import AboutBirthdayInput from './about_birthday_input';
import { faUser, faBirthdayCake, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import GenderRadioGroup from '../../splash/forms/inputs/gender_radio_group';
import NavbarSettingsItem from '../../navbar/navbar_settings_item';
import date from 'date-and-time';
import moment from 'moment';

const GENDERS = {
  1: 'Male',
  2: 'Female',
  3: 'Custom'
}



const AboutContactAndBasicInfoDetail = ({
  user,
  profile,
  updateUser
}) => {


  const [showGender, setShowGender] = useState(false);
  const [showBirthdate, setShowBirthdate] = useState(false);
  const [showFirstName, setShowFirstName] = useState(false);
  const [showLastName, setShowLastName] = useState(false);

  const showInputForm = (name, setShow, placeholder) => (
    <div className='about-contact-and-basic-info-detail__input-form'>
      <UserInputForm
        user={user}
        onCancel={() => setShow(false)}
        name={name}
        placeholder={placeholder}
        updateUser={updateUser}
      />
    </div>
  )

  const showInputDisplay = (name, value, label, icon, setShow, showEdit, showDelete) => (
    <div className='about-contact-and-basic-info-detail__input-display'>
      <UserInputDisplay
        name={name}
        value={value || user[name]}
        label={label}
        icon={icon}
        updateUser={updateUser}
        setShow={setShow}
        user={user}
        showEdit={showEdit}
        showDelete={showDelete}
      />
    </div>
  )

  const showInput = (user, name, label, placeholder, icon, show, setShow, value, showEdit, showDelete) => {

    return user[name] && !show ? (
      showInputDisplay(name, value, label, icon, setShow, showEdit, showDelete)
    ) : showInputForm(name, setShow, placeholder)
  }


  return (
    <div className='about-contact-and-basic-info-detail'>
      <h1 className='about-contact-and-basic-info-detail__heading'>Contact Info</h1>
      {
        showInput(
          user,
          'email',
          'Email',
          'Email',
          faEnvelope
        )
      }
      <h1 className='about-contact-and-basic-info-detail__heading'>Basic Info</h1>
      {
        showInput(
          user,
          'firstName',
          'First name',
          'First Name',
          faUserAlt,
          showFirstName,
          setShowFirstName,
          null,
          true
        )
      }
      {
        showInput(
          user,
          'lastName',
          'Last name',
          'Last Name',
          faUserAlt,
          showLastName,
          setShowLastName,
          null,
          true
        )
      }
      {
        showGender ?
          <div className='about-contact-and-basic-info-detail__input-form'>
            <AboutGenderInput
              user={user}
              onCancel={() => setShowGender(false)}
              name='genderId'
              updateUser={updateUser}
            />
          </div>
          : showInputDisplay('genderId', GENDERS[user.genderId], 'Gender', faUser, setShowGender, true, false)
      }


      {
        showBirthdate ?
          <div className='about-contact-and-basic-info-detail__input-form'>
            <AboutBirthdayInput
              user={user}
              onCancel={() => setShowBirthdate(false)}
              name='birthdate'
              updateUser={updateUser}
            />
          </div>
          : showInputDisplay(
            'birthdate',
            moment(user.birthdate).utc().format('MMMM D, YYYY'),
            'Birthdate',
            faBirthdayCake,
            setShowBirthdate,
            true,
            false)
      }
    </div>
  )
}

export default AboutContactAndBasicInfoDetail;