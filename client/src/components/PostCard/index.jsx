
import styles from "./style.module.css"
const PostCard = ({ title, content, category, date, image }) => {
    return (
        <div className={styles.postcard}>
            <img src={image} alt="blogpost thumbnail" />

            <div>{category}</div>
            <div>{title}</div>
            <div>{date}</div>
            {content}
            <div>{owner}</div>
        </div>
    )
}

export default PostCard