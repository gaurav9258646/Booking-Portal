import { useState } from "react";
import { createContext } from "react";
 export const appStore = createContext({});

const AppProvider = ({children})=>{
    const [sidebar,setSidebar] = useState(false);

    const  openSideber = ()=> setSidebar(true);
    const closeSideber = ()=> setSidebar (false);
     const [rooms, setRooms] = useState([]);

  const addRoom = (room) => {
    setRooms((prev) => [...prev, room]);
  };


    return(
     <appStore.Provider value={{sidebar,openSideber,closeSideber,   rooms,
        addRoom,
        }}>{children}</appStore.Provider>
    )

};
export default AppProvider;