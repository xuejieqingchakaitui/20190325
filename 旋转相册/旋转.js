




window.onload=function(){
        /*
         1、所有的图片应该分散开来，共同围绕成一个圆。
         360/8=45;
         第一张：0
         第二张：45
         第三张：90
         第四张：135
         .......
         2、发牌的效果
         结构中的第一张  最后出来
         i=0    7*0.2s  1.4s   len-1-i
         i=1    6*0.2   1.2s
         i=2    5*0.2   1s
         i=3    4*0.2   0.8s
         i=4    3*0.2   0.6
         i=5    2*0.2   0.4
         i=6    1*0.2   0.2

         i=7    0*0.2   0

         结构中的最后一张   先出来






         */

        var imgLists=document.querySelectorAll(".imgBox>img");
        var imgBox=document.querySelector(".imgBox");
        // 获取图片的张数
        var len=imgLists.length;
        var itemDeg=360/len;
        for(var i=0;i<len;i++){
            imgLists[i].style.transform="rotateY("+itemDeg*i+"deg) translateZ(300px)";

            imgLists[i].style.transition="1s "+(len-1-i)*0.2+"s";
        }
        var num=0;
        setInterval(function(){
            num++;
            var value=num*0.2;
            imgBox.style.transform="rotateX(-10deg) rotateY("+value+"deg)";

        },30)


    }
