import React from 'react';
import './css/settings.css'

class Settings extends React.Component {
    render() {
        return (
            <div className='settings-content'>
                <h3>Settings</h3>

                <div className='dificulty-content'>
                    <div>Imperfect Tense</div>

                    <div>Difficulty</div>

                    <div>Tenses</div>
                </div>

                <button className='settings-button'>Update</button>
            </div>
        )
    }
}

export default Settings;