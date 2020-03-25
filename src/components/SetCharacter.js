import React, { useState, useEffect } from "react";

const SetCharacter=()=>{
    let charFormat = { 
        name_first: "",
        name_family: "",
        age: 0,
    };

    const [ characterArr, setCharacterArr ] = useState([]);
    const [ formCharacter, setFormCharacter ] = useState(charFormat);

    useEffect(()=>{
        
        fetch("http://localhost:3003/api/characters")
            .then(response=>response.json())
            .then(json=>setCharacterArr(json.data));
    }, []);

    const handleFormOnChange=(event)=>{
        console.log("updating formCharacter", formCharacter)

        const {name, value} = event.target;
        console.log("name:", name);
        console.log("defvalue", value);
        return setFormCharacter({...formCharacter, [name]: value});
    }

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        console.log("submitting character");

        return fetch("http://localhost:3003/api/character", {
            method: "POST",
            body: JSON.stringify(formCharacter),
            headers:{
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(characterData=>{
            console.log("returned data from fetch: ", characterData);
        });
    };

    return(
        <section>
            <form onSubmit={handleOnSubmit} >
                <div>
                    <label htmlFor="name_first" > First Name: </label>
                    <input 
                        type="text" 
                        id="name_first" 
                        name="name_first" 
                        size="20"
                        value={ formCharacter.name_first }
                        onChange={handleFormOnChange} />
                </div>
                <div>
                    <label htmlFor="name_family" > Family Name: </label>
                    <input 
                        type="text" 
                        id="name_family" 
                        name="name_family" 
                        size="20"
                        value={ formCharacter.name_family }
                        onChange={handleFormOnChange} />
                </div>
                <div>
                    <label htmlFor="age" > Age: </label>
                    <input 
                        type="number" 
                        id="age" 
                        name="age" 
                        size="3" 
                        min="1" 
                        max="100"
                        value={ formCharacter.age }
                        onChange={handleFormOnChange} />
                </div>

                <input type="submit" />
            </form>

        </section>
    );
};


export default SetCharacter;