import api from "./masterAxios";

export const subscribeNewsLetter = (email) =>{
return api.post("newsletter/subscribe",{email});
};