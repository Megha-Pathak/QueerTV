import axios from "axios";

export const getWatchLaterService = async (token) => {
  try {
    const { data } = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: token,
      },
    });
    return data.watchlater;
  } catch (error) {
    console.error(error);
    return;
  }
};
