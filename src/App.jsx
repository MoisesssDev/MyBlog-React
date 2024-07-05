import Header from "./components/Header/Header"
import PostsContainer from "./components/Posts/PostsContainer"
import Footer  from "./components/Footer/Footer"
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header autenticado={false}/>
      <main className={styles.mainContainer}>
        <PostsContainer />
      </main>
      <Footer />
    </>
  )
}

export default App
