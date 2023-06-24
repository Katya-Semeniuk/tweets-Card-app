import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import UserCard from "../UserCard/UserCard";
import { Button } from "./UserList.styled";
import { fetchUsers } from "../../api/API";

export const UserList = () => {
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setStatus("pending");
    fetchUsers(page)
      .then(({ data }) => {
        const arrayOfUsers = data;
        setUsers((prevState) => [...prevState, ...arrayOfUsers]);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error.message);
        setStatus("error");
      });
  }, [page]);

  const handleClickLoadMore = () => {
    console.log("handleClickLoadMore");
    setPage((prevPage) => prevPage + 1);
  };
  if (status === "error") {
    return Notify.failure("Something went wrong");
  }
  return (
    <div>
      {status === "pending" && <Loader />}
      {status === "resolved" && (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserCard user={user} />
            </li>
          ))}
          <Button type="button" onClick={handleClickLoadMore}>
            Load More
          </Button>
        </ul>
      )}
    </div>
  );
};
