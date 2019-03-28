// TOC定位
var oDiv = document.getElementsByClassName("toc")[0],H = 0,Y = oDiv;        
while (Y) {
    H += Y.offsetTop; 
    Y = Y.offsetParent;
}
window.onscroll = function()
{
    var s = document.body.scrollTop || document.documentElement.scrollTop;
    if(s>H) {
        oDiv.style = "position:fixed;top:-18px;";
    } else {
        oDiv.style = "";
    }
};

// 生成目录文本li
var txt =document.createElement("li");
oDiv.insertBefore(txt,oDiv.children[0]);
txt.className="list_title";
txt.innerHTML="目录";

// 生成返回顶部文本li
var topper =document.createElement("li");
topper.className="toTop";
topper.innerHTML="To the Top";
oDiv.appendChild(topper);