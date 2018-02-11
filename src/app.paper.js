import * as paper from 'paper';
paper.install(window);
window.onload = function () {

    paper.setup('myCanvas');
    require('./draw.paper.js');
    
    
}
