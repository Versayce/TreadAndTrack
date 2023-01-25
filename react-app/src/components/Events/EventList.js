import React, { useEffect } from 'react';
import styled from 'styled-components'

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
        <TestWrapper>
            <h1>Event Component</h1>
        </TestWrapper>
    );
}

const TestWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default EventList
