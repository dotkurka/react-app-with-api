import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostTable from "../PostTable/PostTable";
import { getUser } from "../../features/store/userSlice";
import AddUserForm from "../AddUserForm/AddUserForm";

const MainTable = () => {
    const posts = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>age</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <PostTable key={post.id} post={post} />
                    ))}
                </tbody>
                <tfoot></tfoot>
            </table>
            <AddUserForm />
        </div>
    );
};

export default MainTable;
