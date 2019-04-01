import  React  from  'react';

const  GenerateQuotes = ({ selectQuote }) => {
    return (
        <div>
        <button  onClick={selectQuote}>Get a new quote</button>
        </div>
    );
};

export  default  GenerateQuotes;