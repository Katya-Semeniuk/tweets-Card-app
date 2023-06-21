import { useState, useEffect } from "react";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import UserCard from "../UserCard/UserCard";

export const UserList = () => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    setStatus("pending");
    console.log("Запит за користувачами");
    setStatus("resolved");
  }, []);
  if (status === "error") {
    return Notify.failure("Something was wrong");
  }

  return (
    <>
      {status === "pending" && Loading.circle()}
      {status === "resolved" && (
        <div>
          <UserCard />
        </div>
      )}
    </>
  );
};
