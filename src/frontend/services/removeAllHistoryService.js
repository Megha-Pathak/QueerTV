import axios from "axios";

export const removeAllHistoryService = async (token) => {
  try {
    const { data } = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: token,
      },
    });
    return data.history;
  } catch (error) {
    console.error(error.message);
    return;
  }
};
