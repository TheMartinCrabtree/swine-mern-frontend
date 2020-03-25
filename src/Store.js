// primary global state for Main.js

import React, { createContext, useReducer, useEffect } from "react";
import StoreReducer from "./reducers/StoreReducer";


const initialState ={
    characters: []
};

const Store=({children})=>{
    const [ state, dispatch ] = useReducer(StoreReducer, initialState);
    
    useEffect(()=>{
        console.log("Hit Store useEffect()", state.characters.length);

        if(!state.characters.length){
            const getAPIData= async()=>{
                await fetch("http://localhost:3003/api/characters")
                        .then(response=>response.json())
                        .then((json)=>{
                            // setCharacterArr(json.data)
                            console.log("attmpting to dispatch", json);
                            return dispatch({ type: "UPDATE_CHARACTERS", payload: json.data});
                        })
                        .catch((error)=>{
                            console.log("Store Fetch failed: ", error)
                        });
    
            }
            getAPIData();
        }

    }, []);
    console.log("Value of Store State: ", state);

    return(
        <Context.Provider value={[state, dispatch]}>
            { children }
        </Context.Provider>
    );
};

export const Context = createContext(initialState);

export default Store;



