import useAuth from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import css from './UserBar.module.css';

const UserBar = ({ toggleModal }) => {
  const { userData } = useAuth();
  const { avatarURL, name } = userData;
  const [usePhoto, setUserPhoto] = useState(avatarURL);
  const [userName, setUserName] = useState(name);


  useEffect(()=>{
    if(usePhoto !== avatarURL ) setUserPhoto(avatarURL)
  }, [avatarURL, usePhoto])

  useEffect(()=>{
    if(userName !== name) setUserName(name)
  },[name, userName])

  //useEffect for chack photo from redux
  return (
    <div className={css.littleStyles} onClick={() => toggleModal(prev=>!prev)} title={userName}>
      <div className={css.UserIconContainer}>
        <img className={css.Avatar} src={usePhoto} alt="User Avatar" />
      </div>
      <span className={css.userNameStyles}>{userName}</span>
    </div>
  );
};
export default UserBar;

// const littleStyles = {
//   height: '100%',
//   textAlign: 'center',
//   display: 'flex',
//   flexDirection: 'row',
//   flexWrap: 'no-wrap',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   boxSizing: 'border-box',
//   cursor: 'pointer',
//   textDecoration: 'none',
//   gap: '14px',
// };
// const Avatar = {
//   display: 'block',
//   height: '100%',
//   width: '100%',
// };

// const UserIconContainer = {
//   width: '44px',
//   height: '44px',
//   overflow: 'hidden',
//   borderRadius: '50%',
// };

// const UserIconContainer = {
//   width: '44px',
//   height: '44px',
//   overflow: 'hidden',
//   borderRadius: '50%',
// };

// const userNameStyles = {
//   color: '#F3F3F3',
//   fontFamily: 'Manrope, sans-serif',
//   fontSize: '16px',
//   fontStyle: 'normal',
//   fontWeight: '500',
//   lineHeight: '24px',
//   textOverflow: "ellipsis",
//   overflow: "hidden", 
//   width: "100px", 
//   whiteSpace: "nowrap",
// };
