import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loader } from "../Loader/Loader";
import UserCard from "../UserCard/UserCard";
import { Button, List, Item } from "./UserList.styled";
import { fetchUsers } from "../../api/API";

export const UserList = () => {
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);
  const [visibleUsers, setVisibleUsers] = useState(3);

  useEffect(() => {
    setStatus("pending");
    fetchUsers()
      .then(({ data }) => {
        const arrayOfUsers = data;
        setUsers(arrayOfUsers);
        setVisibleUsers(3);
        setStatus("resolved");
      })
      .catch((error) => {
        console.log(error.message);
        setStatus("error");
      });
  }, []);

  const handleClickLoadMore = () => {
    setVisibleUsers((prevVisibleUsers) => prevVisibleUsers + 3);
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
            {users.slice(0, visibleUsers).map((user) => (
              <Item key={user.id}>
                <UserCard user={user} />
              </Item>
            ))}
          </List>
          {visibleUsers !== users.length - 1 && (
            <Button type="button" onClick={handleClickLoadMore}>
              Load More
            </Button>
          )}
        </div>
      )}
    </div>
  );
};
