import styles from './PostsContainer.module.css';
import Post from './Post';
import Tags from '../Tags/Tags';

function PostsContainer() {
  const title = 'O que é Javascript?';
  const content = `JavaScript é uma linguagem de programação que permite a você implementar 
                  itens complexos em páginas web — toda vez que uma página da web faz mais 
                  do que apenas sentar lá e mostrar informações estáticas para você — mostrando 
                  atualizações de conteúdo em tempo real, mapas interativos, animações gráficas 
                  em 2D/3D, rolagem de vídeos, etc.`;
  const urlImage = 'https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg';

  return (
    <main className={styles.postsContainer}>
      <div className={styles.posts}>
        <Post title={title} content={content} urlImage={urlImage} />
        <Post title={title} content={content} urlImage={urlImage} />
        <Post title={title} content={content} urlImage={urlImage} />
        <Post title={title} content={content} urlImage={urlImage} />
      </div>
      <div className={styles.tags}>
        <Tags />
      </div>
    </main>
  );
}

export default PostsContainer;