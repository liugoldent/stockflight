// 1.無視元件重新渲染
// react會自動監控useState -> 當state or prop改變時，會自動去更新整個component
// useRef -> 偏向背景執行
import React, { useRef, useState } from "react";
export default function Test() {
    console.log('refreshAll')
    const [count, setCount] = useState(1)
    const refCount = useRef(1) // 取得DOM元素，建立一個儲存這個元素的地方，透過useRef
    return (
        <div>
            <h1>畫面渲染次數 {count}</h1>
            <h1>不受畫面影響渲染的ref，{refCount.current}</h1>
            <h4>唯有畫面改變時，才會重新抓取最新的ref</h4>
            <h5>(點N下ref按鈕再點state看看)</h5>
            <button
                onClick={() => {
                    setCount((prev) => prev + 1);
                }}
            >
                使state改變
            </button>
            <button
                onClick={() => {
                    refCount.current++;
                }}
            >
                使ref.current改變, 不會rerender
            </button>
        </div>
    )
}