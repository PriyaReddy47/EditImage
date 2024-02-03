function editimg(){
    var blurVar=document.getElementById("blur").value
    var brigtVar=document.getElementById("brightness").value
    var contVar=document.getElementById("contrast").value
    var grayVar=document.getElementById("gray").value
    var hueVar=document.getElementById("hue").value
    var invVar=document.getElementById("invert").value
    var opaVar=document.getElementById("opacity").value
    var satVar=document.getElementById("saturate").value
    var sepiaVar=document.getElementById("sepia").value
    document.getElementById("img").style.filter=`blur(${blurVar}px) brightness(${brigtVar}%) contrast(${contVar}%) grayscale(${grayVar}%) hue-rotate(${hueVar}deg) invert(${invVar}%) opacity(${opaVar}%) saturate(${satVar}%) sepia(${sepiaVar}%)`;
}
function editing(){
    var rotVal=document.getElementById("rotate").value
    var rotxVal=document.getElementById("rotateX").value
    var rotyVal=document.getElementById("rotateY").value
    var scaVal=document.getElementById("scale").value
    var scaxVal=document.getElementById("scaleX").value
    var scayVal=document.getElementById("scaleY").value
    var skewVal=document.getElementById("skew").value
    var skewxVal=document.getElementById("skewX").value
    var skewyVal=document.getElementById("skewY").value
    document.getElementById("img").style.transform=`rotate(${rotVal}deg) rotateX(${rotxVal}deg) rotateY(${rotyVal}deg) scale(${scaVal}) scaleX(${scaxVal}) scaleY(${scayVal}) skew(${skewVal}deg) skewX(${skewxVal}deg) skewY(${skewyVal}deg)`;
}