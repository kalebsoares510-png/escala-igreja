import React, { useState } from 'react';

const ScheduleForm = () => {
    const [date, setDate] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to handle scheduling with the date and name
        console.log(`Scheduled ${name} on ${date}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Schedule</button>
        </form>
    );
};

export default ScheduleForm;