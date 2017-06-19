$(document).ready(function() {
  
  
  //modal functions
  function openModal() {
    $('.modal-overlay').css('display', 'block');
    $('.modal').css('display', 'flex');
    $('.modal-link').css('display', 'none');
  }
  
  function closeModal() {
     $('.modal-overlay').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal-link').css('display', 'block');
  }
  
  $('.modal-link').click(function() {
    openModal();
  });
  
  $('#close').click(function() {
    closeModal();
  });
  
  $('.modal-overlay').click(function() {
    closeModal();
  });
    
  
});