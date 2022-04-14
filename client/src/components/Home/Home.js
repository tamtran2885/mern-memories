import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Container, Grow, Grid, Paper } from "@material-ui/core";

import Posts from "../Posts/Posts.js";
import Form from "../Form/Form.js";
import Paginate from "../Paginate/Paginate.jsx";

import { getPosts } from "../../actions/posts.js";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container>
        <Grid
          //   className={classes.mainContainer}
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Paginate />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
