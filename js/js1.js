var anime2 = document.querySelector("aside .anime1");
var anime3 = document.querySelector("aside .news_back2");


anime2.onclick=function(){
  anime2.innerHTML="Онгоинг (от английского on going) - аниме-сериал, который в данный момент выходит и траслируется по японскому телевидению. Онгоинги выходят раз в три месяца (по сезонам: зимний, весенний, летний и осенний). Обычно, новые серии выходят раз в неделю, но бывают и исключения.";
  anime3.style.display="block";
}


anime3.onclick=function(){
  anime2.innerHTML="Онгоинг (от английского on going) - аниме-сериал, который в данный момент выходит и траслируется по японскому телевидению...";
  anime3.style.display="none";
}