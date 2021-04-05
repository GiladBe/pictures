import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addImage } from '../../redux/reducers/actions/imagesActions';
import { addUser} from '../../redux/reducers/actions/usersActions'
import usersReducer from '../../redux/reducers/usersReducer';
function Home() {
    const dispatch = useDispatch();
    const users = useSelector(state=>state.usersReducer.users)
    console.log(users)
 function handleSubmit(e){
     e.preventDefault()
     dispatch(addUser(e.target.userName.value))
     dispatch(addImage(e.target.url.value))
    
     
 }
//  function renderUsers(){
//      const users = useSelector(state=>state)
//      console.log(users)

//  }

    return (<>
    <form onSubmit={handleSubmit}>
        <input id='userName' placeholder='Enter Username' type="text"/>
        <input id='url' placeholder='Image Url' type='url'/>
        <input type='submit'/>
    </form>

    </>)
}
export default Home