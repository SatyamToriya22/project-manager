import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { useState } from 'react';
import { signUp } from '../../store/actions/authAction';

const SignUp = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (props.auth.uid) {
    return <Redirect to='/' />;
  }

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    props.signUp({ firstName, lastName, email, password });
  };

  return (
    <Form className='row'>
      <h3>Sign Up</h3>
      <form onSubmit={(e) => handleSubmitBtn(e)} className='col s12'>
        <div className='row'>
          <div className='input-field'>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type='text'
              id='fName'
              className='validate'
            />
            <label htmlFor='fName'>First Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type='text'
              id='lName'
              className='validate'
            />
            <label htmlFor='lName'>Last Name</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type='email'
              id='email'
              className='validate'
            />
            <label htmlFor='email'>Email</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type='password'
              id='password'
              className='validate '
            />
            <label htmlFor='password'>Password</label>
          </div>
        </div>
        <div className='row'>
          <button
            className='btn waves-effect waves-light submit'
            type='submit'
            name='action'
          >
            Submit
          </button>
        </div>
        <div className='row'>
          {/* {props.state.auth.err && props.state.auth.err!="Cannot read property '0' of undefined" && <h5>{props.state.auth.err}</h5>} */}
        </div>
      </form>
    </Form>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (credential) => dispatch(signUp(credential)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

const Form = styled.div`
  align-items: center;
  & h3 {
    text-align: center;
  }

  .row {
    width: 30rem;
  }
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .submit {
    margin-left: 150px;
  }
  .input-field {
  }
`;
