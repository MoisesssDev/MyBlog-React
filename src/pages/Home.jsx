import Header from '../components/Header/Header';
import Footer from '../components/Footer';
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
        <Footer />
      </> 
    </div>
  );
}

export default Home;