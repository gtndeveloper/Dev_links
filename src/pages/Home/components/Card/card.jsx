import React from 'react';

export default ({ title, href }) => (
    <a
        href={href}
        target="_blank"
    >
        {title}
    </a>
)