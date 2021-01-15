import gallery from "./gallery-items.js"

console.log(gallery);


const photoGallery = gallery.map(element => {

    const liRef = document.createElement('li');
    const linkRef = document.createElement('a');
    const imageRef = document.createElement('img');


    liRef.classList.add('gallery__item')

    linkRef.classList.add('gallery__link');
    linkRef.href = element.original;

    imageRef.classList.add('gallery__image');
    imageRef.src = element.preview;
    imageRef.dataset.sourse = element.original;
    imageRef.alt = element.description;
    
    linkRef.append(imageRef);
    liRef.append(linkRef);

    
return liRef;
    }
    ) 

    console.log(photoGallery);

    const listRef = document.querySelector('.js-gallery');
    const openModalRef = document.querySelector('.lightbox__image');   
    const closeModalRef = document.querySelector('.lightbox__button');   

    listRef.append(...photoGallery);


    
   
   listRef.addEventListener('click', clickImage);

   function clickImage(event) {
       event.preventDefault();
            const x = document.querySelector('.js-lightbox');
       x.classList.add('is-open');
       console.log(event.target); 
       openModalRef.src = event.target.dataset.sourse;
       openModalRef.alt = event.target.alt;
   }


    closeModalRef.addEventListener('click', closeModal );

    function closeModal(event){
        const x = document.querySelector('.js-lightbox');
       x.classList.remove('is-open');
      
        openModalRef.src = '';
        openModalRef.alt = '';
    }



