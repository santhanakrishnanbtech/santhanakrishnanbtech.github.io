// Menu starts here 
$(document).ready(function () {
    $(".icon-menu").click(function () {
        $(".site-menu").removeClass("hidden");
        $(".icon-menu-close").removeClass("hidden");
    });

    $(".icon-menu-close").click(function () {
        $(".site-menu").addClass("hidden");
        $(".icon-menu-close").addClass("hidden");
    });
});

//-----------Home Page Tilt Effect---------------
// ( function( $ ) {

// 	"use strict";
 
//   $("#logo").tilt({
//     maxTilt: 15,
//     perspective: 700,
//     easing: "cubic-bezier(.03,.98,.52,.99)",
//     speed: 2500,
//     glare: true,
//     maxGlare: 10,
//     scale: 1.1
//   });
// }( jQuery ) );
// ---------------------------------------------
// Hero title animation check
// // Home page animation 
// const sk = document.querySelectorAll("#sk path");

// // console.log(sk);

// for(let i = 0; i<sk.length; i++){
//   console.log(`Letter ${i} is ${sk[i].getTotalLength()}`);
// }



// function autoType(elementClass, typingSpeed){
//   var thhis = $(elementClass);
//   thhis.css({
//     "position": "relative",
//     "display": "inline-block"
//   });
//   thhis.prepend('<div class="cursor" style="right: initial; left:0;"></div>');
//   thhis = thhis.find(".text-js");
//   var text = thhis.text().trim().split('');
//   var amntOfChars = text.length;
//   var newString = "";
//   thhis.text("|");
//   setTimeout(function(){
//     thhis.css({"opacity":"1", "color": "#a88038", "font": "13px/1.3 Monaco,MonoSpace", "font-size": "12px"});
//     thhis.prev().removeAttr("style");
//     thhis.text("");
//     for(var i = 0; i < amntOfChars; i++){
//       (function(i,char){
//         setTimeout(function() {        
//           newString += char;
//           thhis.text(newString);
//         },i*typingSpeed);
//       })(i+1,text[i]);
//     }
//   },1500);
// }

// $(document).ready(function(){
  // Now to start autoTyping just call the autoType function with the 
  // class of outer div
  // The second paramter is the speed between each letter is typed.   
//   autoType(".type-js",200);
// });




function setupTypewriter(t) {
  var HTML = t.innerHTML;

  t.innerHTML = "";

  var cursorPosition = 0,
      tag = "",
      writingTag = false,
      tagOpen = false,
      typeSpeed = 100,
    tempTypeSpeed = 0;

  var type = function() {
    
      if (writingTag === true) {
          tag += HTML[cursorPosition];
      }

      if (HTML[cursorPosition] === "<") {
          tempTypeSpeed = 0;
          if (tagOpen) {
              tagOpen = false;
              writingTag = true;
          } else {
              tag = "";
              tagOpen = true;
              writingTag = true;
              tag += HTML[cursorPosition];
          }
      }
      if (!writingTag && tagOpen) {
          tag.innerHTML += HTML[cursorPosition];
      }
      if (!writingTag && !tagOpen) {
          if (HTML[cursorPosition] === " ") {
              tempTypeSpeed = 0;
          }
          else {
              tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          }
          t.innerHTML += HTML[cursorPosition];
      }
      if (writingTag === true && HTML[cursorPosition] === ">") {
          tempTypeSpeed = (Math.random() * typeSpeed) + 50;
          writingTag = false;
          if (tagOpen) {
              var newSpan = document.createElement("span");
              t.appendChild(newSpan);
              newSpan.innerHTML = tag;
              tag = newSpan.firstChild;
          }
      }

      cursorPosition += 1;
      if (cursorPosition < HTML.length - 1) {
          setTimeout(type, tempTypeSpeed);
      }

  };

  return {
      type: type
  };
}

var typer = document.getElementById('typewriter');

typewriter = setupTypewriter(typewriter);

typewriter.type();

