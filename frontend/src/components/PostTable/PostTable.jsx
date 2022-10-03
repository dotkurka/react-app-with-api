import React from "react";

const PostTable = ({ post }) => {
    return (
        <tr>
            <td>{post.id}</td>
            <td>{post.name}</td>
            <td>{post.email}</td>
            <td>{post.age}</td>
        </tr>
    );
};

export default PostTable;
