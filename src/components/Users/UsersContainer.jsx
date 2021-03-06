import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, setUsers, setCurrentPage, 
         setTotalUsersCount, toogleIsFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';  
import Preloader from '../common/preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSise}`, {
            withCredential: true
        })
        .then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        }) 
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSise}`, {
            withCredential: true
        })
        .then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {    
        return <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users users={this.props.users}
                      follow={this.props.follow}
                      unFollow={this.props.unFollow}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
                      currentPage={this.props.currentPage}
                      onPageChanged={this.onPageChanged}
        />
    </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toogleIsFetching})(UsersContainer);