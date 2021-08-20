import React from 'react';
  import { useContext, useState } from 'react';
import { Context } from '../stores/AppContext';

function People() {
    const [store, actions] = useContext(Context);
    const { people } = store;
    const [view, setView] = useState(1);
    
    const handleChangePage = (pageNumber) => {
        setView(pageNumber);
        actions.loadPeople(`https://www.swapi.tech/api/people/?page=${pageNumber}&limit=9`);
    };

    return (
        <div>
            
        </div>
    );
}

export default People;
