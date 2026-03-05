import React from 'react';
import { useEffect, useState } from 'react';

const DashboardRecepcionista = () => {
  const [schedule, setSchedule] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchSchedule();
    fetchNotifications();
  }, []);

  const fetchSchedule = async () => {
    // Simulate fetching schedule from an API
    const mockSchedule = [
      { time: '09:00 AM', appointment: 'Client Meeting' },
      { time: '11:00 AM', appointment: 'Follow-up Call' },
      { time: '02:00 PM', appointment: 'New Client Consultation' }
    ];
    setSchedule(mockSchedule);
  };

  const fetchNotifications = async () => {
    // Simulate fetching notifications from an API
    const mockNotifications = [
      'You have a new message from John Doe.',
      'Your appointment with Jane Smith is confirmed for tomorrow at 10 AM.',
      'Reminder: Team meeting at 3 PM today!'
    ];
    setNotifications(mockNotifications);
  };

  return (
    <div>
      <h1>Recepcionista Dashboard</h1>
      <h2>Your Schedule</h2>
      <ul>
        {schedule.map((entry, index) => (
          <li key={index}>{entry.time} - {entry.appointment}</li>
        ))}
      </ul>
      <h2>Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardRecepcionista;
