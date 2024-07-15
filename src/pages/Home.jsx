import Header from '../components/Header/Header';
import PostsContainer from '../components/Posts/PostsContainer';
import styles from '../App.module.css';

function Home() {
  return (
    <div>
      <>
        <Header autenticado={false}/>
        <main className={styles.mainContainer}>
          <PostsContainer />
        </main>
        
      </> 
    </div>
  );
}

export default Home;