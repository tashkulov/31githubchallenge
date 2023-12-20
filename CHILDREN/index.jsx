import React from 'react';

const ChildrenComp = ({children}) => {
    const title='I am parent'
    return (
        <div>
            <div >{title}</div>
            <div >{children}</div>
        </div>
    );
};

export default ChildrenComp;