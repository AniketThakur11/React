import React from 'react';
import { useDispatch } from 'react-redux';
import authService, { AuthService } from '../../appwrite/auth';
import { logout } from '../../store/authSlice'
function LogoutBtn(props) {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logOut.then.catch((error) => {

        })
    }
    return (
        <button>Logout</button>
    );
}

export default LogoutBtn;