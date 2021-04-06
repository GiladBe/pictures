import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { addImage } from '../../redux/reducers/actions/imagesActions';
import { addUser } from '../../redux/reducers/actions/usersActions'
import usersReducer from '../../redux/reducers/usersReducer';

//CSS
import './home.css'



function Home() {
    const dispatch = useDispatch();
    const users = useSelector(state => state.usersReducer.users)
    const images = useSelector(state => state.imagesReducer.images)
    const [userExist,setUserExist]=useState('')
    // let userExist = ` `
    console.log(users)
    console.log(images)


    function handleSubmit(e) {
        e.preventDefault()
        let isUserExist=false
        console.log(isUserExist)
        
        users.forEach(user => {
            if(user.userName===e.target.userName.value){
                isUserExist = true;
                console.log(` userName ${user.userName} is already used`)
                setUserExist(` username already in use`) 
            }
            
        });
        if(!isUserExist){
            dispatch(addUser(e.target.userName.value))
            dispatch(addImage(e.target.url.value,e.target.userName.value))
            console.log(isUserExist)
            setUserExist(``)
            console.log(users)
           
        }
        
     
        
    }


    return (
        <div className="main">
            <form onSubmit={handleSubmit} className="formHome">
                <input id='userName' placeholder='Enter Username' type="text" className="formHome__input" />
                <input id='url' placeholder='Image Url' type='url' className="formHome__input" />
                <input type='submit' className="formHome__submit" />
                <p>{userExist}</p>
            </form>
            {users.map((user)=><p key={user.id}> {user.userName}  </p>)}
        </div>
    )
}

export default Home;