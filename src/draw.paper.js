//Create a drawing tool:
    var tool = new Tool();
    var myPath;
    // var path = new Path.Rectangle(view.center, [100, 100]);
    // path.strokeColor = 'black';
    // view.onFrame = function(event) {
    // 	// On each frame, rotate the path by 3 degrees:
    // 	path.rotate(3);
    // }
   
  
    // This function is called whenever the user
    // clicks the mouse in the view:
    tool.onMouseDown = function(event) {
	// Add a segment to the path at the position of the mouse:
	myPath = new Path();
	myPath.strokeColor = 'black';
	myPath.add(event.point);

    }
    tool.onMouseDrag = function(event) {
	myPath.add(event.point);
    }

    tool.onMouseUp = function(event) {
	myPath.simplify(10);
    }
