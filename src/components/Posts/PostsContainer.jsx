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
      urlImage: 'https://cdn.thexcodes.com/imgs/reactJS.png'
    },
    {
      id: 2,
      title: 'O que é Ruby on Rails?',
      content: 'Ruby on Rails é um framework de desenvolvimento web escrito em Ruby.',
      urlImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png'
    },
    {
      id: 3,
      title: 'O que é Nodejs?',
      content: 'Node.js é um ambiente de execução JavaScript server-side.',
      urlImage: 'https://blog.geekhunter.com.br/wp-content/uploads/2021/02/1_mp91A9RzagntGGjBnwu4Yw.png'
    },
    {
      id: 4,
      title: 'O que é Docker?',
      content: 'Docker é uma plataforma de software que permite a criação, o teste e a implantação de aplicativos rapidamente.',
      urlImage: 'https://img.mandic.com.br/blog/2015/01/homepage-docker-logo.png'
    },
    {
      id: 5,
      title: 'O que é Python?',
      content: 'Python é uma linguagem de programação de alto nível, interpretada, de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.',
      urlImage: 'https://miro.medium.com/v2/resize:fit:1400/1*ycIMlwgwicqlO6PcFRA-Iw.png'
    },
    {
      id: 6,
      title: 'O que é Javascript?',
      content: 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível.',
      urlImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1DmLCy9PSJfFqO55mNTYOQLx3x8THsbokkw&s'
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