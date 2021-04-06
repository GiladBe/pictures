import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addImage } from '../../redux/reducers/actions/imagesActions';
import { addUser } from '../../redux/reducers/actions/usersActions'
import usersReducer from '../../redux/reducers/usersReducer';

//CSS
import './home.css'



function Home() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)
    console.log(users)

    function handleSubmit(e) {
        e.preventDefault()

        dispatch(addUser(e.target.userName.value))
        dispatch(addImage(e.target.url.value))


    }

    //  function renderUsers(){
    //      const users = useSelector(state=>state)
    //      console.log(users)
    //  }

    return (
        <div className="main">
            <form onSubmit={handleSubmit} className="formHome">
                <input id='userName' placeholder='Enter Username' type="text" className="formHome__input" />
                <input id='url' placeholder='Image Url' type='url' className="formHome__input" />
                <input type='submit' className="formHome__submit" />
            </form>

            {/* <div className='container'>
                <div><img src="" /><p>NAME</p></div>
                <div><img src="" /><p>NAME</p></div>
                <div><img src="" /><p>NAME</p></div>
                <div><img src="" /><p>NAME</p></div>
                <div><img src="" /><p>NAME</p></div>
                <div><img src="" /><p>NAME</p></div>
            </div> */}
        </div>
    )
}

export default Home;