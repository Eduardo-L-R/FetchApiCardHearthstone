export default const contadorReducer = (previuousState, action)=>{
    switch (action.type){
        case 'INCREMENT' :
            return previuousState + 1;
        default:
            return previuousState;
    }
}