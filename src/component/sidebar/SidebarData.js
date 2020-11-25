import React from 'react'
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';

export const SidebarData = [
    {
        title: "home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Compose",
        icon: <SendIcon />,
        link: "/compose",
    },
    {
        title: "Received",
        icon: <EmailIcon />,
        link: "/received",
    },
    {
        title: "Sent",
        icon: <EmailIcon />,
        link: "/sent",
    }
];

