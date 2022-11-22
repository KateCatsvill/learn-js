import React from "react";

type LoremProps = {
    name: string;
}

export const Lorem: React.FC<LoremProps> = ({name}) => (
    <div>Lorem ipsum dol solemn, <b>{name}</b></div>
)