$(function(){
    const menuItem=$('nav').find('a');
    console.log('menuItem:',menuItem);
    const galleryItem=$('.gallery-item');
    console.log('galleryItem:', galleryItem);
    const overlayItem=$('.overlay');
    const imgWrapper=$('.img-wrapper');
    const closeButton=$('.close-button')
    console.log('closeButton:', closeButton);

    menuItem.click(function(e){
        e.preventDefault();
        menuItem.removeClass('selected');
        $(this).addClass('selected');
    })

    galleryItem.click(function(){
        imgWrapper.css({backgroundImage:"url(assets/" + $(this).data('img') + ")"});
        overlayItem.fadeIn();
    })

    imgWrapper.click(function(){
        e.stopPropagation();
    })

    closeButton.click(function(){
        overlayItem.fadeOut();
    })
}
)