/** cssplot.js **/
function createCssPlot(element_in,xsize_in,ysize_in)
{
  
  
  var rtn = function(element,xsize,ysize)
  {
    this.uid = (new Date()).getTime()+'_'+Math.round(100000*Math.random());
    var uid = this.uid;
    this.element = element;
    this.css0 = document.createElement('style');
    this.css0.className="css0_"+this.uid;
    this.css0.innerHTML='\n .table_'+this.uid+'{ padding:0px;margin:0px;border-spacing: 0px; }'
                        +' \n .table_'+this.uid+' td{width:1px;height:1px;}';
    this.element.appendChild(this.css0);
    this.css = document.createElement('style');
    this.css.className="css_"+this.uid;
    this.element.appendChild(this.css);
    this.table = document.createElement('table');
    this.table.className="table_"+this.uid;
    for(var i = 0;i<ysize;i++)
    {
      var row = document.createElement('tr');
      row.className='tr_'+this.uid+'_'+i;
      for(var j=0;j<xsize;j++)
      {
        var cell = document.createElement('td');
        cell.className='td_'+this.uid+'_'+j;
        row.appendChild(cell);
      }
      this.table.appendChild(row);
      
    }
    this.element.appendChild(this.table);
    var newcss = this.css;
    var newuid = this.uid;
    this.updatePlot=function(data,offset,keepprevious,bgcolor)
    {
      if(!keepprevious){keepprevious=false;}
      if(!bgcolor){bgcolor='grey';}
      var rtn = '';
      if(!offset){offset=0;}
      for(var k=0;k<data.length;k++)
      {
        var tri = offset + data[k];
        var tdi = k;
        rtn+='\n .tr_'+newuid+'_'+tri+' ';
        rtn+= ' .td_'+newuid+'_'+tdi+'{ background:'+bgcolor+';} \n';
      }
      if(!keepprevious)
      {
        newcss.innerHTML=rtn;
      }
      else
      {
        newcss.innerHTML+='\n'+rtn;
      }
    };
    this.ysize=ysize;
    this.xsize=xsize;
  };
  return new rtn(element_in,xsize_in,ysize_in);
}
