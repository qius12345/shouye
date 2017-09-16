//楼层图
var floorsImgs=$("[data-load=floorImgs]");
ajax("get","data/01-index/floor.php")
     .then(data=>{
       var floors=[...data];
       for(var i=0;i<floors.length;i++){
           floorsImgs[i].innerHTML = 
			    `<a href="${floors[i].href}">
					<img src="${floors[i].img}">
				</a>`;
       }       
      return new Promise(resolve=>resolve());	   
  })
//楼层内容
var floorsCont=$(".tips");
ajax("get","data/01-index/floorCont.php")
      .then(data=>{
	    var floors=[...data];
		//console.log(floorsCont[1]);
	    for(var i=0;i<floors.length;i++){
		    floorsCont[i].innerHTML=
				`<h2>
				    <a href="#">${floors[i].title}</a>
			     </h2>
		         <ul>
		 	        <li>
				       <a href="#">${floors[i].tips1}</a>
			        </li>
		 	        <li>
				      <a href="#">${floors[i].tips2}</a>
			        </li>
		 	        <li>
				      <a href="#">${floors[i].tips3}</a>
			        </li>
		 	        <li>
				      <a href="#">${floors[i].tips4}</a>
			        </li>
		         </ul>`;
		}
		return new Promise(resolve=>resolve());
	 })
