// primary global state for Main.js

import React, { createContext, useReducer } from "react";
import StoreReducer from "./reducers/StoreReducer";


const initialState ={
    characters: []
};

const Store=({children})=>{
    const [ state, dispatch ] = useReducer(StoreReducer, initialState);

    return(
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    );
};

export const Context = createContext(initialState);

export default Store;



