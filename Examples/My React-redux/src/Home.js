import "./App.css";

function Home({ allPosts }) {
  //   console.log(renderedPosts);
  return (
    <div className="posts">
      {allPosts.map((post) => (
        <div className="post" key={post.id}>
          <p className="title">
            <strong>{post.title}</strong>
          </p>
          <p className="content">{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
