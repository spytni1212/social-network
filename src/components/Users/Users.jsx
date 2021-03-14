import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css'
import userPhoto from '../../assets/images/no_avatar.png'
import { usersAPI } from '../../api/api';

let Users = (props) => {
    //let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // так как юзеров на сервере очень много, чтобы не делать правильную
    // пагинацию я pagesCount присвоил 10
    let pagesCount = 10;
    
    let pages = [];
    
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div>
            <div>
                {pages.map(page => {
                    return <span className={props.currentPage === page && s.selectedPage}
                                 key={page}
                                 onClick={(e) => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            <div>
            {
                props.users.map(user => <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                                <img src={user.photos.small != null ?  user.photos.small : userPhoto}
                                    className={s.userPhoto} alt='/' />
                            </NavLink>
                            
                        </div>
                        <div>
                            {user.followed
                                ? <button onClick={() => {
                                    usersAPI.getUnfollow(user.id).then(data => {
                                        if (data.resultCode === 0 ) {
                                            props.unFollow(user.id)
                                        }
                                    }); 

                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    
                                    usersAPI.getFollow(user.id).then(data => {
                                        if (data.resultCode === 0 ) {
                                            props.follow(user.id)
                                        }
                                    });     
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                        <span>
                            <div>{'user.location.country'}</div>
                            <div>{'user.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
            </div>
            
        </div>
    )
}

export default Users;