import { get_admin_dashboard_service, get_verifier_dashboard_service } from "../services/dashboard-service";
import { appSlice } from "./app-slice";

export function get_admin_dashboard_thunk() {
    return async function (dispatch, getState) {
        const res = await get_admin_dashboard_service();
        dispatch(appSlice.actions.setDashboard(res.data));
        return res.data;
    };
}


export function get_verifier_dashboard_thunk() {
    return async function (dispatch, getState) {
        const res = await get_verifier_dashboard_service();
        dispatch(appSlice.actions.setDashboard(res.data));
        return res.data;
    };
}




export function send_push_notification(data) {
    return async function (dispatch, getState) {
    };
}