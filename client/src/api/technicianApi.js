import axios from "axios";

const API =
"http://localhost:5000/api/technicians";

export const registerTechnician =
async (formData) => {

  const response =
    await axios.post(
      `${API}/register`,
      formData
    );

  return response.data;
};