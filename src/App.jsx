import './App.css'
import Button from './components/Button'
import Main from './components/Main'
import Section from './components/Section'
import Input from './components/Input'
// content / bgcolor

function App() {

  const sectionData={
    content:'섹션에 전달되는 데이터',
    bgColor:'skyblue'
  }

  const handleChange=(value)=>{
    console.log("입력중:",value)
  }

  return (
    <>
      <div>
        <Input
        inputValue={'hello react'}
        title={'input title'}
        placeholder={'입력하세요'}
        onChange={handleChange}
        />
        <hr />
        {/* <Section data={sectionData}/> */}
        <Section {...sectionData}/>
        <hr />
        <Main content='메인 영역입니다1' bgColor={'pink'}/>
        <Main content='메인 영역입니다2' bgColor={'pink'}/>
        <Main bgColor={'pink'}/>
        <hr />
        <Button text={'메일'} color={'red'}/>
        <Button text={'카페'} color={'blue'}>
          <span>자식요소 blue</span>
        </Button>
        <Button text={'블로그'} color={'green'}>
          <span>자식요소 green</span>  
        </Button>
        <Button text={'블로그'}/>
        <h1>hello react</h1>
      </div>
    </>
  )
}

export default App
