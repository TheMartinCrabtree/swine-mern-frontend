import React, { useEffect, useState } from "react";

const Main=()=>{
    let charFormat = { 
        name_first: "",
        name_family: "",
        age: null,
     };
    const [ characterArr, setCharacterArr ] = useState([]);
    const [ formCharacter, setFormCharacter ] = useState(charFormat);

    // useEffect(()=>{
    //     fetch("http://localhost:3003/api/characters")
    //         .then(response=>response.json())
    //         .then(json=>console.log(json));


    // }, [])


    return(
        <main>
            <h3> This is Main </h3>
        </main>
    );
};

export default Main;