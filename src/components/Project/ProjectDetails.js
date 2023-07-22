import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getFirestore } from 'redux-firestore'
import {connect} from 'react-redux'
import { Redirect } from 'react-router'

const ProjectDetails = (props) => {
    const db=getFirestore();
    const { id } = useParams()
    const [isPending,setisPending]=useState(true)
    const [data, setData] = useState(null)

    
    useEffect(() => {
        setTimeout(() => {
            const Data=props.list
            setData(Data)
            setisPending(false)
        },1000)
    }, [])
    console.log(id)
    var detail = null;
    if(!props.state.uid){
        return <Redirect to='/signin'/>
    }
    
    console.log('detail', detail)
    return (
        <Content >
            {isPending && <div className="progress">
                    <div className="indeterminate"></div>
            </div>}
            {data && data.map(ele => {
                if (data && ele.id == id) {
                    detail = data.filter((ele) => ele.id == id)[0]
                }

            })}
            {detail &&
                <>
                    <h2>{detail.title}</h2>
                    <p>{detail.description}</p>
                    <span>By - {detail.postedBy}</span><br/>
                    <span>{detail.date}</span>
                </>}

        </Content>
    )
}

const mapStateToProps=(state)=>{
    return {
        state:state.firebase.auth,
        list:state.firestore.ordered['project-Data']
    }
}

export default connect (mapStateToProps)(ProjectDetails);

const Content = styled.div
    `
    text-align: justify;
    margin: 30px;
    & h2{
        text-align:center;
        margin-bottom:35px;
    }
    & span{
        font-weight:bold;
    }
`