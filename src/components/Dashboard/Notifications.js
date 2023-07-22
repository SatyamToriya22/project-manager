import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { getFirestore } from 'redux-firestore';
import NotificationsAction from '../../store/actions/NotificationsAction';
import { connect } from 'react-redux';

const Notifications = (props) => {
  var Data = null;
  var isPending = true;
  useEffect(() => {
    setTimeout(() => {
      props.notifications();
    }, 1000);
  }, []);
  Data = props.state.firestore.ordered.notifications;
  // isPending=props.state.notifications.isPending

  console.log('notifyData', props.state.notifications.notificationsData);
  return (
    <Notify className='scroll'>
      <h3>Notifications</h3>
      {Data &&
        Data.map((ele, index) => {
          return (
            <div key={index}>
              <span>{ele.notify}</span>
              <br />
              <hr />
            </div>
          );
        })}
    </Notify>
  );
};

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    notifications: () => dispatch(NotificationsAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
const Notify = styled.div`
  display: flex;
  max-width: 27rem;
  flex-direction: column;
  position: absolute;
  right: 0px;
  height: 300px;

  padding: 25px;
  margin: 50px 50px 5px 70px;
  border: 1px solid black;
  border-radius: 10px;
  color: aquamarine;
  background-color: black;
  box-shadow: 5px 10px 8px 10px #888888;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: black;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: beige;
    border-radius: 10px;
  }
`;
