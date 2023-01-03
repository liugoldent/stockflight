// 1.管理 focus、選擇文字、或影音播放。管理元素
// 2.觸發即時的動畫。
// 3.與第三方 DOM 函式庫整合。 React 官網連結

import React, { useRef } from "react";
export default function Test(){
    const inputRef = useRef(null) // 取得DOM元素，建立一個儲存這個元素的地方，透過useRef
    const focusInput = () => {
        // 透過inputRef.current 去做連結
        inputRef.current.focus()
        inputRef.current.style.backgroundColor = 'red'
    }
    const blurInput = () => {
        inputRef.current.style.backgroundColor = "orange";
        inputRef.current.blur()
    };
    return (
        <div>
            <h2 onClick={focusInput}>點我看看底下input會怎樣</h2>
            <br />
            {/* 下面這邊去做連結 */}
            <input type="password" ref={inputRef} />
            <button onClick={blurInput}>在點我看看</button>
        </div>
        );
}