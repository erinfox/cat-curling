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


//ORIGINAL COLLISION DETECTION
  let checkCollision = function(obj1, obj2){
    // Determine the x coordinate of obj1
    obj1_position = obj1.offset();
    obj1_x = obj1_position.left;

    // Determine the x coordinate of obj2
    obj2_position = obj2.offset();
    obj2_x = obj2_position.left;

    // Determine the widths
    obj1_width = obj1.width();
    obj2_width = obj2.width();

    if(obj1_x + obj1_width > obj2_x &&
      obj2_x + obj2_width > obj1_x){
      return true
    } else {
      return false;
    }
  }
