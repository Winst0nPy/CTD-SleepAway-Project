import Axios from "axios";
import { API_URL } from "../config";

const instance = (needsToken) => Axios.create({
    baseURL: API_URL,
    timeout: 30000,
    headers: needsToken
        ? {'Authorization': `Bearer ${localStorage.getItem('token')}`}
        : { "Accept": "*/*",  "Access-Control-Allow-Origin": "*"}
});

export const handleRequestGet = async (path, needsToken=false) => {
    return await instance(needsToken).get(path)
}
export const handleRequestPost = async (path, dataToPost, needsToken=false) => {
    return await instance(needsToken).post(path, dataToPost);
}
export const handleRequestLogin = async (path, params, needsToken=false) => {
    return await instance(needsToken).post(path, null, params)
}
export const handleRequestGetParams = async (path, params, needsToken=false) => {
    return await instance(needsToken).get(path, params)
}
export const handleRequestGets = (paths, setters, needsToken=false) => {
    Axios
        .all(paths.map(async path => await instance(needsToken).get(path)))
        .then(Axios.spread((...responses) => {
            setters.forEach((setter, index) => setter(responses[index].data))
        }))
        .catch((error) => console.log(error));
}

export const handleRequestGetWithParams = async (path, params, needsToken=false) => {
    return await instance(needsToken).get(path, params)
}