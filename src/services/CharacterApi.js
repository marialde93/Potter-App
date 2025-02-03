import axios from "axios";

const fetchingData = async () => {
  try {
    const response = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchingData };
