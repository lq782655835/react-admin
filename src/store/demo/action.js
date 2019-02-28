export const setDemoList = list => ({
    type: 'setDemoList',
    list
})

// export const setAsyncList = () => {
//     return async dispatch => {
//         let result = await API.getXXX()
//         dispatch({type: 'setAsyncList', result})
//     }
// }