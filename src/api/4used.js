import axios from "axios";

const base =
    "https://us-central1-labenu-apis.cloudfunctions.net/fourUsedThree/products";

export const createPlaylist = async (body) => {
    try {
        return await axios.post(base, body);
    } catch (err) {
        console.log(err.response);
    }
};

export const getAllPlaylists = async () => {
    try {
        return await axios.get(base);
    } catch (err) {
        console.log(err.response);
    }
};

export const deletePlaylist = async (id) => {
    try {
      return await axios.delete(base + `/${id}`);
    } catch (err) {
      console.log(err.response);
    }
  };