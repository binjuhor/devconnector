import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Profiles from '../profiles/Profiles';
import Profile from '../profile/Profile';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../dashboard/Dashboard';
import CreateProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import AddEducation from '../profile-forms/AddEducation';
import Posts from '../posts/Posts';
import Post from '../post/Post';
import NotFound from '../layout/NotFound';

const privateRoute = Component => <PrivateRoute><Component/></PrivateRoute>;

const AppRoutes = () => (
    <section className='container'>
        <Alert/>
        <Routes>
            <Route path='register' element={<Register/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='developers' element={<Profiles/>}/>
            <Route path='profile/:id' element={<Profile/>}/>
            <Route path='dashboard' element={privateRoute(Dashboard)}/>
            <Route path='create-profile' element={privateRoute(CreateProfile)}/>
            <Route path='edit-profile' element={privateRoute(EditProfile)}/>
            <Route path='add-experience' element={privateRoute(AddExperience)}/>
            <Route path='add-education' element={privateRoute(AddEducation)}/>
            <Route path='posts' element={privateRoute(Posts)}/>
            <Route path='posts/:id' element={privateRoute(Post)}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </section>
);

export default AppRoutes;
