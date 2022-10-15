import React from "react";
import PostTable from "../PostTable/PostTable";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material/";

const TableList = ({ posts }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">id</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">email</TableCell>
                        <TableCell align="right">age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map((post, index) => (
                        <PostTable key={post.id} number={index + 1} post={post} />
                    ))}
                </TableBody>
                <tfoot></tfoot>
            </Table>
        </TableContainer>
    );
};

export default TableList;
