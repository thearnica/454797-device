function createGrid(base, limit, pattern){
  var position = -base;  
  for(var i=0;i<limit;++i){
      var div = document.createElement('div');
      div.className='grid_div';

      div.style.left = position+'px';
      document.body.appendChild(div);
      position+=pattern[i%pattern.length];
  }
}