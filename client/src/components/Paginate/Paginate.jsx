import React from 'react';
import {Pagination, PaginationItem} from "@material-ui/lab"
import {Link} from "react-router-dom";

import useStyles from "./style.js";

const Paginate = () => {
    const classes = useStyles()
  return (
    <Pagination 
        class={{ul: classes.ul}} 
        count={5} 
        page={1} 
        variant="outlined" 
        color="primary" 
        renderItem={(item) => (
            <Link to={`/posts?page=${1}`}><PaginationItem {...item}/></Link>
        )}
    />
  )
}

export default Paginate