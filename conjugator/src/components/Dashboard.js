import React from 'react';
import './css/dashboard.css';

class Dashboard extends React.Component {
    render() {
        return (
            <div className='dashboard-content'>
                <h3>Dashboard</h3>

                <div>This is dummy data. Sign-up here to gain insights into your progress.</div>

                <div className='tense-content'>
                    <div>Present Tense</div>

                    <div>Preterite Tense</div>

                    <div>Imperfect Tense</div>
                </div>

            </div>
        )
    }
}

export default Dashboard;