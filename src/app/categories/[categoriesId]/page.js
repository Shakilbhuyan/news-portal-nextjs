import React from 'react';

const DaynamicNewPage = ({params, searchParams}) => {
    return (
        <div>
            <h1>daynamic page:{searchParams.category}</h1>
        </div>
    );
};

export default  DaynamicNewPage;