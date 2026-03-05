import React from 'react';
import { ManageSchedules } from './ManageSchedules';
import { CreateLottery } from './CreateLottery';
import { ViewEscalas } from './ViewEscalas';

const DashboardAdmin = () => {
    return (
        <div>
            <h1>Admin Panel</h1>
            <ManageSchedules />
            <CreateLottery />
            <ViewEscalas />
        </div>
    );
};

export default DashboardAdmin;
