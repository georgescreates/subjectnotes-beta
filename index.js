//Calling elements on the DOM
var subjectInputs = document.getElementsByClassName('subject-input');
var averagesParag = document.getElementsByClassName('averages-p');

var averagesFields = document.getElementsByClassName('average-field');
var globalAverageFields = document.getElementsByClassName("average-glob-field");

//About subjects
//Economie Intra 1
if(subj1IntraS1Vals == null){
    subjectInputs[0].value = "00";
    subjectItems[0].title = 'Matière : Economie | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 1 | Pourcentage : 35%';
}else{
    subjectInputs[0].value = subj1IntraS1Vals.subj1IntraS1Result;
    subjectItems[0].title = `Matière : ${subj1IntraS1Vals.subj1IntraS1Name} | Note obtenue : ${subj1IntraS1Vals.subj1IntraS1Result}/100 | Coefficient : ${subj1IntraS1Vals.subj1IntraS1Coef} | Période : ${subj1IntraS1Vals.subj1IntraS1Period} | Pourcentage : ${subj1IntraS1Vals.subj1IntraS1Percent *100}%`;
}

//Economie Final 1
if(subj1FinalS1Vals == null){
    subjectInputs[7].value = "00";
    subjectItems[7].title = 'Matière : Economie | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 1 | Pourcentage : 65%';
}else{
    subjectInputs[7].value = subj1FinalS1Vals.subj1FinalS1Result;
    subjectItems[7].title = `Matière : ${subj1FinalS1Vals.subj1FinalS1Name} | Note obtenue : ${subj1FinalS1Vals.subj1FinalS1Result}/100 | Coefficient : ${subj1FinalS1Vals.subj1FinalS1Coef} | Période : ${subj1FinalS1Vals.subj1FinalS1Period} | Pourcentage : ${subj1FinalS1Vals.subj1FinalS1Percent*100}%`;
}

//Economie Semester 1
if(subj1S1Note == null){
    averagesFields[0].innerHTML = "00";
}else{
    averagesFields[0].innerHTML = subj1S1Note;
}

//Economie Intra 2
if(subj1IntraS2Vals == null){
    subjectInputs[21].value = "00";
    subjectItems[21].title = 'Matière : Economie | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 2 | Pourcentage : 35%';
}else{
    subjectInputs[21].value = subj1IntraS2Vals.subj1IntraS2Result;
    subjectItems[21].title = `Matière : ${subj1IntraS2Vals.subj1IntraS2Name} | Note obtenue : ${subj1IntraS2Vals.subj1IntraS2Result}/100 | Coefficient : ${subj1IntraS2Vals.subj1IntraS2Coef} | Période : ${subj1IntraS2Vals.subj1IntraS2Period} | Pourcentage : ${subj1IntraS2Vals.subj1IntraS2Percent*100}%`;
}

//Economie Final 2
if(subj1FinalS2Vals == null){
    subjectInputs[28].value = "00";
    subjectItems[28].title = 'Matière : Economie | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 2 | Pourcentage : 65%';
}else{
    subjectInputs[28].value = subj1FinalS2Vals.subj1FinalS2Result;
    subjectItems[28].title = `Matière : ${subj1FinalS2Vals.subj1FinalS2Name} | Note obtenue : ${subj1FinalS2Vals.subj1FinalS2Result}/100 | Coefficient : ${subj1FinalS2Vals.subj1FinalS2Coef} | Période : ${subj1FinalS2Vals.subj1FinalS2Period} | Pourcentage : ${subj1FinalS2Vals.subj1FinalS2Percent*100}%`;
}

//Economie Semester 2
if(subj1S2Note == null){
    averagesFields[8].innerHTML = "00";
}else{
    averagesFields[8].innerHTML = subj1S2Note;
}

//Economie Year Average
if(subj1GenNote == null){
    averagesFields[16].innerHTML = '00';
}else{
    averagesFields[16].innerHTML = subj1GenNote;
}








//Algèbre Intra 1
if(subj2IntraS1Vals == null){
    subjectInputs[1].value = "00";
    subjectItems[1].title = 'Matière : Algèbre | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 1 | Pourcentage : 25%';
}else{
    subjectInputs[1].value = subj2IntraS1Vals.subj2IntraS1Result;
    subjectItems[1].title = `Matière : ${subj2IntraS1Vals.subj2IntraS1Name} | Note obtenue : ${subj2IntraS1Vals.subj2IntraS1Result}/100 | Coefficient : ${subj2IntraS1Vals.subj2IntraS1Coef} | Période : ${subj2IntraS1Vals.subj2IntraS1Period} | Pourcentage : ${subj2IntraS1Vals.subj2IntraS1Percent*100}%`;
}

//Algèbre Final 1
if(subj2FinalS1Vals == null){
    subjectInputs[8].value = "00";
    subjectItems[8].title = 'Matière : Algèbre | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 1 | Pourcentage : 50%';
}else{
    subjectInputs[8].value = subj2FinalS1Vals.subj2FinalS1Result;
    subjectItems[8].title = `Matière : ${subj2FinalS1Vals.subj2FinalS1Name} | Note obtenue : ${subj2FinalS1Vals.subj2FinalS1Result}/100 | Coefficient : ${subj2FinalS1Vals.subj2FinalS1Coef} | Période : ${subj2FinalS1Vals.subj2FinalS1Period} | Pourcentage : ${subj2FinalS1Vals.subj2FinalS1Percent*100}%`;
}

//Algèbre Work 1
if(subj2WorkS1Vals == null){
    subjectInputs[15].value = "00";
    subjectItems[15].title = 'Matière : Algèbre | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 1 | Pourcentage : 25%';
}else{
    subjectInputs[15].value = subj2WorkS1Vals.subj2WorkS1Result;
    subjectItems[15].title = `Matière : ${subj2WorkS1Vals.subj2WorkS1Name} | Note obtenue : ${subj2WorkS1Vals.subj2WorkS1Result}/100 | Coefficient : ${subj2WorkS1Vals.subj2WorkS1Coef} | Période : ${subj2WorkS1Vals.subj2WorkS1Period} | Pourcentage : ${subj2WorkS1Vals.subj2WorkS1Percent*100}%`;
}

//Algèbre Semestre 1
if(subj2S1Note == null){
    averagesFields[1].innerHTML = '00';
}else{
    averagesFields[1].innerHTML = subj2S1Note;
}

//Algèbre Intra 2
if(subj2IntraS2Vals == null){
    subjectInputs[22].value = "00";
    subjectItems[22].title = 'Matière : Algèbre | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 2 | Pourcentage : 25%';
}else{
    subjectInputs[22].value = subj2IntraS2Vals.subj2IntraS2Result;
    subjectItems[22].title = `Matière : ${subj2IntraS2Vals.subj2IntraS2Name} | Note obtenue : ${subj2IntraS2Vals.subj2IntraS2Result}/100 | Coefficient : ${subj2IntraS2Vals.subj2IntraS2Coef} | Période : ${subj2IntraS2Vals.subj2IntraS2Period} | Pourcentage : ${subj2IntraS2Vals.subj2IntraS2Percent*100}%`;
}

//Algèbre Final 2
if(subj2FinalS2Vals == null){
    subjectInputs[29].value = "00";
    subjectItems[29].title = 'Matière : Algèbre | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 2 | Pourcentage : 50%';
}else{
    subjectInputs[29].value = subj2FinalS2Vals.subj2FinalS2Result;
    subjectItems[29].title = `Matière : ${subj2FinalS2Vals.subj2FinalS2Name} | Note obtenue : ${subj2FinalS2Vals.subj2FinalS2Result}/100 | Coefficient : ${subj2FinalS2Vals.subj2FinalS2Coef} | Période : ${subj2FinalS2Vals.subj2FinalS2Period} | Pourcentage : ${subj2FinalS2Vals.subj2FinalS2Percent*100}%`;
}

//Algèbre Work 2
if(subj2WorkS2Vals == null){
    subjectInputs[36].value = "00";
    subjectItems[36].title = 'Matière : Algèbre | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 2 | Pourcentage : 25%';
}else{
    subjectInputs[36].value = subj2WorkS2Vals.subj2WorkS2Result;
    subjectItems[36].title = `Matière : ${subj2WorkS2Vals.subj2WorkS2Name} | Note obtenue : ${subj2WorkS2Vals.subj2WorkS2Result}/100 | Coefficient : ${subj2WorkS2Vals.subj2WorkS2Coef} | Période : ${subj2WorkS2Vals.subj2WorkS2Period} | Pourcentage : ${subj2WorkS2Vals.subj2WorkS2Percent*100}%`;
}

//Algèbre Semestre 2
if(subj2S2Note == null){
    averagesFields[9].innerHTML = '00';
}else{
    averagesFields[9].innerHTML = subj2S2Note;
}

//Algèbre Year Average
if(subj2GenNote == null){
    averagesFields[17].innerHTML = '00';
}else{
    averagesFields[17].innerHTML = subj2GenNote;
}









//Statistique Descriptive Intra 1
if(subj3IntraS1Vals == null){
    subjectInputs[2].value = "00";
    subjectItems[2].title = 'Matière : Statistique Descriptive | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 1 | Pourcentage : 25%';
}else{
    subjectInputs[2].value = subj3IntraS1Vals.subj3IntraS1Result;
    subjectItems[2].title = `Matière : ${subj3IntraS1Vals.subj3IntraS1Name} | Note obtenue : ${subj3IntraS1Vals.subj3IntraS1Result}/100 | Coefficient : ${subj3IntraS1Vals.subj3IntraS1Coef} | Période : ${subj3IntraS1Vals.subj3IntraS1Period} | Pourcentage : ${subj3IntraS1Vals.subj3IntraS1Percent*100}%`;
}

//Statistique Descriptive Final 1
if(subj3FinalS1Vals == null){
    subjectInputs[9].value = "00";
    subjectItems[9].title = 'Matière : Statistique Descriptive | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 1 | Pourcentage : 50%';
}else{
    subjectInputs[9].value = subj3FinalS1Vals.subj3FinalS1Result;
    subjectItems[9].title = `Matière : ${subj3FinalS1Vals.subj3FinalS1Name} | Note obtenue : ${subj3FinalS1Vals.subj3FinalS1Result}/100 | Coefficient : ${subj3FinalS1Vals.subj3FinalS1Coef} | Période : ${subj3FinalS1Vals.subj3FinalS1Period} | Pourcentage : ${subj3FinalS1Vals.subj3FinalS1Percent*100}%`;
}

//Statistique Descriptive Work 1
if(subj3WorkS1Vals == null){
    subjectInputs[16].value = "00";
    subjectItems[16].title = 'Matière : Statistique Descriptive | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 1 | Pourcentage : 25%';
}else{
    subjectInputs[16].value = subj3WorkS1Vals.subj3WorkS1Result;
    subjectItems[16].title = `Matière : ${subj3WorkS1Vals.subj3WorkS1Name} | Note obtenue : ${subj3WorkS1Vals.subj3WorkS1Result}/100 | Coefficient : ${subj3WorkS1Vals.subj3WorkS1Coef} | Période : ${subj3WorkS1Vals.subj3WorkS1Period} | Pourcentage : ${subj3WorkS1Vals.subj3WorkS1Percent*100}%`;
}

//Statistique Descriptive Semester 1
if(subj3S1Note == null){
    averagesFields[2].innerHTML = "00";
}else{
    averagesFields[2].innerHTML = subj3S1Note;
}

//Statistique Descriptive Year Average
if(subj3GenNote == null){
    averagesFields[18].innerHTML = '00';
}else{
    averagesFields[18].innerHTML = subj3GenNote;
}




//Comptabilité Intra 1
if(subj4IntraS1Vals == null){
    subjectInputs[3].value = "00";
    subjectItems[3].title = 'Matière : Comptabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 1 | Pourcentage : 30%';
}else{
    subjectInputs[3].value = subj4IntraS1Vals.subj4IntraS1Result;
    subjectItems[3].title = `Matière : ${subj4IntraS1Vals.subj4IntraS1Name} | Note obtenue : ${subj4IntraS1Vals.subj4IntraS1Result}/100 | Coefficient : ${subj4IntraS1Vals.subj4IntraS1Coef} | Période : ${subj4IntraS1Vals.subj4IntraS1Period} | Pourcentage : ${subj4IntraS1Vals.subj4IntraS1Percent*100}%`;
}

//Comptabilité Final 1
if(subj4FinalS1Vals == null){
    subjectInputs[10].value = "00";
    subjectItems[10].title = 'Matière : Comptabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 1 | Pourcentage : 50%';
}else{
    subjectInputs[10].value = subj4FinalS1Vals.subj4FinalS1Result;
    subjectItems[10].title = `Matière : ${subj4FinalS1Vals.subj4FinalS1Name} | Note obtenue : ${subj4FinalS1Vals.subj4FinalS1Result}/100 | Coefficient : ${subj4FinalS1Vals.subj4FinalS1Coef} | Période : ${subj4FinalS1Vals.subj4FinalS1Period} | Pourcentage : ${subj4FinalS1Vals.subj4FinalS1Percent*100}%`;
}

//Comptabilité Work 1
if(subj4WorkS1Vals == null){
    subjectInputs[17].value = "00";
    subjectItems[17].title = 'Matière : Comptabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 1 | Pourcentage : 20%';
}else{
    subjectInputs[17].value = subj4WorkS1Vals.subj4WorkS1Result;
    subjectItems[17].title = `Matière : ${subj4WorkS1Vals.subj4WorkS1Name} | Note obtenue : ${subj4WorkS1Vals.subj4WorkS1Result}/100 | Coefficient : ${subj4WorkS1Vals.subj4WorkS1Coef} | Période : ${subj4WorkS1Vals.subj4WorkS1Period} | Pourcentage : ${subj4WorkS1Vals.subj4WorkS1Percent*100}%`;
}

//Comptabilité Semestre 1
if(subj4S1Note == null){
    averagesFields[3].innerHTML = '00';
}else{
    averagesFields[3].innerHTML = subj4S1Note;
}

//Comptabilité Intra 2
if(subj4IntraS2Vals == null){
    subjectInputs[24].value = "00";
    subjectItems[24].title = 'Matière : Comptabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 2 | Pourcentage : 30%';
}else{
    subjectInputs[24].value = subj4IntraS2Vals.subj4IntraS2Result;
    subjectItems[24].title = `Matière : ${subj4IntraS2Vals.subj4IntraS2Name} | Note obtenue : ${subj4IntraS2Vals.subj4IntraS2Result}/100 | Coefficient : ${subj4IntraS2Vals.subj4IntraS2Coef} | Période : ${subj4IntraS2Vals.subj4IntraS2Period} | Pourcentage : ${subj4IntraS2Vals.subj4IntraS2Percent*100}%`;
}

//Comptabilité Final 2
if(subj4FinalS2Vals == null){
    subjectInputs[31].value = "00";
    subjectItems[31].title = 'Matière : Comptabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 2 | Pourcentage : 50%';
}else{
    subjectInputs[31].value = subj4FinalS2Vals.subj4FinalS2Result;
    subjectItems[31].title = `Matière : ${subj4FinalS2Vals.subj4FinalS2Name} | Note obtenue : ${subj4FinalS2Vals.subj4FinalS2Result}/100 | Coefficient : ${subj4FinalS2Vals.subj4FinalS2Coef} | Période : ${subj4FinalS2Vals.subj4FinalS2Period} | Pourcentage : ${subj4FinalS2Vals.subj4FinalS2Percent*100}%`;
}

//Comptabilité Work 2
if(subj4WorkS2Vals == null){
    subjectInputs[38].value = "00";
    subjectItems[38].title = 'Matière : Comptabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 2 | Pourcentage : 20%';
}else{
    subjectInputs[38].value = subj4WorkS2Vals.subj4WorkS2Result;
    subjectItems[38].title = `Matière : ${subj4WorkS2Vals.subj4WorkS2Name} | Note obtenue : ${subj4WorkS2Vals.subj4WorkS2Result}/100 | Coefficient : ${subj4WorkS2Vals.subj4WorkS2Coef} | Période : ${subj4WorkS2Vals.subj4WorkS2Period} | Pourcentage : ${subj4WorkS2Vals.subj4WorkS2Percent*100}%`;
}

//Comptabilité Semestre 2
if(subj4S2Note == null){
    averagesFields[11].innerHTML = '00';
}else{
    averagesFields[11].innerHTML = subj4S2Note;
}

//Comptabilité Year Average
if(subj4GenNote == null){
    averagesFields[20].innerHTML = '00';
}else{
    averagesFields[20].innerHTML = subj4GenNote;
}




//Espagnol Intra 1
if(subj5IntraS1Vals == null){
    subjectInputs[4].value = "00";
    subjectItems[4].title = 'Matière : Espagnol | Note obtenue : 00/100 | Coefficient : 1 | Période : Intra 1 | Pourcentage : 25%';
}else{
    subjectInputs[4].value = subj5IntraS1Vals.subj5IntraS1Result;
    subjectItems[4].title = `Matière : ${subj5IntraS1Vals.subj5IntraS1Name} | Note obtenue : ${subj5IntraS1Vals.subj5IntraS1Result}/100 | Coefficient : ${subj5IntraS1Vals.subj5IntraS1Coef} | Période : ${subj5IntraS1Vals.subj5IntraS1Period} | Pourcentage : ${subj5IntraS1Vals.subj5IntraS1Percent*100}%`;
}

//Espagnol Final 1
if(subj5FinalS1Vals == null){
    subjectInputs[11].value = "00";
    subjectItems[11].title = 'Matière : Espagnol | Note obtenue : 00/100 | Coefficient : 1 | Période : Final 1 | Pourcentage : 50%';
}else{
    subjectInputs[11].value = subj5FinalS1Vals.subj5FinalS1Result;
    subjectItems[11].title = `Matière : ${subj5FinalS1Vals.subj5FinalS1Name} | Note obtenue : ${subj5FinalS1Vals.subj5FinalS1Result}/100 | Coefficient : ${subj5FinalS1Vals.subj5FinalS1Coef} | Période : ${subj5FinalS1Vals.subj5FinalS1Period} | Pourcentage : ${subj5FinalS1Vals.subj5FinalS1Percent*100}%`;
}

//Espagnol Work 1
if(subj5WorkS1Vals == null){
    subjectInputs[18].value = "00";
    subjectItems[18].title = 'Matière : Espagnol | Note obtenue : 00/100 | Coefficient : 1 | Période : Devoir 1 | Pourcentage : 25%';
}else{
    subjectInputs[18].value = subj5WorkS1Vals.subj5WorkS1Result;
    subjectItems[18].title = `Matière : ${subj5WorkS1Vals.subj5WorkS1Name} | Note obtenue : ${subj5WorkS1Vals.subj5WorkS1Result}/100 | Coefficient : ${subj5WorkS1Vals.subj5WorkS1Coef} | Période : ${subj5WorkS1Vals.subj5WorkS1Period} | Pourcentage : ${subj5WorkS1Vals.subj5WorkS1Percent*100}%`;
}

//Espagnol Semestre 1
if(subj5S1Note == null){
    averagesFields[4].innerHTML = '00';
}else{
    averagesFields[4].innerHTML = subj5S1Note;
}

//Espagnol Intra 2
if(subj5IntraS2Vals == null){
    subjectInputs[25].value = "00";
    subjectItems[25].title = 'Matière : Espagnol | Note obtenue : 00/100 | Coefficient : 1 | Période : Intra 2 | Pourcentage : 25%';
}else{
    subjectInputs[25].value = subj5IntraS2Vals.subj5IntraS2Result;
    subjectItems[25].title = `Matière : ${subj5IntraS2Vals.subj5IntraS2Name} | Note obtenue : ${subj5IntraS2Vals.subj5IntraS2Result}/100 | Coefficient : ${subj5IntraS2Vals.subj5IntraS2Coef} | Période : ${subj5IntraS2Vals.subj5IntraS2Period} | Pourcentage : ${subj5IntraS2Vals.subj5IntraS2Percent*100}%`;
}

//Espagnol Final 2
if(subj5FinalS2Vals == null){
    subjectInputs[32].value = "00";
    subjectItems[32].title = 'Matière : Espagnol | Note obtenue : 00/100 | Coefficient : 1 | Période : Final 2 | Pourcentage : 50%';
}else{
    subjectInputs[32].value = subj5FinalS2Vals.subj5FinalS2Result;
    subjectItems[32].title = `Matière : ${subj5FinalS2Vals.subj5FinalS2Name} | Note obtenue : ${subj5FinalS2Vals.subj5FinalS2Result}/100 | Coefficient : ${subj5FinalS2Vals.subj5FinalS2Coef} | Période : ${subj5FinalS2Vals.subj5FinalS2Period} | Pourcentage : ${subj5FinalS2Vals.subj5FinalS2Percent*100}%`;
}

//Espagnol Work 2
if(subj5WorkS2Vals == null){
    subjectInputs[39].value = "00";
    subjectItems[39].title = 'Matière : Espagnol | Note obtenue : 00/100 | Coefficient : 1 | Période : Devoir 2 | Pourcentage : 25%';
}else{
    subjectInputs[39].value = subj5WorkS2Vals.subj5WorkS2Result;
    subjectItems[39].title = `Matière : ${subj5WorkS2Vals.subj5WorkS2Name} | Note obtenue : ${subj5WorkS2Vals.subj5WorkS2Result}/100 | Coefficient : ${subj5WorkS2Vals.subj5WorkS2Coef} | Période : ${subj5WorkS2Vals.subj5WorkS2Period} | Pourcentage : ${subj5WorkS2Vals.subj5WorkS2Percent*100}%`;
}

//Espagnol Semestre 2
if(subj5S2Note == null){
    averagesFields[12].innerHTML = '00';
}else{
    averagesFields[12].innerHTML = subj5S2Note;
}

//Espagnol Year Average
if(subj5GenNote == null){
    averagesFields[21].innerHTML = '00';
}else{
    averagesFields[21].innerHTML = subj5GenNote;
}




//Anglais Intra 1
if(subj6IntraS1Vals == null){
    subjectInputs[5].value = "00";
    subjectItems[5].title = 'Matière : Anglais | Note obtenue : 00/100 | Coefficient : 1 | Période : Intra 1 | Pourcentage : 25%';
}else{
    subjectInputs[5].value = subj6IntraS1Vals.subj6IntraS1Result;
    subjectItems[5].title = `Matière : ${subj6IntraS1Vals.subj6IntraS1Name} | Note obtenue : ${subj6IntraS1Vals.subj6IntraS1Result}/100 | Coefficient : ${subj6IntraS1Vals.subj6IntraS1Coef} | Période : ${subj6IntraS1Vals.subj6IntraS1Period} | Pourcentage : ${subj6IntraS1Vals.subj6IntraS1Percent*100}%`;
}

//Anglais Final 1
if(subj6FinalS1Vals == null){
    subjectInputs[12].value = "00";
    subjectItems[12].title = 'Matière : Anglais | Note obtenue : 00/100 | Coefficient : 1 | Période : Final 1 | Pourcentage : 50%';
}else{
    subjectInputs[12].value = subj6FinalS1Vals.subj6FinalS1Result;
    subjectItems[12].title = `Matière : ${subj6FinalS1Vals.subj6FinalS1Name} | Note obtenue : ${subj6FinalS1Vals.subj6FinalS1Result}/100 | Coefficient : ${subj6FinalS1Vals.subj6FinalS1Coef} | Période : ${subj6FinalS1Vals.subj6FinalS1Period} | Pourcentage : ${subj6FinalS1Vals.subj6FinalS1Percent*100}%`;
}

//Anglais Work 1
if(subj6WorkS1Vals == null){
    subjectInputs[19].value = "00";
    subjectItems[19].title = 'Matière : Anglais | Note obtenue : 00/100 | Coefficient : 1 | Période : Devoir 1 | Pourcentage : 25%';
}else{
    subjectInputs[19].value = subj6WorkS1Vals.subj6WorkS1Result;
    subjectItems[19].title = `Matière : ${subj6WorkS1Vals.subj6WorkS1Name} | Note obtenue : ${subj6WorkS1Vals.subj6WorkS1Result}/100 | Coefficient : ${subj6WorkS1Vals.subj6WorkS1Coef} | Période : ${subj6WorkS1Vals.subj6WorkS1Period} | Pourcentage : ${subj6WorkS1Vals.subj6WorkS1Percent*100}%`;
}

//Anglais Semester 1
if(subj6S1Note == null){
    averagesFields[5].innerHTML = '00';
}else{
    averagesFields[5].innerHTML = subj6S1Note;
}

//Anglais Intra 2
if(subj6IntraS2Vals == null){
    subjectInputs[26].value = "00";
    subjectItems[26].title = 'Matière : Anglais | Note obtenue : 00/100 | Coefficient : 1 | Période : Intra 2 | Pourcentage : 25%';
}else{
    subjectInputs[26].value = subj6IntraS2Vals.subj6IntraS2Result;
    subjectItems[26].title = `Matière : ${subj6IntraS2Vals.subj6IntraS2Name} | Note obtenue : ${subj6IntraS2Vals.subj6IntraS2Result}/100 | Coefficient : ${subj6IntraS2Vals.subj6IntraS2Coef} | Période : ${subj6IntraS2Vals.subj6IntraS2Period} | Pourcentage : ${subj6IntraS2Vals.subj6IntraS2Percent*100}%`;
}

//Anglais Final 2
if(subj6FinalS2Vals == null){
    subjectInputs[33].value = "00";
    subjectItems[33].title = 'Matière : Anglais | Note obtenue : 00/100 | Coefficient : 1 | Période : Final 2 | Pourcentage : 50%';
}else{
    subjectInputs[33].value = subj6FinalS2Vals.subj6FinalS2Result;
    subjectItems[33].title = `Matière : ${subj6FinalS2Vals.subj6FinalS2Name} | Note obtenue : ${subj6FinalS2Vals.subj6FinalS2Result}/100 | Coefficient : ${subj6FinalS2Vals.subj6FinalS2Coef} | Période : ${subj6FinalS2Vals.subj6FinalS2Period} | Pourcentage : ${subj6FinalS2Vals.subj6FinalS2Percent*100}%`;
}

//Anglais Work 2
if(subj6WorkS2Vals == null){
    subjectInputs[40].value = "00";
    subjectItems[40].title = 'Matière : Anglais | Note obtenue : 00/100 | Coefficient : 1 | Période : Devoir 2 | Pourcentage : 25%';
}else{
    subjectInputs[40].value = subj6WorkS2Vals.subj6WorkS2Result;
    subjectItems[40].title = `Matière : ${subj6WorkS2Vals.subj6WorkS2Name} | Note obtenue : ${subj6WorkS2Vals.subj6WorkS2Result}/100 | Coefficient : ${subj6WorkS2Vals.subj6WorkS2Coef} | Période : ${subj6WorkS2Vals.subj6WorkS2Period} | Pourcentage : ${subj6WorkS2Vals.subj6WorkS2Percent*100}%`;
}

//Anglais Semester 2
if(subj6S2Note == null){
    averagesFields[13].innerHTML = '00';
}else{
    averagesFields[13].innerHTML = subj6S2Note;
}

//Anglais Year Average
if(subj6GenNote == null){
    averagesFields[22].innerHTML = '00';
}else{
    averagesFields[22].innerHTML = subj6GenNote;
}



//Analyse Intra 1
if(subj7IntraS1Vals == null){
    subjectInputs[6].value = "00";
    subjectItems[6].title = 'Matière : Analyse | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 1 | Pourcentage : 25%';
}else{
    subjectInputs[6].value = subj7IntraS1Vals.subj7IntraS1Result;
    subjectItems[6].title = `Matière : ${subj7IntraS1Vals.subj7IntraS1Name} | Note obtenue : ${subj7IntraS1Vals.subj7IntraS1Result}/100 | Coefficient : ${subj7IntraS1Vals.subj7IntraS1Coef} | Période : ${subj7IntraS1Vals.subj7IntraS1Period} | Pourcentage : ${subj7IntraS1Vals.subj7IntraS1Percent*100}%`;
}

//Analyse Final 1
if(subj7FinalS1Vals == null){
    subjectInputs[13].value = "00";
    subjectItems[13].title = 'Matière : Analyse | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 1 | Pourcentage : 50%';
}else{
    subjectInputs[13].value = subj7FinalS1Vals.subj7FinalS1Result;
    subjectItems[13].title = `Matière : ${subj7FinalS1Vals.subj7FinalS1Name} | Note obtenue : ${subj7FinalS1Vals.subj7FinalS1Result}/100 | Coefficient : ${subj7FinalS1Vals.subj7FinalS1Coef} | Période : ${subj7FinalS1Vals.subj7FinalS1Period} | Pourcentage : ${subj7FinalS1Vals.subj7FinalS1Percent*100}%`;
}

//Analyse Work 1
if(subj7WorkS1Vals == null){
    subjectInputs[20].value = "00";
    subjectItems[20].title = 'Matière : Analyse | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 1 | Pourcentage : 25%';
}else{
    subjectInputs[20].value = subj7WorkS1Vals.subj7WorkS1Result;
    subjectItems[20].title = `Matière : ${subj7WorkS1Vals.subj7WorkS1Name} | Note obtenue : ${subj7WorkS1Vals.subj7WorkS1Result}/100 | Coefficient : ${subj7WorkS1Vals.subj7WorkS1Coef} | Période : ${subj7WorkS1Vals.subj7WorkS1Period} | Pourcentage : ${subj7WorkS1Vals.subj7WorkS1Percent*100}%`;
}

//Analyse Semester 1
if(subj7S1Note == null){
    averagesFields[6].innerHTML = '00';
}else{
    averagesFields[6].innerHTML = subj7S1Note;
}

//Analyse Intra 2
if(subj7IntraS2Vals == null){
    subjectInputs[27].value = "00";
    subjectItems[27].title = 'Matière : Analyse | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 2 | Pourcentage : 25%';
}else{
    subjectInputs[27].value = subj7IntraS2Vals.subj7IntraS2Result;
    subjectItems[27].title = `Matière : ${subj7IntraS2Vals.subj7IntraS2Name} | Note obtenue : ${subj7IntraS2Vals.subj7IntraS2Result}/100 | Coefficient : ${subj7IntraS2Vals.subj7IntraS2Coef} | Période : ${subj7IntraS2Vals.subj7IntraS2Period} | Pourcentage : ${subj7IntraS2Vals.subj7IntraS2Percent*100}%`;
}

//Analyse Final 2
if(subj7FinalS2Vals == null){
    subjectInputs[34].value = "00";
    subjectItems[34].title = 'Matière : Analyse | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 2 | Pourcentage : 50%';
}else{
    subjectInputs[34].value = subj7FinalS2Vals.subj7FinalS2Result;
    subjectItems[34].title = `Matière : ${subj7FinalS2Vals.subj7FinalS2Name} | Note obtenue : ${subj7FinalS2Vals.subj7FinalS2Result}/100 | Coefficient : ${subj7FinalS2Vals.subj7FinalS2Coef} | Période : ${subj7FinalS2Vals.subj7FinalS2Period} | Pourcentage : ${subj7FinalS2Vals.subj7FinalS2Percent*100}%`;
}

//Analyse Work 2
if(subj7WorkS2Vals == null){
    subjectInputs[41].value = "00";
    subjectItems[41].title = 'Matière : Analyse | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 2 | Pourcentage : 25%';
}else{
    subjectInputs[41].value = subj7WorkS2Vals.subj7WorkS2Result;
    subjectItems[41].title = `Matière : ${subj7WorkS2Vals.subj7WorkS2Name} | Note obtenue : ${subj7WorkS2Vals.subj7WorkS2Result}/100 | Coefficient : ${subj7WorkS2Vals.subj7WorkS2Coef} | Période : ${subj7WorkS2Vals.subj7WorkS2Period} | Pourcentage : ${subj7WorkS2Vals.subj7WorkS2Percent*100}%`;
}

//Analyse Semester 2
if(subj7S2Note == null){
    averagesFields[14].innerHTML = '00';
}else{
    averagesFields[14].innerHTML = subj7S2Note;
}

//Analyse Year Average
if(subj7GenNote == null){
    averagesFields[23].innerHTML = '00';
}else{
    averagesFields[23].innerHTML = subj7GenNote;
}









//Francais Final 1
if(subj8FinalS1Vals == null){
    subjectInputs[14].value = "00";
    subjectItems[14].title = 'Matière : Français | Note obtenue : 00/100 | Coefficient : 0.5 | Période : Final 1 | Pourcentage : 100%';
}else{
    subjectInputs[14].value = subj8FinalS1Vals.subj8FinalS1Result;
    subjectItems[14].title = `Matière : ${subj8FinalS1Vals.subj8FinalS1Name} | Note obtenue : ${subj8FinalS1Vals.subj8FinalS1Result}/100 | Coefficient : ${subj8FinalS1Vals.subj8FinalS1Coef} | Période : ${subj8FinalS1Vals.subj8FinalS1Period} | Pourcentage : ${subj8FinalS1Vals.subj8FinalS1Percent*100}%`;
}

//Semester 1
if(subj8S1Note == null){
    averagesFields[7].innerHTML = '00';
}else{
    averagesFields[7].innerHTML = subj8S1Note;
}

//Francais Final 2
if(subj8FinalS2Vals == null){
    subjectInputs[35].value = "00";
    subjectItems[35].title = 'Matière : Français | Note obtenue : 00/100 | Coefficient : 0.5 | Période : Final 2 | Pourcentage : 100%';
}else{
    subjectInputs[35].value = subj8FinalS2Vals.subj8FinalS2Result;
    subjectItems[35].title = `Matière : ${subj8FinalS2Vals.subj8FinalS2Name} | Note obtenue : ${subj8FinalS2Vals.subj8FinalS2Result}/100 | Coefficient : ${subj8FinalS2Vals.subj8FinalS2Coef} | Période : ${subj8FinalS2Vals.subj8FinalS2Period} | Pourcentage : ${subj8FinalS2Vals.subj8FinalS2Percent*100}%`;
}

//Semester 2
if(subj8S2Note == null){
    averagesFields[15].innerHTML = '00';
}else{
    averagesFields[15].innerHTML = subj8S2Note;
}

//Francais Year Average
if(subj8GenNote == null){
    averagesFields[24].innerHTML = '00';
}else{
    averagesFields[24].innerHTML = subj8GenNote;
}












//Probabilité Intra 2
if(subj9IntraS2Vals == null){
    subjectInputs[23].value = "00";
    subjectItems[23].title = 'Matière : Probabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Intra 2 | Pourcentage : 25%';
}else{
    subjectInputs[23].value = subj9IntraS2Vals.subj9IntraS2Result;
    subjectItems[23].title = `Matière : ${subj9IntraS2Vals.subj9IntraS2Name} | Note obtenue : ${subj9IntraS2Vals.subj9IntraS2Result}/100 | Coefficient : ${subj9IntraS2Vals.subj9IntraS2Coef} | Période : ${subj9IntraS2Vals.subj9IntraS2Period} | Pourcentage : ${subj9IntraS2Vals.subj9IntraS2Percent*100}%`;
}

//Probabilité Final 2
if(subj9FinalS2Vals == null){
    subjectInputs[30].value = "00";
    subjectItems[30].title = 'Matière : Probabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Final 2 | Pourcentage : 50%';
}else{
    subjectInputs[30].value = subj9FinalS2Vals.subj9FinalS2Result;
    subjectItems[30].title = `Matière : ${subj9FinalS2Vals.subj9FinalS2Name} | Note obtenue : ${subj9FinalS2Vals.subj9FinalS2Result}/100 | Coefficient : ${subj9FinalS2Vals.subj9FinalS2Coef} | Période : ${subj9FinalS2Vals.subj9FinalS2Period} | Pourcentage : ${subj9FinalS2Vals.subj9FinalS2Percent*100}%`;
}

//Probabilité Work 2
if(subj9WorkS2Vals == null){
    subjectInputs[37].value = "00";
    subjectItems[37].title = 'Matière : Probabilité | Note obtenue : 00/100 | Coefficient : 1.5 | Période : Devoir 2 | Pourcentage : 25%';
}else{
    subjectInputs[37].value = subj9WorkS2Vals.subj9WorkS2Result;
    subjectItems[37].title = `Matière : ${subj9WorkS2Vals.subj9WorkS2Name} | Note obtenue : ${subj9WorkS2Vals.subj9WorkS2Result}/100 | Coefficient : ${subj9WorkS2Vals.subj9WorkS2Coef} | Période : ${subj9WorkS2Vals.subj9WorkS2Period} | Pourcentage : ${subj9WorkS2Vals.subj9WorkS2Percent*100}%`;
}

//Semester 2
if(subj9S2Note == null){
    averagesFields[10].innerHTML = '00';
}else{
    averagesFields[10].innerHTML = subj9S2Note;
}

//Probabilité Year Average
if(subj9GenNote == null){
    averagesFields[19].innerHTML = '00';
}else{
    averagesFields[19].innerHTML = subj9GenNote;
}









//About averages
if(intraS1Average == null){
    averagesParag[0].innerHTML = "00.00";
}else{
    averagesParag[0].innerHTML = intraS1Average;
}

if(finalS1Average == null){
    averagesParag[1].innerHTML = "00.00";
}else{
    averagesParag[1].innerHTML = finalS1Average;
}

if(intraS2Average == null){
    averagesParag[2].innerHTML = "00.00";
}else{
    averagesParag[2].innerHTML = intraS2Average;
}

if(finalS2Average == null){
    averagesParag[3].innerHTML = "00.00";
}else{
    averagesParag[3].innerHTML = finalS2Average;
}

//About global averages
if(subjS1NoteAverage == null){
    globalAverageFields[0].innerHTML = '00.00';
}else{
    globalAverageFields[0].innerHTML = subjS1NoteAverage;
}

if(subjS2NoteAverage == null){
    globalAverageFields[1].innerHTML = '00.00';
}else{
    globalAverageFields[1].innerHTML = subjS2NoteAverage;
}

//About year general average
if(subjNoteAverage == null){
    globalAverageFields[2].innerHTML = '00.00';
}else{
    globalAverageFields[2].innerHTML = subjNoteAverage;
}





