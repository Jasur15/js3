var yosh = +prompt("Yoshingizni kiriting.")
var a = 0
if (yosh <= 18) {
    alert("Yoshsiz. O'qishingiz kerak.")
}
else if (yosh <= 50){
    alert("Ishlashingiz kerak.")
}
else if(yosh <= 59){
    alert("Yaqinda pensiyaga chiqasiz.")
}
else if (yosh <= 150){
    alert("Pensionerga o'xshaysiz, hali tirik bo'lsangiz :)")
}
else {
    alert("Nimadir noto'g'ri ketib qoldi.")
}