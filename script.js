


(function(){


  let differentCats = [
    ['crazyBabyCat','images/crazyBabyCat.png'],
    ['orangeCat','images/orangeCat.png'],
    ['sullyCat','images/sullyCat.png'],
    ['whatCat','images/whatCat.png']
  ];

 let newCat = function(){
    let $catImage= $('#cat_img');
    $catImage.attr('src', differentCats[Math.floor(Math.random() * differentCats.length)][1]);
  }

  newCat();





  let cat = $('#cat');
  let target = $('#target');

//MDN 2D Collison Detection

//       let hitCircle = function (cat,target){
//         return !(
//           ((cat.y + cat.height) < (target.y)) ||
//           (cat.y > (target.y + target.height)) ||
//           ((cat.x + cat.width) < target.x) ||
//           (cat.x > (target.x + target.width))

//           );
//       }

// hitCircle();


let $startGame = $('#start_btn');
let $slowDown = $('#slow_btn');

$startGame.click(function(){

//http://stackoverflow.com/questions/16699330/make-a-div-move-across-the-screen
      cat.animate({left: "+=1350"}, 2000);

      $slowDown.click(function() {
        cat.stop();
           $slowDown.click(function(){
             cat.animate({left: "+=1350"}, 5000);

           })



      })
     })

// catRight();

})()





