import React from 'react';

const DashboardPorteiro = () => {
    const schedule = [
        { day: 'Monday', time: '9:00 AM - 5:00 PM' },
        { day: 'Tuesday', time: '9:00 AM - 5:00 PM' },
        { day: 'Wednesday', time: '9:00 AM - 5:00 PM' },
        { day: 'Thursday', time: '9:00 AM - 5:00 PM' },
        { day: 'Friday', time: '9:00 AM - 5:00 PM' },
    ];

    const notifications = [
        'Meeting with the team at 3 PM.',
        'Reminder: Submit your weekly report.',
        'Maintenance scheduled for Saturday at 10 AM.',
    ];

    return (
        <div>
            <h1>Porteiro Dashboard</h1>
            <h2>Your Schedule</h2>
            <ul>
                {schedule.map((entry, index) => (
                    <li key={index}>{entry.day}: {entry.time}</li>
                ))}
            </ul>
            <h2>Notifications</h2>
            <ul>
                {notifications.map((note, index) => (
                    <li key={index}>{note}</li>
                ))}
            </ul>
        </div>
    );
};

export default DashboardPorteiro;