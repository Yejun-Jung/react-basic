import React from 'react'

const Main = () => {
    const name = 'Alice'
    const age = 23


    const numbers = [10, 20, 30, 40]
    const obj = {
        city:'seoul',
        hobby:'programming'
    }
    const isLogin=false
    return (
        <div>
            <p>
                {isLogin? "로그인 되었습니다." : "로그아웃 되었습니다."}
            </p>
            <h2>main 입니다</h2>
            <p>내 이름은 {name}입니다.</p>
            <p>내 나이는 {age}살입니다.</p>
            <p>배열 꺼내서 하나만 넣어보기 {numbers[0]}</p>
            <p>
                나는 {obj.city}에서 살고 내 취미는 {obj.hobby}입니다.
            </p>
        </div>
    )
}

export default Main