import axios from "axios";
import { delete_parcel_component_service, get_parcel_component_by_id_service, get_parcel_component_service, store_parcel_component_service, update_parcel_component_service } from "../services/parcel-component-service";


export function get_parcel_component_thunk() {
     return async function (dispatch, getState) {
       const res=  await  get_parcel_component_service()
       return res.data
    };
}

export function store_parcel_component_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await store_parcel_component_service()
        return res.data
     };
}


export function delete_parcel_component_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await delete_parcel_component_service()
        return res.data
     };
}

export function update_parcel_component_thunk(data) {
    return async function (dispatch, getState) {
        const res=  await update_parcel_component_service()
        return res.data
     };
}


export function get_parcel_component_by_id_thunk(id) {
    return async function (dispatch, getState) {
        const res=  await get_parcel_component_by_id_service()
        return res.data
     };
}

