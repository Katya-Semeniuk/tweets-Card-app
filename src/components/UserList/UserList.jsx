import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import UserCard from "../UserCard/UserCard";
import { Button, List, Item } from "./UserList.styled";
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
        setUsers(arrayOfUsers);
        // setUsers((prevState) => [...prevState, ...arrayOfUsers]);
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
        <div>
          <List>
            {users.map((user) => (
              <Item key={user.id}>
                <UserCard user={user} />
              </Item>
            ))}
          </List>
          <Button type="button" onClick={handleClickLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
