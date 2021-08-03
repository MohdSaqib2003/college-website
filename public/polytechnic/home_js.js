
   var menu_icon = document.getElementById("menu_icon");
   var out_nav =  document.getElementById("out_nav");

   function menu_toggle(){
     if(out_nav.style.display=="block"){
          out_nav.style.display="none";
          menu_icon.src="menu.png";
        }
        else{
          out_nav.style.display="block";    
          out_nav.style.position="relative";
          out_nav.style.top="-18px";
          menu_icon.src="cross_mark.png";
      }
   }
   
  var event = menu_icon.addEventListener("click",menu_toggle);
   menu_icon.removeEventListener("click",event);
