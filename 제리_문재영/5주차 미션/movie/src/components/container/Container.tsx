import React, { Children } from "react";

export enum Flex {
    ROW= 'ROW',
    COLUMN= 'COLUMN'
}
export enum Display {
    FLEX= 'FLEX',
    GRID= 'GRID'
}

interface IContainer{
    children: React.ReactNode;
    width?: string;
    display: Display;
    flexDirection: Flex;
}

function Container({children, ...prev}
    : IContainer) {
    return(
        <div style={{...prev}}>
            {children}
        </div>
    )
}
export default Container;