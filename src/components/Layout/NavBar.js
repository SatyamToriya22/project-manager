import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import SignInLink from './SignInLink'
import SignOutLink from './SignOutLink'
import {connect} from 'react-redux'

const NavBar = (props) => {
    console.log('navprop',props)
    const links=props.auth.uid ?<SignInLink/>:<SignOutLink/>
    return (
        <nav>
            <div className="nav-wrapper">
                <div className='container'>
                    <Link to="/" className="brand-logo">Project Manager</Link>
                    {links}
                </div>

            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    console.log('navbarState',state)
    return{
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps)(NavBar)
