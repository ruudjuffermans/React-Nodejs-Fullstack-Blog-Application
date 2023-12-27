// import styles from "./style.module.css"
import posts from "../../assets/data/posts"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Container, { Content, Side } from "../../components/Container";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null)

  useEffect(() => {
    const obj = posts.find(obj => obj.id === parseInt(id));
    setPost(obj)
  }, [id])
  if (post == null) return null
  return (
    <Container>
      <Content>

        <div>{post.title}</div>
        <img style={{}} alt="post thumbnail" src={post.image} />
        {post.content}
      </Content>
      <Side>
        123
      </Side>
    </Container>
  )
}

export default Post