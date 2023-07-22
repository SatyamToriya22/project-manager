import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { createProject } from '../../store/actions/CreateProj';
import { connect } from 'react-redux';
import { getFirestore } from 'redux-firestore';
import { compose } from 'redux';
import { useHistory } from 'react-router';
import { Redirect } from 'react-router';

const CreateProject = (props) => {
  const [title, setTitle] = useState('');
  const [postedBy, setpostedBy] = useState('');
  const [description, setDescription] = useState('');
  const [dataSubmit, setDataSubmit] = useState(false);
  const [emptyForm, setEmptyForm] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();

  if (!props.state.firebase.auth.uid) {
    return <Redirect to='/signin' />;
  }
  const db = getFirestore();
  console.log('db-', db);

  const HandleSubmitBtn = (e) => {
    e.preventDefault();
    setSubmitting(true);
    props.createProj({ title, postedBy, description });
    setDataSubmit(true);
    setEmptyForm(false);
    setTimeout(() => {
      history.push('/');
    }, 1000);
  };

  console.log('createproj', props.state.createProject);
  console.log('props', props);
  return (
    <Form className='row'>
      <h3>Create Project</h3>
      {emptyForm && <h5>Please Fill The Detail</h5>}
      {submitting && (
        <div className='progress'>
          <div className='indeterminate'></div>
        </div>
      )}
      {dataSubmit && (
        <h5>Your Project Detail Successfully Added to Server..</h5>
      )}
      <form onSubmit={(e) => HandleSubmitBtn(e)} className=' s12'>
        <div className='row'>
          <div className='input-field  s6'>
            <input
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type='text'
              value={title}
              id='title'
              className='validate'
            />
            <label htmlFor='title'>Title</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field s6'>
            <input
              onChange={(e) => {
                setpostedBy(e.target.value);
              }}
              type='text'
              value={postedBy}
              id='postedBy'
              className='validate'
            />
            <label htmlFor='postedBy'>Posted By</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field  s6'>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              id='textarea1'
              class='materialize-textarea'
            ></textarea>
            <label htmlFor='textarea1'>Description</label>
          </div>
        </div>
        <div className='row'>
          <button className='btn waves-effect waves-light submit' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </Form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProj: (data) => {
      dispatch(createProject(data));
    },
  };
};
const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    state: state,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
const Form = styled.div`
  align-items: center;
  & h3 {
    text-align: center;
  }

  .row {
    width: 30rem;
  }
  .submit {
    margin-left: 150px;
  }
  & h5 {
    width: fit-content;
    margin: auto;
    font-size: 18px;
  }
  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
