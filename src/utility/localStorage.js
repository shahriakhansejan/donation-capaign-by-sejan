const getStoredApplication = () =>{
    const storedApplication = localStorage.getItem('card-items');
    if(storedApplication){
        return JSON.parse(storedApplication);
    }
    return [];
}

const saveApplication = id =>{
    const storedApplications = getStoredApplication();
    const exists = storedApplications.find(cardId => cardId === id);
    if(!exists){
        storedApplications.push(id);
        localStorage.setItem('card-items', JSON.stringify(storedApplications))
    }
}

export{ saveApplication, getStoredApplication}