 var bannerImgs=$("[data-load=bannerImgs]")[0],
      bannerInds=$("[data-load=bannerInds]")[0],
      timer=null;
  ajax("get","data/01-index/banner.php")
     .then(data=>{
       var banners=[...data];
       banners.push(banners[0]);
       var strImgs="";
       for(var img of banners){
         strImgs+=
           `<li>
             <a href="${img.href}">
               <img src="${img.img}">
             </a>
            </li>`
       }
      var strInds="<li></li>".repeat(banners.length-1);
      bannerImgs.innerHTML=strImgs;
      bannerImgs.style.width=1000*banners.length+"px";
      bannerInds.innerHTML=strInds;
      bannerInds.children[0].className="current";
      return new Promise(resolve=>resolve());	   
  })

    .then(()=>{
       var banner=document.getElementById("banner");
	   var bannerImg=document.getElementsByClassName("banner-img");
       //var ul=bannerImg.children;
	   var lis=bannerImgs.children;
	   var imgWidth=lis[0].offsetWidth;
	   //var ol=bannerImg.children[1];
	   var firstLi = bannerImgs.children[0];
       var arr = document.getElementById("arr");
       var arrLeft = arr.children[0];
       var arrRight = arr.children[1];

	    //克隆生成li
		/*var newUlLi=firstLi.cloneNode(true);
		bannerImgs.appendChild(newUlLi);*/
		//动态生成li
		/*for(var i=0;i<lis.length-1;i++){
		  var olLi=document.createElement("li");
		  olLi.innerHTML=i+1;
		  bannerInds.appendChild(olLi);
		}*/
		//焦点悬停动画
		//1.小方块的颜色切换
		var olLis=bannerInds.children;
		olLis[0].className="current";
        for(let i=0;i<olLis.length;i++){
		  olLis[i].onmouseover=function(){
		    for(var j=0;j<olLis.length;j++){
			  olLis[j].className="";
			}
			this.className="current";
			key=square=i;
			//2.图片切换
            animate(bannerImgs,-i*imgWidth); 
		  }
		}
		//加定时器
        var key=0;
		var square=0;
		var timer=null;
		timer=setInterval(autoPlay,3000);
		function autoPlay(){
		  key++;
          square++;
		  if(key>lis.length-1){
		    key=1;
			bannerImgs.style.left=0+"px";		  
		  }
		  animate(bannerImgs,-key*imgWidth);
		  square=square>olLis.length-1?0:square;
		  for(var i=0;i<olLis.length;i++){
		    olLis[i].className="";
		  }
		  olLis[square].className="current";
		}
  
        //清除定时器
		banner.onmouseover=function(){
		  arr.style.display="block";
		  clearInterval(timer);
		}
		banner.onmouseout=function(){
		  arr.style.display="none";
		  timer=setInterval(autoPlay,3000);
		}

		//右焦点
		arrRight.onclick=function(){
		  autoPlay();
		}
		//左焦点
		arrLeft.onclick=function(){
		  key--;
          square--;
		  if(key<0){
		    key=lis.length-2;
			bannerImgs.style.left=-(lis.length-1)*imgWidth+"px";		  
		  }
		  animate(bannerImgs,-key*imgWidth);
		  square=square<0?olLis.length-1:square;
		  for(var i=0;i<olLis.length;i++){
		    olLis[i].className="";
		  }
		  olLis[square].className="current";
		}
  
		
      //定时器的基本封装
        function animate(obj,target){
		  clearInterval(obj.timer);
		  var speed=target>obj.offsetLeft?20:-20;
		  obj.timer=setInterval(function(){
		    var val=target-obj.offsetLeft;
			obj.style.left=obj.offsetLeft+speed+"px";
			if(Math.abs(val)<Math.abs(speed)){
			  obj.style.left=target+"px";
			  clearInterval(obj.timer);
			}
		  },10);
		}
	})
    

