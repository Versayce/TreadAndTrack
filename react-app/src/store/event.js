const LOAD_SERVERS = 'servers/load'
const LOAD_ONE_SERVER = 'server/loadOne'
const ADD_SERVER = 'server/add'
const EDIT_SERVER = 'server/edit'
const DELETE_SERVER = 'server/delete'



//------------------------------   ACTIONS   ------------------------------//
export const loadServers = (servers) => {
    return {
        type: LOAD_EVENTS,
        servers
    }
}

export const 
