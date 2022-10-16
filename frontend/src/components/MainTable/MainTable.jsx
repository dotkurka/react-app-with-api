import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../features/store/userSlice";
import AddUserForm from "../AddUserForm/AddUserForm";
import TableList from "../TableList/TableList";
import "./MainTable.scss";

const MainTable = () => {
    const posts = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div className="main-table">
            <TableList posts={posts} />
            <AddUserForm />
        </div>
    );
};

export default MainTable;
