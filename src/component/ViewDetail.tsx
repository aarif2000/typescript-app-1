import React from 'react';

interface Book {
  title: string;
  author: string;
  price: string;
}

interface ViewDetailsProps {
  books: Book[];
}

const ViewDetails: React.FC<ViewDetailsProps> = ({ books }) => {
  return (
    <div className='view-container'>
      <table>
        <thead>
          <tr>
            <td>title</td>
            <td>author</td>
            <td>price</td>
          </tr>
        </thead>
        <tbody>
          {books.map((item:{title:string, author:string,price:string}) => (
            <tr>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewDetails;