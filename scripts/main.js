let myHeading = document.querySelector("h1");
myHeading.textContent="hello world";

//点击有弹窗
//document.querySelector("html").addEventListener("click",function(){
//    alert("honorpos")
//})



//图像切换器
let myImg=document.querySelector("img");
document.querySelector("img").addEventListener("click",function(){
    if(myImg.getAttribute("src")==="images/firefox-icon.png"){
    myImg.setAttribute("src","images/05.png");}
    else{
        myImg.setAttribute("src","images/firefox-icon.png");
    }
});


////图像切换器循环
//var myArry=new Array("images/firfox-icon.png","images/QR.png","images/wechat");
//let myImg=document.querySelector("img");
//let i=0;
//document.querySelector("img").addEventListener("click",function(){
//        if(myImg.getAttribute("src")===arry[i]){
//            myImg.setAttribute("src")=arry[i+1];
//        }
//        if(i=arry.length){
//            i=0;
//        }
//    });




//个性化输入名字