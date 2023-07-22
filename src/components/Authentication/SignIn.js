import styled from 'styled-components'
import {useState} from 'react'
import {connect} from 'react-redux'
import signIn from '../../store/actions/authAction'
import { getFirebase } from 'react-redux-firebase'
import {Redirect} from 'react-router-dom'

const SignIn = (props) => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    console.log(getFirebase())
    const handleSubmitBtn=(e)=>{
        e.preventDefault()
        props.signIn({email,password})
    }
    if (props.auth.firebase.auth.uid){
        return <Redirect to='/'/>
    }

    return (
            <Form className='row'>
            <h3>Sign In</h3>
            <form onSubmit= {(e)=>handleSubmitBtn(e)} className='col s12'>
                <div className='row'>
                    <div className='input-field col s6'>
                        <input onChange={(e)=> setEmail(e.target.value)}type='email' id='email' className='validate' />
                        <label htmlFor='email'>Email</label>
                    </div>
                </div>
                <div className='row'>
                    <div className='input-field col s6'>
                        <input onChange={(e)=> setPassword(e.target.value)} type='password' id='password' className='validate' />
                        <label htmlFor='password'>Password</label>
                    </div>
                </div>
                <div className='row'>
                    <button className="btn waves-effect waves-light submit" type="submit" name="action">
                        Submit
                    </button>
                </div>
                {console.log('login',props.auth.auth)}
                {props.auth.auth.Login=='Success' && <h6>Login SuccessFul</h6>}
                {props.auth.auth.Login=='Failed' && <h6>Login Error - Please Fill Correct Email & Password</h6>}
            </form>
        </Form>
    )
}

const mapStateToProps=(state)=>{
    console.log('signin',state)
    return{
        auth:state
    }
}

const mapDispatchToProps=(dispatch=>{
    return{
        signIn:(cred)=>dispatch(signIn(cred))
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(SignIn)
const Form = styled.div
    `
    align-items:center;
    & h3,h6{
        text-align:center;
    }
    
    .row{
        margin-left: 424px;
        margin-bottom: 20px;
        margin-right: 0px;
        margin-top: 10px;
    }
    .submit{
        margin-left:150px;
    }
`