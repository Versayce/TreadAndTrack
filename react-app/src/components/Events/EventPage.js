import React, { useEffect } from 'react';


// TODO start filling the page with information and get ready for comments feature.
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

    }, [userId]);

  
    return (
        <>
            <h1>Event Page Component</h1>
        </>
    ); 
}

export default EventPage
