import { useEffect, useState } from 'react';
import { getCurrentUserUsername } from '../services/auth';

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUserUsername();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <p>Добро пожаловать, {user.username}</p>
    </div>
  );
}
