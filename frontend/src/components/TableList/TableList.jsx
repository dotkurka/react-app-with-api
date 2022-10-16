import React from "react";
import PostTable from "../PostTable/PostTable";
import tableSX from "./TableListSX";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box,
} from "@mui/material/";

const TableList = ({ posts }) => {
    return (
        <Box sx={tableSX}>
            <TableContainer sx={tableSX.container} component={Paper}>
                <Table aria-label="simple table">
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
        </Box>
    );
};

export default TableList;
