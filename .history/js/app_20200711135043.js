$(document).ready(function(){
  $("#myTooltips a").tooltip({
      template : '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>'

      title: "<SHARE</span>
      <img src="./images/icon-facebook.svg" alt="facebooklogo"> 
      <img src="./images/icon-twitter.svg" alt=""> 
      <img src="./images/icon-pinterest.svg" alt="">",  
      html: true
  });
});