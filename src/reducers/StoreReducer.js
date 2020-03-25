

const StoreReducer=(state, action)=>{
    console.log("Hit StoreReducer action:", action);
    


    switch(action.type){
        case "UPDATE_CHARACTERS":
            return{
                ...state,
                characters: action.payload
            };
        default:
            return state;

    };

};

export default StoreReducer;