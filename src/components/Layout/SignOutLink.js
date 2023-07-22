import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const SignOutLink = () => {
    return (
        <div>
            <Ul className="right ">
                    <li><NavLink to="/signin" key='11'>SignIn</NavLink></li>
                    <li><NavLink  to="/signup" key='12'>SignUp</NavLink></li>
                </Ul>
        </div>
    )
}

export default SignOutLink
const Ul=styled.ul`
    & li a{
        font-family: 'Roboto', sans-serif;
        letter-spacing:1px;
    }
`
