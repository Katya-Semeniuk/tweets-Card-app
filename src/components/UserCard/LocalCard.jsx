// import logo from "../../assets/logo.png";
// import defaultAvatar from "../../assets/user_avatar.png";

// const UserCard = ({ avatar, name, tweets, followersOfUser }) => {
//   const numberOfFollowers = followersOfUser;
//   const formattedNumber = numeral(numberOfFollowers).format("0,0");
//   const initialFollowers = localStorage.getItem("followers") || formattedNumber;
//   const initialStatusAktiv = localStorage.getItem("statusAktiv") === "true";

//   const [statusAktiv, setStatusAktiv] = useState(initialStatusAktiv);
//   const [followers, setFollowers] = useState(initialFollowers);

//   useEffect(() => {
//     localStorage.setItem("followers", followers);
//     localStorage.setItem("statusAktiv", statusAktiv.toString());
//   }, [followers, statusAktiv]);

//   const handleClickButton = () => {
//     console.log("click button");
//     const incrementedFollowers = numeral(followers).value() + 1;
//     setFollowers(numeral(incrementedFollowers).format("0,0"));
//     setStatusAktiv(true);
//     updateFollowers();
//   };

//   return (
//     <Box>
//       <LogoImg src={logo} alt="Logo" width="76" height="22" />
//       <Bg_Images src={bg_pictures} alt="Pictures" width="308" height="168" />
//       <HorizontalLine />
//       <StyledAvatar>
//         <img src={avatar && defaultAvatar} alt="Avatar" />
//       </StyledAvatar>
//       <Wrapp>
//         <div>{name}</div>
//         <UserInfo>{tweets}TWEETS</UserInfo>
//         <UserInfo>{followers} FOLLOWERS</UserInfo>
//       </Wrapp>
//       {statusAktiv ? (
//         <ButtonAktiv type="button">FOLLOWING</ButtonAktiv>
//       ) : (
//         <Button type="button" onClick={handleClickButton}>
//           FOLLOW
//         </Button>
//       )}
//     </Box>
//   );
// };
// export default UserCard;
