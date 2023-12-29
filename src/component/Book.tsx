import React, { useState } from 'react'
import ViewDetail from './ViewDetail'

interface formValue {
  title: string,
  author: string,
  price: string;
}

export interface Books {
  id: number;
  title: string,
  author: string,
  price: string;
}

const Books = () => {
  const [books, setBooks] = useState<Books[]>([])
  const [formValue, setFormValue] = useState<formValue>({
    title: "",
    author: "",
    price: ""

  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { title, author, price } = formValue
    setBooks([
      ...books,
      { id: Math.random(), title:title, author:author, price:price }
    ])

  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormValue({
      ...formValue,
      [name]: value

    })
  }

  return (
    <div>
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
          <label>title</label>
          <input onChange={handleChange} value={formValue.title} type="text" name="title" />
          <label>Author</label>
          <input onChange={handleChange} value={formValue.author} type="text" name="author" />
          <label>price</label>
          <input onChange={handleChange} value={formValue.price} type="text" name="price" />

          <button type="submit">
            Add
          </button>
          <button type="submit">
            Update
          </button>
        </form>
      </div>
    <ViewDetail books={books}/>
    </div>
  )
}

export default Books;