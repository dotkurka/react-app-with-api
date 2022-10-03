import React from "react";
import { useSelector } from "react-redux";
import PostTable from "../PostTable/PostTable";

const MainTable = () => {
    const posts = useSelector((state) => state.postTable);

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
        </div>
    );
};

export default MainTable;
