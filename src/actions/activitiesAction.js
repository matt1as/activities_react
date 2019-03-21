export const REQUEST_ACTIVITIES = 'REQUEST_ACTIVITIES';
export const RECEIVE_ACTIVITIES = 'RECEIVE_ACTIVITIES';
export const SELECT_TYPE = 'SELECT_TYPE';


export const getType = type_key => ({
    type: SELECT_TYPE,
    type_key,
 });

export const requestActivities = () => ({
    type: REQUEST_ACTIVITIES,
});


export const receivedActivities= json => ({
    type: RECEIVE_ACTIVITIES,
    json: json.d.results,
 });

export function fetchActivities(type) {
    return function (dispatch) {
        dispatch(requestActivities());
        return fetch("/sap/opu/odata/SAP/Z_ACTIVITY_SRV/ZCDS_ACTIVITY?$format=json", { mode: "no-cors", credentials: "include" })
            .then(
                response => response.json(),
                error => console.error('An error occurred.', error),
            )
            .then((json) => {
                dispatch(receivedActivities(json));
            },
        );
        
    };
}