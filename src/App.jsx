import React from 'react';
import UserList from './components/UserList';
import PostList from './components/PostList';
import UserDetail from './components/UserDetail';
import ProductList from './components/ProductList';

const App = () => {
  return (
    <div>
      <h1>axios 활용 예제</h1>
      <ProductList/>
      {/* <UserDetail/> */}
      {/* <UserList /> */}
      {/* <PostList /> */}
    </div>
  );
};

export default App;