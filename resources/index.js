$(function(){
    const menuItem=$('nav').find('a');
    console.log('menuItem:',menuItem);
    const galleryItem=$('.items-wrapper');
    console.log('galleryItem:', galleryItem);
    const overlayItem=$('.overlay');
    const imgWrapper=$('.img-wrapper');
    const closeButton=$('.close-button')
    console.log('closeButton:', closeButton);
    const cartWrapper=$('.cart-wrapper');
    console.log('cartWrapper', cartWrapper);
    const pictureSelected=$('.image-wrapper');

     productCoatObj = products.coats;
     console.log('productCoatObj', productCoatObj);


     getproductHtml=function(index,productCoatObj) {
           return `<div data-img="coat-1.jpg" class="gallery-item product1" data-index=${index} data-id=${productCoatObj.id}>
           <div class="image-wrapper" style="background-image: url(assets/coats/${productCoatObj.imgUrl})"></div>
           <div class="product-details">
               <p>${productCoatObj.name}</p>
               <p>${productCoatObj.currency} ${productCoatObj.price}</p>
           </div>
       </div>
           `
     };
       for (let i=0; i < products.coats.length; i++){
           let productObj=products.coats[i];
           productHtml=getproductHtml(i, productObj);
           galleryItem.append(productHtml);
       } 

     galleryItem.delegate('.image-wrapper',"click", function(){
         const id= $(this).parents('.gallery-item').data('id');
         const index= $(this).parents('.gallery-item').data('index');
         console.log('index', index);
         console.log(id);

         if (pictureSelected) {
             overlayItem.fadeIn();
         }
 
         const productIndex= products.coats[index];
          console.log("productItem", productIndex); 
        cartWrapper.css({backgroundImage:"url(assets/coats/" + productIndex.imgUrl + ")"});
       $('.overlay-product .name').text(productIndex.name);
       $('.overlay-product .price').text(productIndex.currency + productIndex.price);
       $('.overlay-product .composition').text(productIndex.composition);
       $('.overlay-product .country').text(productIndex.country);
       $('.overlay-product .care').text(productIndex.care);
     })

    closeButton.click(function(){
        overlayItem.fadeOut();
    })
    
}
)