import React from 'react';
import classes from './ContactPage.module.scss'
import map from './assets/map.png'
import xbox_logo from './assets/Box xbox.svg'

export const ContactPage = () => {

    const contacts = [
        {name: 'Address', description: '2464 Royal Ln. Mesa, New Jersey 45463'},
        {name: 'E-mail', description: 'xbox@example.com'},
        {name: 'Phone', description: '+39 405 555 0128'},
    ]

    return (
        <div>
            <img className={classes.mapImage} src={map} alt = 'map' />
            <img className={classes.logo} src={xbox_logo} alt='logo'/>
            <div className={classes.text_1}>
                <span className={classes.contacts_1}>Contacts</span>
                <span className={classes.description_1}>
                    Gear up for action.
                    Upgrade your controller to play like a pro, get a headset to play with friends,
                    or expand your game storage.
                </span>
            </div>
            <div className={classes.contacts_2}>
                {contacts.map((elements) => {
                    return(
                        <div>
                            <p className={classes.name}>{elements.name}</p>
                            <p className={classes.description_2}>{elements.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};