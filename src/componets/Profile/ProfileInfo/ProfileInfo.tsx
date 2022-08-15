import React from 'react';
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profile-reducer";

type ProfileInfoPropsType = {
    profile:  ProfileType
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
        return (
            <Preloader/>
        )
    }

    return (
        <div>
            <div>
                <img
                    src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300"
                    alt=""/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt={'photo user'}/>
                ava + description
            </div>
        </div>
    )
}