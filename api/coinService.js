import { API_KEY, RAPID_API_HOST, BASE_URL} from "../environment.js";

const options = {
    'X-RapidAPI-Key': API_KEY,
    "X-RapidAPI-Host": RAPID_API_HOST,
};

export const getCoins = async () => {
    try {
        const response = await fetch(`${BASE_URL}/coins`, { headers: options });
        return response.json();
    } catch (error) {
        console.log(error);
    }
    
};