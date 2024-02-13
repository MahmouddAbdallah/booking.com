import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json'
    }
};
export const ftechApatmentsAPI = async (fields :string) =>{
    try {
        const  {data} = await axios.get(`/api/apartment/?${fields}`, config)
        return data.apartments
    } catch (error) {
        console.error(error);
    }
}
export const ftechApatmentAPI = async (id :string) =>{
    try {
        const  {data} = await axios.get(`/api/apartment/${id}`, config)
        return data.apartment
    } catch (error) {
        console.error(error);
    }
}