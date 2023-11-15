import React from 'react'
import data from './Data.json'
import { useState } from "react";

function Emoji2() {
  const [collection, setCollection] = useState(data);
  return (
    <>
      <input onChange={(e) => {
        setCollection(data.filter((item) => {
          item.title.includes(e.target.value)
        }))
      }}
        type="text"
      />
      {collection.map((d) => {
        const { title, symbol, keywords } = d
        return (
          <>
            <div key={title}>
              <div>{title}</div>
              <div>{symbol}</div>
              <div>{keywords}</div>
            </div>
          </>
        )
      })}
    </>
  )
}

export default Emoji2