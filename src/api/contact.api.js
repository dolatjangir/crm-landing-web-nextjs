import api from "./masterAxios";

export const contactUsapi = (data) => {
return api.post("/leads",data)
}