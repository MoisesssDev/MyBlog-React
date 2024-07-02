import styles from './Post.module.css';

function Post() {
  const urlImage = 'https://storage.googleapis.com/medium-feed.appspot.com/images%2F9353691196%2F2f49650ed42b1-Para-que-e-usado-o-JavaScript.jpg';
  return (
    <article className={styles.post}>
      <div className={styles.content}>
        <h3>O que é Javascript?</h3>
        <p>
          JavaScript é uma linguagem de programação que permite a você implementar itens complexos 
          em páginas web — toda vez que uma página da web faz mais do que apenas sentar lá e mostrar 
          informações estáticas para você — mostrando atualizações de conteúdo em tempo real, mapas 
          interativos, animações gráficas em 2D/3D, rolagem de vídeos, etc.
        </p>
      </div>
      
      <img src={urlImage} alt="Imagem do javascript" />
    </article>
  );
}

export default Post;