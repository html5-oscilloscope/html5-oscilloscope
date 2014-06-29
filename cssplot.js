/** cssplot.js **/
function createCssPlot(elemen_in,xsize_in,ysize_in)
{
  var rtn = function(element,xsize,ysize)
  {
    
    this.ysize=ysize;
    this.xsize=xsize;
    this.element=element;
  };
  return new rtn(element_in,xsize_in,ysize_in);
}
