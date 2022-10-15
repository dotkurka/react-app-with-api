import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const PostTable = ({ post, number }) => {
    return (
        <TableRow>
            <TableCell>{number}</TableCell>
            <TableCell>{post.name}</TableCell>
            <TableCell>{post.email}</TableCell>
            <TableCell>{post.age}</TableCell>
        </TableRow>
    );
};

export default PostTable;
