import React from 'react';
import { useDispatch } from 'react-redux';
import authService, { AuthService } from '../../appwrite/auth';
import { logout } from '../../store/authSlice'
function LogoutBtn(props) {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        }).catch((error) => {
            throw (error)
        })
    }
    return (
        <button>Logout</button>
    );
}

export default LogoutBtn;