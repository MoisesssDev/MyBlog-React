import Header from "./components/Header/Header"
import PostsContainer from "./components/Posts/PostsContainer"
import Footer  from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header autenticado={false}/>
      <PostsContainer />
      <Footer />
    </>
  )
}

export default App
