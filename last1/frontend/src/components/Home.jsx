import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import axios from "axios";
import '../components/home.css';
import { red } from "@mui/material/colors";

function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`);
      fetchPosts();
    } catch (err) {
      console.error("Error deleting post:", err);
    }
  };

  const handleUpdate = async (post) => {
    const newTitle = prompt("New title:", post.title);
    const newImage = prompt("New image URL:", post.image);
    const newCategory = prompt("New category:", post.category);

    if (newTitle && newImage && newCategory) {
      try {
        await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
          title: newTitle,
          image: newImage,
          category: newCategory,
        });
        fetchPosts();
      } catch (err) {
        console.error("Error updating post:", err);
      }
    }
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card>
              <CardMedia
                component="img"
                height="180"
                image={post.image}
                alt={post.title}
              />
              <CardContent>
                <Typography variant="subtitle2" color="text.secondary">
                  {post.category}
                </Typography>
                <Typography variant="h6" component="div" sx={{ marginTop: 1 }}>
                  {post.title}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  sx={{backgroundColor:"red"}}
                  onClick={() => handleDelete(post._id)}
                >
                  DELETE
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{ backgroundColor: "#9C270" }}
                  onClick={() => handleUpdate(post)}
                >
                  UPDATE
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
