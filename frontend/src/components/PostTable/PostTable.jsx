import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const PostTable = ({ post, number }) => {
    return (
        <TableRow>
            <TableCell align="right">{number}</TableCell>
            <TableCell align="right">{post.name}</TableCell>
            <TableCell align="right">{post.email}</TableCell>
            <TableCell align="right">{post.age}</TableCell>
        </TableRow>
    );
};

export default PostTable;
