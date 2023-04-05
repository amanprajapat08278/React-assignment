
let initialState = 5
const changeNumber = (state = initialState, action) => {

    switch (action.type) {
        case "INC": return state + 1
        case "DEC": return (state > 0) ? state - 1 : 0
        default: return state
    }
}

export default changeNumber