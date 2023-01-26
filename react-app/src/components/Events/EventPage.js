import React, { useEffect } from 'react';

function EventPage() {
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
            <h1>Event Page Component</h1>
        </>
    ); 
}

export default EventPage
