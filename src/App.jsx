import './App.css'
import MenuButton from './components/MenuButton'
import InputCard from './components/InputCard'
import PostItem from './components/PostItem'
function App() {
  const menus = [
    { id: 1, label: "메일", color: "red" },
    { id: 2, label: "카페", color: "blue" },
    { id: 3, label: "블로그", color: "green" },
  ];
  const inputInfo = {
    title: "검색",
    placeholder: "검색어를 입력하세요",
  };

  const posts = [
    { id: 1, title: "React 시작하기", author: "홍길동" },
    { id: 2, title: "JS 문법 정리", author: "김철수" },
    { id: 3, title: "CSS 레이아웃", author: "이영희" },
  ];

  return (
    <div>
      <h1>메뉴</h1>
      {menus.map((menu) => (
      <MenuButton key={menu.id} {...menu} />
      ))}
      <hr />
      <InputCard {...inputInfo}/>
      {posts.map((post)=>(

      <PostItem key={post.id} {...post} />
      ))}
      <hr />
    </div>
  )
}

export default App