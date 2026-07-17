import { API_ROUTES } from "@/constants/ApiRoute";




export const compareProductPrice = async (data: any) => {
    try {
        let response = await fetch(API_ROUTES.AIAGENT.COMPARE_PRODUCT_PRICE, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
            credentials: "include"
        });
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        response = await response.json();
        console.log(" response is ", response)
        return response;
    }
    catch (error) {
        console.log("SERVER ERROR: ", error);
        return null;
    }
};