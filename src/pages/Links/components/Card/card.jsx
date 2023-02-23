import React from 'react';
import { useNavigate } from 'react-router-dom';

export default ({ title, href, special }) => {

    const navigate = useNavigate();

    return (
        <a
            href={!special ? href : null}
            target={!special ? "_blank" : null}
            id={special ? "special" : null}
            onClick={special ? () => navigate(href) : null}
        >
            {title}
        </a>
    )
}