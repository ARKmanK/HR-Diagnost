import { useState, useEffect } from 'react';
import RegistryForm from '../components/RegistryForm';
import LoginForm from '../components/LoginForm';
import Header from '../components/UI/Header';
import VideoBackground from '../components/VideoBackground';
import ProfilePage from '../components/ProfilePage';
import { isUserAuthenticated } from '../services/auth';

export default function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(() => {
    const savedShowLoginForm = localStorage.getItem('showLoginForm');
    return savedShowLoginForm ? JSON.parse(savedShowLoginForm) : true;
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isUserAuthenticated();
      setIsAuthenticated(authenticated);
      setIsLoading(false);
    };
    checkAuthentication();
  }, []);

  useEffect(() => {
    localStorage.setItem('showLoginForm', JSON.stringify(showLoginForm));
  }, [showLoginForm]);

  const handleSuccessfulLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return <></>;
  }

  return (
    <div className='max-w-[1200px] mx-auto'>
      <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />

      {isAuthenticated && <ProfilePage />}

      {!isAuthenticated && (
        <VideoBackground>
          {showLoginForm && (
            <>
              <LoginForm onSuccessfulLogin={handleSuccessfulLogin} />
              <button
                className='border border-white text-white text-sm rounded-xl p-2'
                onClick={() => setShowLoginForm(false)}
              >
                Зарегистрироваться
              </button>
            </>
          )}
          {!showLoginForm && <RegistryForm onGoBack={() => setShowLoginForm(true)} />}
        </VideoBackground>
      )}
    </div>
  );
}
