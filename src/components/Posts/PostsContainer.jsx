import styles from './PostsContainer.module.css';
import Post from './Post';

function PostsContainer() {
  return (
    <main className={styles.postsContainer}>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}

export default PostsContainer;