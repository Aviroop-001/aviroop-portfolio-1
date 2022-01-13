import "../styling_files/projects_list.scss";

import React from 'react';

export default function Projects_list({title, id, active, setActiveitem}) {
    return (
        <li className={(active ? "projects_list active" : "projects_list")}
        onClick={() => setActiveitem(id)}>
            {title}
        </li>
    )
}
