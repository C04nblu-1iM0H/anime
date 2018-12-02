var news = document.querySelector("section article .news1");
var news_content = document.querySelector("section article .news_content1");
var news_back = document.querySelector("section article .news_back1");

var news2 = document.querySelector("section article .news2");
var news_content2 = document.querySelector("section article .news_content2");
var news_back2 = document.querySelector("section article .news_back2");

var news3 = document.querySelector("section article .news3");
var news_content3 = document.querySelector("section article .news_content3");
var news_back3 = document.querySelector("section article .news_back3");

var news4 = document.querySelector("section article .news4");
var news_content4 = document.querySelector("section article .news_content4");
var news_back4 = document.querySelector("section article .news_back4");

//var Shuumatsu = document.querySelector("section article figure .Shuumatsu");

/*Shuumatsu.onclick = function(){
  Shuumatsu.innerHTML =" Shuumatsu Nani Shitemasu ka? Isogashii desu ka? Sukutte Moratte Ii desu ka? Sukamoka";
}*/

news.onclick = function(){
  news.style.display="none";
  news_content.style.display="block";
}

news_back.onclick=function(){
  news.style.display="block";
  news_content.style.display="none";
}

news2.onclick = function(){
  news2.style.display="none";
  news_content2.style.display="block";
}

news_back2.onclick=function(){
  news2.style.display="block";
  news_content2.style.display="none";
}

news3.onclick = function(){
  news3.style.display="none";
  news_content3.style.display="block";
}

news_back3.onclick=function(){
  news3.style.display="block";
  news_content3.style.display="none";
}

news4.onclick = function(){
  news4.style.display="none";
  news_content4.style.display="block";
}

news_back4.onclick=function(){
  news4.style.display="block";
  news_content4.style.display="none";
}