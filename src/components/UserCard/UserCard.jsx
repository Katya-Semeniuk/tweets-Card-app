import { useState, useEffect } from "react";
import {
  Box,
  Button,
  ButtonAktiv,
  LogoImg,
  Bg_Images,
  HorizontalLine,
  StyledAvatar,
  Wrapp,
  UserInfo,
} from "./UserCard.styled";
import numeral from "numeral";
import bg_pictures from "../../assets/picture2 1.png";
import logo from "../../assets/logo.png";
import defaultAvatar from "../../assets/user_avatar.png";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  const { id, avatar, tweets, followers } = user;

  const avatarUrl = avatar || defaultAvatar;
  const formattedNumber = numeral(followers).format("0,0");

  const initialFollowers =
    localStorage.getItem(`followers_${id}`) || formattedNumber;
  const initialStatusAktiv =
    localStorage.getItem(`statusAktiv_${id}`) === "true";
  const [followersOfUser, setFollowersOfUser] = useState(initialFollowers);
  const [statusButtonAktive, setstatusButtonAktive] =
    useState(initialStatusAktiv);

  useEffect(() => {
    localStorage.setItem(`followers_${id}`, followersOfUser);
    localStorage.setItem(`statusAktiv_${id}`, statusButtonAktive.toString());
  }, [followersOfUser, statusButtonAktive, id]);

  const handleClickButton = () => {
    if (statusButtonAktive) {
      const decrementedFollowers = numeral(followersOfUser).value() - 1;
      setFollowersOfUser(numeral(decrementedFollowers).format("0,0"));
      setstatusButtonAktive(false);
    } else {
      const incrementedFollowers = numeral(followersOfUser).value() + 1;
      setFollowersOfUser(numeral(incrementedFollowers).format("0,0"));
      setstatusButtonAktive(true);
    }
  };
  return (
    <Box>
      <LogoImg src={logo} alt="Logo" width="76" height="22" />
      <Bg_Images src={bg_pictures} alt="Pictures" width="308" height="168" />
      <HorizontalLine />
      <StyledAvatar>
        <img src={avatarUrl} alt="Avatar" />
      </StyledAvatar>
      <Wrapp>
        <UserInfo>{tweets} TWEETS</UserInfo>
        <UserInfo>{followersOfUser} FOLLOWERS</UserInfo>
      </Wrapp>
      {statusButtonAktive ? (
        <ButtonAktiv type="button" onClick={handleClickButton}>
          FOLLOWING
        </ButtonAktiv>
      ) : (
        <Button type="button" onClick={handleClickButton}>
          FOLLOW
        </Button>
      )}
    </Box>
  );
};
export default UserCard;

UserCard.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    avatar: PropTypes.string,
    tweets: PropTypes.number,
    followers: PropTypes.number,
  }),
};
