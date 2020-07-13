
//used ref https://www.youtube.com/watch?v=jaBLwm_0QAE

const pageSections = document.querySelectorAll("section");
const navBar = document.getElementById("navbar__list");
var doc = document.getElementById("navbar__list");
const head=document.getElementById("hero");


// build the nav


for (let i = 0; i < pageSections.length; i++) {
    const liElem = document.createElement("li");
    const sectionTags = document.getElementsByTagName("section");
    //console.log(sectionTags)
    //liElem.className = "nav__link";
    liElem.innerHTML = `<a>${sectionTags[i].id}</a>`;
    navBar.appendChild(liElem);
    liElem.classList.add(sectionTags[i].id);
    liElem.setAttribute("name", sectionTags[i].id);
  }
  
  // Scroll to section on any menu link click
$('li').click(function(e) {
let position = $(this).attr("class");
//console.log(position);
var po = $('#'+ position).offset().top;
//console.log(po);
$("body, html").animate({
		scrollTop: po
	} /* speed */ );
});

  
  //add class activeItem to nav item when clicked and remove it from others
  $(document).ready(function(){
        $('ul li a').click(function(){
        //$(this).toggleClass("activeItem");
       $('li a').removeClass("activeItem");
        $(this).addClass("activeItem");
        
       
        });
        });
  
  //jquery function var visible = $(#element).visible( detectPartial );
 $.fn.isInViewport = function () {
  
   var docViewTop = $(window).scrollTop(),
        docViewBottom = docViewTop + $(window).height(),
        elemTop = $(this).offset().top,
     elemBottom = elemTop + $(this).height();
   //Is more than half of the element visible
   return ((elemTop + ((elemBottom - elemTop)/2)) >= docViewTop && ((elemTop + ((elemBottom - elemTop)/2)) <= docViewBottom));

    /*var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(this).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
*/
}; 
  
// When the user scrolls down 60px from the top of the document, show the button  
function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  //Get the button
var mybutton = document.getElementById("Btn");


//scrolling actions

$(window).scroll(function () {
 scrollFunction();
head.classList.remove('hiddenNavbar');

//to calc not scrolling time
 clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {head.classList.add('hiddenNavbar');
        //console.log("Haven't scrolled in 2500ms!")
        }, 2500));
     //add class activeItem to nav item when scrolling to it's corres. section
     //and class active to the inviewport section

           $(pageSections).each(function(i){
            //console.log("section ",pageSections[i],"is in view");
          if ($(pageSections[i]).isInViewport()) {
          $(pageSections[i]).addClass('active '); 
          let x=`${pageSections[i].id}`;
          $('.' + x).addClass("activeItem");  

                }    else {
        //  Remove class
        $(pageSections[i]).removeClass('active');
        let y=`${pageSections[i].id}`;
        $('.' + y).removeClass("activeItem");
        
           
         }
         });
           }); 
///nav btn
$(document).ready(function(){
  
    $('.navBtn').click(function(){

      if($('.navBtn').text() == "*"){
        $('.navBtn').text("x");
      }else{
        $('.navBtn').text("*");
      }
      
      $("li").toggle("slow");
    });  
});
