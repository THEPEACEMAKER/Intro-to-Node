import "./App.css";
import { Fragment, useEffect } from "react";
import SearchBar from "./SearchBar";
import Posts from "./Posts";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { setPosts, setRenderedPosts, setSearchTerm } from "./postsSlice";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { allPosts, renderedPosts, searchTerm } = useSelector(
    (state) => state.posts
  );

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPosts(data));
      })
      .catch((error) => console.error(error));
  });

  useEffect(() => {
    if (!searchTerm) {
      dispatch(setRenderedPosts([]));
      return;
    }

    const filteredPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setRenderedPosts(filteredPosts));
  }, [searchTerm, allPosts, dispatch]);

  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <Link to="/">All Posts</Link>
          </li>
          <li>
            <Link to="/search">Search Posts</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home allPosts={allPosts} />} />
        <Route
          path="/search"
          element={
            <Fragment>
              <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={(term) => dispatch(setSearchTerm(term))}
              />
              <Posts renderedPosts={renderedPosts} />
            </Fragment>
          }
        />
      </Routes>
    </Fragment>
  );
}

export default App;
