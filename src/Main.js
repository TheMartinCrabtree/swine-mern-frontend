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
            <form>
                <div>
                    <label for="name_first" > First Name: </label>
                    <input type="text" id="name_first" name="name_first" />
                </div>
                <div>
                    <label for="name_family" > Family Name: </label>
                    <input type="text" id="name_family" name="name_family" />
                </div>
                <div>
                    <label for="age" > Age: </label>
                    <input type="number" id="age" name="age" />
                </div>

                <input type="submit" />
            </form>
        </main>
    );
};

export default Main;