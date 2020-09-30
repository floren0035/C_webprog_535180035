//Introduction
// Browse Log
function log(LogText) {
    document.getElementById("logText").innerHTML = "Kamu Keren";
    console.log(LogText);
}
//Multielement
function Multielement(str) {
    document.getElementById("kata1").innerHTML = str;
    document.getElementById("kata2").innerHTML = str;
    document.getElementById("kata1").className = "mark";
    document.getElementById("kata2").className = "mark";
}
//Data Type
//Number
function angka(id, angka) {
    var x = 7;
    var res = angka + x;
    document.getElementById(id).innerHTML = "7 + " + angka + " = " + res;
}
//String
function ubahKalimat(id, str1, str2) {
    document.getElementById(id).innerHTML = str1 + " " + str2;
}
//Arithmentic
//Tambah
function Addition(id, num1, num2){
    document.getElementById(id).value = Number(num1) + Number(num2);
}
//Kurang
function Sub(id, num1, num2) {
    document.getElementById(id).value = Number(num1) - Number(num2);
}
//Kali
function Multi(id, num1, num2) {
    document.getElementById(id).value = Number(num1) * Number(num2);
}
//Bagi
function Div(id, num1, num2) {
    document.getElementById(id).value = Number(num1) / Number(num2);
}
//Modulo
function Mod(id, num1, num2) {
    document.getElementById(id).value = Number(num1) % Number(num2);
}
//Pangkat
function Pangkat(id, num1, num2) {
    document.getElementById(id).value = Number(num1) ** Number(num2);
}
//Syntax
//For Loops
function Loop(n) {
    var str = "Awesome";
    for (i=0; i<n; i++){
        document.getElementById("hasil").innerHTML += str + "<br>";
    }
}
//Array, In Loops, If
var animal = [];
function Animal(input){
    if (animal.length == 3){
        alert("Sudah 3 hewan kesukaan")
    }
    else {
        animal.push(input);
        document.getElementById("animal").value = "";
        document.getElementById("animal").focus();
        console.log(animal.length);
    }
}
function arrLoop() {
    var item;
    for (item of animal) {
        document.getElementById("hasilarr").innerHTML += item + "<br>";
    }
}
//Object
var Data;
function Person(pEmail, pNIM, pNama){
    this.Email = pEmail;
    this.NIM = pNIM;
    this.Nama = pNama;
    this.ValidasiData = function() {
        if ((this.Email != "") && (this.NIM != "") && (this.Nama != "")) {
            return "OK";
        } else {
            return "NG";
        }
    }
}
function CreateObject(pEmail, pNIM, pNama) {
    Data = new Person(pEmail, pNIM, pNama);
}
function LoadObject() {
    document.getElementById("biodata").value = 
        "Email: " + Data.Email + " " +
        "NIM: " + Data.NIM + " " +
        "Nama: " + Data.Nama + " " +
        "Validasi: " + Data.ValidasiData();
}
//Invocation
var obj = {
    value : 0,
    increment: function () {
        this.value += 1;
    }
};
function Increase() {
    obj.increment();
}
function Show() {
    document.getElementById("show").innerHTML = obj.value;
}
var obj1 = {};
obj1.add = function(val1, val2){
    var that = this;
    var inner = function() {
        that.sum = val1 + val2;
    }
    inner();
}
function Show1() {
    document.getElementById("show1").innerHTML = obj1.sum;
}
function base() {
    this.value = 500;
}
var child = new base(); 
var add = function (num1, num2){
    return num1+num2;
}
function GetResult() {
    array = [3,4];
    return add.apply(null, array);
}