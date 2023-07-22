import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import {signOut} from '../../store/actions/authAction'
import {connect} from 'react-redux';

const SignInLink = (props) => {
    console.log('signin',props)
    return (
        <div>
            <Ul className="right ">
                <li><NavLink to="/create-project" key='01'>Create Project</NavLink></li>
                <li><NavLink onClick={()=>props.signOut()} to="/" key='02'>Logout</NavLink></li>
                <li><NavLink to='/' key='03' className="btn btn-floating black lighten-1">{props.state.dashboard.initials}</NavLink></li>
            </Ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        state:state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        signOut:()=> dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInLink)
const Ul = styled.ul`
    & li a{
        font-family: 'Roboto', sans-serif;
        letter-spacing:1px;
    }
`
