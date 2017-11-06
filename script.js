setTimeout(function(){
$(document).ready(function() {
  console.log('All assets are loaded');
    $('#load-screen').addClass('loaded');
});
     $('.element').typed({
   strings: ['<i>Harshit Luthra</i>','<strong>Gaganjot Singh</strong>', 'Harshita Aggarwal'],
    typeSpeed: 0,
    backSpeed: 40,
         startDelay:2000,
    smartBackspace: true, // this is a default
    loop: true
  });
    
},3000);

    
