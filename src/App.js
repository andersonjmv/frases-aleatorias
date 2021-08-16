import {useState, useEffect} from 'react';
import Quotes from './components/Quotes'
import Spinner from './components/Spinner'   

const quoteInitial = {
    text: 'text',
    author: 'Author'
}

function App() {

  const [quote, setQuote] = useState(quoteInitial);
  const [loading, setLoading] = useState(false);

  const GetQuotes = async () => {
    setLoading(true);
    const url = "https://randomquotesfakeapi.herokuapp.com/frases";
    const res = await fetch(url);
    const data = await res.json();
    const random = data[Math.floor(Math.random() * data.length)];
    const { text, author } = random;

    setQuote({
      text,
      author,
    })
    setLoading(false);
  }


  useEffect(() => {
      GetQuotes();
  }, []);


  return (
    <div className="btn-container">
        <button className="button" onClick={() => GetQuotes()}>Siguiente</button>
        <div>{ loading ? <Spinner /> : <Quotes quote={quote}/> }</div>
    </div>
  );
}

export default App;
