import React from "react";

type LinkComponentProps = {
    name: string;
    link:string;
}

export const LinkComponent: React.FC<LinkComponentProps> = ({name, link}) => (
    <a
        className="App-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
    >
        {name}
    </a>
)
