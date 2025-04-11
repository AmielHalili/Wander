import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

const GoogleLogin = () => {
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
    });

    google.accounts.id.renderButton(
      document.getElementById('googleSignInDiv'),
      { theme: 'outline', size: 'large' }
    );
  }, []);

  const handleCredentialResponse = async (response) => {
    
    try {
      const res = await axios.post('http://localhost:5000/api/v1/auth/google', {
        credential: response.credential,
      }, {
        withCredentials: true
      });
  
      // ✅ Save JWT token and user info
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.data));

      console.log('Google login response:', res.data);
      

  
      // ✅ Redirect to homepage or dashboard
      window.location.href = '/home'; // change this if your homepage is somewhere else
    } catch (err) {
      console.error('Google login failed:', err.response?.data || err.message);
    }
  };
  

  return <div id="googleSignInDiv"></div>;
};

export default GoogleLogin;
