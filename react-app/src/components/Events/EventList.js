import React, { useEffect } from 'react';

function EventList() {
let userId
useEffect(() => {
    if (!userId) {
        return;
    }

    (async () => {
        // const response = await fetch(`/api/users/${userId}`);
        // const user = await response.json();
    })();

}, []);

  
    return (
        <>
            <h1>Event Component</h1>
        </>
    );
}

export default EventList
