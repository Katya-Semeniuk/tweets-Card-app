import axios from "axios";
axios.defaults.baseURL = "https://642b22b4208dfe254712bcd8.mockapi.io";

export async function fetchUsers(page) {
  const response = await axios.get(`/users?_page=${page}&_limit=3`);
  return response;
}

// export async function fetchUsers() {
//   const response = await axios.get("/users");
//   return response;
// }
export async function updateFollowers(updatedFollowers) {
  const response = await axios.put("/users/:id ", updatedFollowers);
  return response;
}
