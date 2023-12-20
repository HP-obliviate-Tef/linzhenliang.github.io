var btn = document.getElementById("btn");
var img = document.getElementById("popimg");


    btn.onclick = function() {
                // 3. 事件驱动程序
                if(btn.innerHTML === "点击免试录取"){
                    img.style.display = "block";
                    btn.innerHTML = "长点心吧！傻瓜研究生";
                    // isShow = false;
                } else {
                    img.style.display = "none";
                    btn.innerHTML = "点击免试录取";
                    // isShow = true;
                }
            }
var face=document.getElementById("face");
var img2=document.getElementById("facepng");

    face.onclick = function() {
        if (face.innerHTML === "帅哥请刷脸"){
            img2.style.display = "block";
            face.innerHTML = "刷脸成功！";
        }
        else {
                            img2.style.display = "none";
                            face.innerHTML = "帅哥请刷脸";
                            // isShow = true;
                        }
    }