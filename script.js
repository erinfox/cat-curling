
jQuery(function(){

  let cat = $('#cat');
  let target = $('#target');
  let $startGame = $('#start_btn');
  let $slowDown = $('#slow_btn');


  let differentCats = [
    ['crazyBabyCat','images/crazyBabyCat.png'],
    ['orangeCat','images/orangeCat.png'],
    ['sullyCat','images/sullyCat.png'],
    ['whatCat','images/whatCat.png']
  ];

         let newCat = function(){
            let $catImage = $('#cat_img');
            $catImage.attr('src', differentCats[Math.floor(Math.random() * differentCats.length)][1]);
         }

  newCat();


  $startGame.click(function(){
    console.log('start');
//http://stackoverflow.com/questions/16699330/make-a-div-move-across-the-screen
       cat.animate({left: "+=1240"}, 2000);
         $slowDown.click(function() {
          console.log('slowdown');
           cat.stop();

         })
  });

// http://jsfiddle.net/ryanoc/TG2M7/

function getPosition(cat){
  let cat = $('#cat');
  let pos = cat.position();
  let width = cat.width();
  let height = cat.height();
  return [[pos.left, pos.let + width], [pos.top +pos.top + height]];
}

function comparePositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(){
  var cat = $("#cat")[0];
  var pos = getPositions(cat);

  var pos2 = getPositions(this);
  var horizontalMatch = comparePositions(pos[0], pos2[0]);
  var verticalMatch = comparePositions(pos[1], pos2[1]);
  var match = horizontalMatch && verticalMatch;
  if (match) { $("#target").append("<p>COLLISION !!!</p>"); }
}


});












// let checkCollision = function(){
//   if(cat.style === target.style){
//     alert("collision");
//   }
// }

// let catPosition = $('#cat').position();
// let targetPosition = $('#target').position();
// let widthCat = $('#cat').width();
// let widthTarget = $('#target').width();
// let heightCat = $('#cat').height();
// let heightTarget = $('#target').height();

// let catPosition = cat.getBoundingClientRect();
// console.log(catPosition.top, catPosition.right, catPosition.bottom, catPosition.left);
// let targetPosition = target.getBoundingClientRect();

// if (catPosition === targetPosition) {
//   alert('collision detected')
// }



// https://gist.github.com/jtsternberg/c272d7de5b967cec2d3d
// let colliding = function(cat,target){
//   let catOffset = cat.offset();
//   var catHeight = cat.outerHeight( true );
//   var catWidth = cat.outerWidth( true );
//   var catTop  = cat.top + catHeight;
//   var catLeft = cat.left + catWidth;

//   var targetOffset = target.offset();
//   var targetHeight = target.outerHeight( true );
//   var targetWidth = target.outerWidth( true );
//   var targetTop = targetOffset.top + targetHeight;
//   var targetLeft= targetOffset.left + targetWidth;
// }

// colliding();


//   let target_left = 400;
//   let catleft = 0;

// //mo
//     window.addEventListener($startGame,function(){
//       catleft +=50;
//       checkCollision();
//     });
//     checkCollision = function(){
//       cat.style.left = catleft + 'px';
//       console.log(cat.style.left);
//       if(cat.style.left === target_left + 'px'){
//         alert('collision!!!');
//       }
//     }


//           })



//MDN 2D Collison Detection


// let catTarget = {x: 5, y: 5, width: 50, height: 50}
// let targetTarget = {x: 20, y: 10, width: 10, height: 10}
// if (catTarget.x < targetTarget.x + targetTarget.width &&
//   catTarget.x + catTarget.width > targetTarget.x &&
//    catTarget < targetTarget.y + targetTarget.height &&
//    catTarget.height + catTarget.y > targetTarget.y) {
//     // alert("Collision Detected!")

// }

// if (5 < 30 &&
//     55 > 20 &&
//     5 < 20 &&
//     55 > 10) {
//     // alert("Collision Detected!")
//   console.log("collision");
// }


//circle collision

// let cat = catTarget
// let target = targetTarget
// let catTarget = {radius: 20, x: 5, y: 5};
// let targetTarget = {radius: 12, x: 10, y: 5};

// let dx = catTarget.x - targetTarget.x;
// let dy = catTarget.y - targetTarget.y;
// let distance = Math.sqrt(dx * dx + dy * dy);

// if (distance < catTarget.radius + targetTarget.radius) {
//     // collision detected!
//     console.log("collision");





// function collision(cat, target) {
//       var x1 = cat.offset().left;
//       var y1 = cat.offset().top;
//       var h1 = cat.outerHeight(true);
//       var w1 = $cat.outerWidth(true);
//       var b1 = y1 + h1;
//       var r1 = x1 + w1;
//       var x2 = target.offset().left;
//       var y2 = target.offset().top;
//       var h2 = target.outerHeight(true);
//       var w2 = target.outerWidth(true);
//       var b2 = y2 + h2;
//       var r2 = x2 + w2;

//       if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
//       return true;

//     }
//     collision();




// let collision = function(){
// if (cat.x < target.x + target.width  && cat.x + cat.width  > target.x &&
// cat.y < target.y + target.height && cat.y + cat.height > target.y) {
// return alert('collision!!!!');

//}}



// collisionDetection = function(){

// let catCollision = {radius: 200, x: 50, y: 50};
// let targetCollision = {radius: 120, x: 100, y: 50};

// let dx = catCollision.x - targetCollision.x;
// let dy = catCollision.y - targetCollision.y;
// let distance = Math.sqrt(dx * dx + dy * dy);

// if (distance < catCollision.radius + targetCollision.radius) {
//     // alert("collision");
//      // console.log("collision");
//    }}


// collisionDetection = function(){
// if(cat.position === target.position) {
// let dx = cat.x - target.x;
// let dy = cat.y - target.y;
// let distance = Math.sqrt(dx * dx + dy * dy);
// if (distance < cat.size + target.size) {
//     // alert("collision");
//      console.log("collision");
//   }}}



