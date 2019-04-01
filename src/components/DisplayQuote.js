import  React  from  'react';

const  DisplayQuote = ({ simpson }) => {
    return (
        <figure>
        <img
          src={simpson.image}
          alt={simpson.character}
        />
        <figcaption>
          <blockquote>
            {simpson.quote}
          </blockquote>
          <cite>{simpson.character}</cite>
        </figcaption>
      </figure>
    );
};

export  default  DisplayQuote;