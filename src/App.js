import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import searchImages from './api'; {/*Bu fonksiyon, belirli bir terimle ilgili resim aramak için kullanılacak olan API çağrısını gerçekleştirir.*/}

function App() {
  const [images,setImages] =useState([])

  const handleSubmit= async (term)=>{ {/*bu sayede ekrana deger girdiğimizde bu değer consola yazdırılır.
handleSubmit: arama tetiklendiğinde çağrılacak olan işlevi içerir.
Bu durumda, fonksiyon sadece terimi konsola yazdırır ve searchImages fonksiyonunu çağırarak belirli bir terimle resim araması yapar.*/}
  const result = await searchImages(term);
  setImages(result);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit}/> {/*searchHeader: arama işlemlerini gerceklestirmemizi saglar*/}
    </div>
  );
}

export default App;
