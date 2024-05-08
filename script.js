const homeContent = document.querySelector('.bio');
    function renderingHomeContent(){
      const para = document.createElement('div');
      para.classList.add('para');
      para.innerHTML = `
      <h2>Eunice Sebusi</h2>
      
      <h3>I am a Frontend Developer</h3>
        <p>
          Passionate frontend developer crafting digital experiences with
          pixel-perfect precision. From seamless user interactions, I bring
          creativity and code together by building captivating web solutions.
        </p>
      `
      homeContent.appendChild(para); 
      const image = document.createElement('div');
      image.classList.add('img');
      image.innerHTML = `
      <img src="images/gomi.jpg" alt="Profile Picture">
      `
      homeContent.appendChild(image);

    }
    renderingHomeContent();

    