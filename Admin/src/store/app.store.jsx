import { useState } from "react";
import { createContext } from "react";
 export const appStore = createContext({});

const AppProvider = ({children})=>{
    const [sidebar,setSidebar] = useState(false);

    const  openSideber = ()=> setSidebar(true);
    const closeSideber = ()=> setSidebar (false);


    return(
     <appStore.Provider value={{sidebar,openSideber,closeSideber}}>{children}</appStore.Provider>
    )

};
export default AppProvider;