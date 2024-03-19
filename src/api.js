import axios from 'axios'; {/*http isteklerini gerceklestirmeyi saglar */}

const searchImages=async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID vHyy8RzDGGtYAjybVqs6KCJNutFDr--hsvVXhHmgfNU' 
      },/*Unsplash tarafından sağlanan bir API anahtarını içerir. */
      params:{
        query:term, /*query parametresi kullanıcı tarafından girilen arama terimini içerir. */
      },
      /*Asenkron fonksiyonlar, işlemlerini tamamlamak için diğer işlemlerin tamamlanmasını beklerler. Bir asenkron fonksiyon, herhangi 
bir zaman diliminde bir Promise döndürür. await: await, yalnızca async fonksiyonların içinde kullanılabilir. await, bir Promise'in 
çözülmesini bekler ve bu çözülme sonucunda, Promise'in değerini döndürür. await ifadesi, asenkron işlemin tamamlanmasını beklerken,
diğer işlemlerin işlemesine izin verir, yani programın iş akışını duraklatmaz. */
    });
    return response.data.results;
  };

  export default searchImages; /*searchImages fonksiyonunu dışa aktarıyoruz, böylece bu modülü başka dosyalarda kullanabiliriz.*/

