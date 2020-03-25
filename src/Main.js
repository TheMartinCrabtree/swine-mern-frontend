import React, { useEffect, useState } from "react";
import Store from "./Store";
import SetCharacter from "./components/SetCharacter";

const Main=()=>{
    
    

    return(
        <main>
            <h3> This is Main </h3>
            <Store>
                <SetCharacter />
            </Store>
            

            <section>
                <h4>Current Characters:</h4>
                <ul>

                </ul>
            </section>
        </main>
    );
};

export default Main;