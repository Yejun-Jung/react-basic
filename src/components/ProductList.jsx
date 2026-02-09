import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios'

const ProductList = () => {
    const [products, setProducts] = useState([])
    const [keyword, setKeyword] = useState('')
    const [selectedId, setSelectedId] = useState(null)

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then((res) => {
                setProducts(res.data.products)
            })
    }, [])

    const filteredProducts = useMemo(() => {
        return products.filter((item) =>
            item.title.toLowerCase().includes(keyword.toLowerCase())
        )
    }, [products, keyword])

    const selectedProduct = useMemo(() => {
        return products.find(p => p.id === selectedId)
    }, [products, selectedId])

    return (
        <div>
            <h2>상품 검색</h2>
            <input 
                type="text" 
                placeholder="상품명을 입력하세요"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
            />
            <hr />
            <button onClick={() => setSelectedId(1)}>Product-1</button>
            <button onClick={() => setSelectedId(2)}>Product-2</button>
            <button onClick={() => setSelectedId(3)}>Product-3</button>
            <button onClick={() => setSelectedId(null)}>초기화</button>

            {selectedProduct && (
                <div>
                    <h3>상세 정보</h3>
                    <p>이름: {selectedProduct.title}</p>
                    <p>가격: ${selectedProduct.price}</p>
                    <p>설명: {selectedProduct.description}</p>
                </div>
            )}

            <hr />
            <ul>
                {filteredProducts.map((item) => (
                    <li key={item.id} onClick={() => setSelectedId(item.id)}>
                        {item.title} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductList