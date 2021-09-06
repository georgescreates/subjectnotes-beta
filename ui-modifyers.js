var periodHeadBtns = document.getElementsByClassName('period-box-head');
var periodBoxBody = document.getElementsByClassName('period-box-body');
var periodBox = document.getElementsByClassName('period-box');

var semesterDiv = document.getElementsByClassName('semester-div')

var arrowsHidden = document.getElementsByClassName('uil-angle');

for(let i = 0; i < periodHeadBtns.length; i++){
    periodHeadBtns[i].addEventListener('click', () => {        
        if(i == 0 || i == 1 || i == 3 || i == 4){
            if(periodBoxBody[i].dataset.display == "true"){
                periodBoxBody[i].dataset.display = "false";
                periodBoxBody[i].style.display = "none";
                periodBox[i].style.height = "20%";
                arrowsHidden[i].classList = 'uil uil-angle uil-angle-down';
            }
            else{
                periodBoxBody[i].dataset.display = "true";
                periodBoxBody[i].style.display = "flex";
                periodBox[i].style.height = "90%";
                arrowsHidden[i].classList = 'uil uil-angle uil-angle-up';
            }
        }
        if(i == 2 || i == 5){
            if(periodBoxBody[i].dataset.display == "true"){
                periodBoxBody[i].dataset.display = "false";
                periodBoxBody[i].style.display = "none";
                periodBox[i].style.height = "20%";
                arrowsHidden[i].classList = 'uil uil-angle uil-angle-down';
            }
            else{
                periodBoxBody[i].dataset.display = "true";
                periodBoxBody[i].style.display = "flex";
                periodBox[i].style.height = "90%";
                arrowsHidden[i].classList = 'uil uil-angle uil-angle-up';
            }
        }
    })
}

var resultHeadBtns = document.getElementsByClassName('result-div-head');
var semesterResultList = document.getElementsByClassName('semester-result-list');
var periodResultDiv = document.getElementsByClassName('period-result-div');


for(let i = 0; i < resultHeadBtns.length; i++){
    resultHeadBtns[i].addEventListener('click', () => {
        if(periodResultDiv[i].dataset.display == "true"){
            periodResultDiv[i].dataset.display = "false";
            for(let j = 0; j < semesterResultList[i].getElementsByTagName('li').length - 1; j++){
                semesterResultList[i].getElementsByTagName('li')[j].style.display = "none";
            }
            arrowsHidden[i+6].classList = 'uil uil-angle uil-angle-down';
        }
        else{
            periodResultDiv[i].dataset.display = "true";
            for(let j = 0; j < semesterResultList[i].getElementsByTagName('li').length - 1; j++){
                semesterResultList[i].getElementsByTagName('li')[j].style.display = "flex";
            }
            arrowsHidden[i+6].classList = 'uil uil-angle uil-angle-up';
        }
    })
}