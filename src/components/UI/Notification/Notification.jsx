import './Notification.css';

export default function Notification({ notifications }) {
  return (
    <div className='notification-container'>
      {notifications.map((notification, index) => (
        <div
          key={index}
          className={`notification ${notification.type}`}
          style={{ bottom: `${index * 70}px` }}
        >
          <h5>{notification.title}</h5>
          <p>{notification.message}</p>
        </div>
      ))}
    </div>
  );
}
