import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from '../../common/preloader/Preloader'

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
  
    <div>
      <div>
        <img className={s.img} src="https://www.mirf.ru/wp-content/uploads/2020/10/Jujutsu-Kaisen-2.jpg" alt='/ '></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='/' />
        icon + description
      </div>
    </div>
  );
};

export default ProfileInfo;
