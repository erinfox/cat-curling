
jQuery(function(){

  let cat = $('#cat');
  let targetImage = $('#target_img');
  let target = $('#target');
  let startBtn = $('#start_btn');
  let slowDownBtn = $('#slow_btn');
  let catImage = $('#cat_img');


  let differentCats = [
    ['crazyBabyCat','images/crazyBabyCat.png'],
    ['orangeCat','images/orangeCat.png'],
    ['sullyCat','images/sullyCat.png'],
    ['whatCat','images/whatCat.png']
  ];

  let newCat = function(){
    catImage.attr('src', differentCats[Math.floor(Math.random() * differentCats.length)][1]);
  }

  newCat();

  startBtn.click(function(){
    console.log('start');
//http://stackoverflow.com/questions/16699330/make-a-div-move-across-the-screen
       cat.animate({left: "+=1240"}, 1500);
       slowDownBtn.click(function() {
          console.log('slowdown');
          cat.stop();
          let collision = checkCollision(catImage, targetImage);
          console.log(collision);

          if(collision){
            $('#HIT').text('HIT!')
            setTimeout(function(){
              $('#HIT').remove();
            }, 2000)


            console.log("COLLISION DETECTION IS WORKING, FINALLY.")
          }
        });

  });

//COLLISION DETECTION
 let checkCollision = function(cat, target){
    // Determine the x coordinate of obj1
    cat_position = cat.offset();
    cat_x = cat_position.left;

    // Determine the x coordinate of obj2
    target_position = target.offset();
    target_x = target_position.left;

    // Determine the widths
    cat_width = cat.width();
    target_width = target.width();

    if(cat_x + cat_width > target_x &&
      target_x + target_width > cat_x){
      return true
    } else {
      return false;
    }
  }

});






