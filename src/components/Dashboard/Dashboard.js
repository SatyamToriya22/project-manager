import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectList from '../Project/ProjectList';
import Notifications from './Notifications';
import { getFirestore } from 'redux-firestore';
import { getFirebase, firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const Dashboard = (props) => {
  // console.log(getFirestore())
  // console.log(getFirebase())
  if (!props.state.firebase.auth.uid) {
    return <Redirect to='/signin' />;
  }
  return (
    <DashBoard className='dashboard' key='31'>
      <ProjectList key='32' className='project-list' />
      {/* <Notifications key='33' className='notification' /> */}
    </DashBoard>
  );
};

const mapStateToProps = (state) => {
  console.log('dashboardState', state);
  return {
    state: state,
  };
};

//for Automatic Syncing the Data from firestore we use this Method
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'project-Data' },
    { collection: 'users' },
    { collection: 'notifications' },
  ])
)(Dashboard);
const DashBoard = styled.div`
  display: flex;
  flex-direction: column;
`;
