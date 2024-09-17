import React from 'react';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import data from './data';

const SingleArticle = () => {
  const { productId } = useParams();
  const singleProduct = data.find((product) => product.id == productId);
  const { title, snippet, length, date } = singleProduct;
  return (
    <>
      <div className='container'>
        <article className='post'>
          <h2>{title}</h2>
          <div className='post-info'>
            <span>{moment(date).format('dddd Do ,YYYY')}</span>
            <span>{length} min read</span>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati,
            mollitia. Ducimus porro maiores earum quia sint non quam ex aut,
            dolor aliquam nostrum consequatur. Sed aut repellendus harum
            nesciunt quos, dolorum nulla est dolor quis quam illum. Ducimus
            veritatis minima, dolor reprehenderit laudantium assumenda
            perspiciatis eligendi a explicabo deleniti.
          </p>
        </article>
        <Link to='/' className='btn'>
          Go Back
        </Link>
      </div>
    </>
  );
};

export default SingleArticle;
