import styled from 'styled-components';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectListAction from '../../store/actions/ProjectListAction';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import './projectList.scss';
const ProjectList = (props) => {
  var Data = null;
  var isPending = false;
  var isError = null;
  useEffect(() => {
    console.log('projectList', props.state);
    const email = props.state.firebase.auth.email;
    setTimeout(() => {
      props.projectList(email);
    }, 1000);
  }, []);
  Data = props.state.firestore.ordered['project-Data'];
  isPending = props.state.dashboard.isPending;
  isError = props.state.dashboard.isError;
  console.log('data--', props.state.dashboard.projectData);
  return (
    <div className='Project-List' key='div'>
      <Content>
        {isPending && (
          <div className='progress'>
            <div className='indeterminate'></div>
          </div>
        )}
        {isError && (
          <div key='error'>
            <h4>Error While Fetching The Data</h4>
          </div>
        )}
        <div className='wrapper'>
          <SectionContainer className='project-lists'>
            {Data &&
              Data.map((ele, index) => {
                return (
                  <Link to={`/project/${ele.id}`} id={index}>
                    <Section className='project'>
                      <h2>{ele.title}</h2>
                      <p>Submitted By - &nbsp;{ele.postedBy}</p>
                      <p>{ele.date}</p>
                    </Section>
                  </Link>
                );
              })}
          </SectionContainer>
        </div>
      </Content>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log('projectList', state);
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    projectList: (data) => {
      dispatch(ProjectListAction(data));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: 'project-Data' }])
)(ProjectList);
const Section = styled.section`
  padding: 25px;
  margin: 2rem 0rem;
  border: 1px solid black;
  border-radius: 10px;
  color: aquamarine;
  background-color: black;
  box-shadow: 5px 10px 8px 10px #888888;
  text-align: justify;
  font-weight: bold;
  cursor: pointer;
`;
const Content = styled.div`
  text-decoration: none;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
