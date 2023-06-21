import { useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Button, ImageWrapper } from "./UserCard.styled";
import bg_pictures from "../../icons/picture2 1.png";

const UserCard = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [followers, setFollowers] = useState(100500);
  const params = useParams();
  console.log("params", params);

  const handleClickButton = () => {
    console.log("click button");
    setFollowers((followers) => followers + 1);
    setIsSubmitting(true);
  };

  return (
    <Box>
      <ImageWrapper>
        <img src={bg_pictures} alt="pictures" width="308" height="168" />
      </ImageWrapper>

      <p>{followers}</p>
      <Button type="button" onClick={handleClickButton}>
        {isSubmitting ? "FOLLLOWING" : "FOLLOW"}
      </Button>
    </Box>
  );
};
export default UserCard;
