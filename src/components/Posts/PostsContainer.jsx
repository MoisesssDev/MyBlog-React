import styles from './PostsContainer.module.css';
import Post from './Post';
import Tags from '../Tags/Tags';

function PostsContainer() {
  const mainTags = ['javascript', 'ruby on rails', 'react', 'nodejs', 'python', 'docker']
  const posts = [
    {
      id: 1,
      title: 'O que é React?',
      content: 'React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
      urlImage: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    },
    {
      id: 2,
      title: 'O que é Ruby on Rails?',
      content: 'Ruby on Rails é um framework de desenvolvimento web escrito em Ruby.',
      urlImage: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    },
    {
      id: 3,
      title: 'O que é Nodejs?',
      content: 'Node.js é um ambiente de execução JavaScript server-side.',
      urlImage: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    },
    {
      id: 4,
      title: 'O que é Docker?',
      content: 'Docker é uma plataforma de software que permite a criação, o teste e a implantação de aplicativos rapidamente.',
      urlImage: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    },
    {
      id: 5,
      title: 'O que é Python?',
      content: 'Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
      urlImage: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    },
    {
      id: 6,
      title: 'O que é Javascript?',
      content: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível.',
      urlImage: 'https://www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
    }
  ];


  return (
    <>
      <div className={styles.posts}>
        {posts.map(post => (
          <Post key={post.id} title={post.title} content={post.content} urlImage={post.urlImage} />
        ))
        }
      </div>
      <div className={styles.tags}>
        <Tags tags={mainTags} />
      </div>
    </>
  );
}

export default PostsContainer;