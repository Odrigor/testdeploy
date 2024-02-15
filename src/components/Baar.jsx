import React, { useEffect, useRef } from 'react';
import '/src/css/Baar.css';

const images = ["https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/768px-Microsoft_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/330px-Google_2015_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1200px-Intel_logo_%282006-2020%29.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/450px-Dell_Logo.svg.png",
"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ASUS_Logo.svg/750px-ASUS_Logo.svg.png"

];
const initialImages = images.slice(0, 5); // Las primeras 5 imágenes

function App() {
  const imageContainer = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (imageContainer.current) {
        imageContainer.current.scrollLeft += 1;

        // Si hemos llegado al final, reiniciamos la posición del scroll
        if (imageContainer.current.scrollWidth - imageContainer.current.scrollLeft === imageContainer.current.clientWidth) {
          imageContainer.current.scrollLeft = 0;
        }
      }
    }, 20); // Ajusta este valor para controlar la velocidad del desplazamiento

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="baar">
      <div ref={imageContainer} className="image-container">
        {images.concat(initialImages).map((src, index) => (
          <img key={index} src={src} alt="" />
        ))}
      </div>
    </div>
  );
}

export default App;
