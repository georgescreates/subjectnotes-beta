//Collected datas for intras of semester one
var subj1IntraS1Vals = JSON.parse(localStorage.getItem('subj1IntraS1Vals'));
var subj2IntraS1Vals = JSON.parse(localStorage.getItem('subj2IntraS1Vals'));
var subj3IntraS1Vals = JSON.parse(localStorage.getItem('subj3IntraS1Vals'));
var subj4IntraS1Vals = JSON.parse(localStorage.getItem('subj4IntraS1Vals'));
var subj5IntraS1Vals = JSON.parse(localStorage.getItem('subj5IntraS1Vals'));
var subj6IntraS1Vals = JSON.parse(localStorage.getItem('subj6IntraS1Vals'));
var subj7IntraS1Vals = JSON.parse(localStorage.getItem('subj7IntraS1Vals'));

//Collected datas for finals of semester one
var subj1FinalS1Vals = JSON.parse(localStorage.getItem('subj1FinalS1Vals'));
var subj2FinalS1Vals = JSON.parse(localStorage.getItem('subj2FinalS1Vals'));
var subj3FinalS1Vals = JSON.parse(localStorage.getItem('subj3FinalS1Vals'));
var subj4FinalS1Vals = JSON.parse(localStorage.getItem('subj4FinalS1Vals'));
var subj5FinalS1Vals = JSON.parse(localStorage.getItem('subj5FinalS1Vals'));
var subj6FinalS1Vals = JSON.parse(localStorage.getItem('subj6FinalS1Vals'));
var subj7FinalS1Vals = JSON.parse(localStorage.getItem('subj7FinalS1Vals'));
var subj8FinalS1Vals = JSON.parse(localStorage.getItem('subj8FinalS1Vals'));

//Collected datas for works of semester one
var subj2WorkS1Vals = JSON.parse(localStorage.getItem('subj2WorkS1Vals'));
var subj3WorkS1Vals = JSON.parse(localStorage.getItem('subj3WorkS1Vals'));
var subj4WorkS1Vals = JSON.parse(localStorage.getItem('subj4WorkS1Vals'));
var subj5WorkS1Vals = JSON.parse(localStorage.getItem('subj5WorkS1Vals'));
var subj6WorkS1Vals = JSON.parse(localStorage.getItem('subj6WorkS1Vals'));
var subj7WorkS1Vals = JSON.parse(localStorage.getItem('subj7WorkS1Vals'));

//Collected datas for intras of semester two
var subj1IntraS2Vals = JSON.parse(localStorage.getItem('subj1IntraS2Vals'));
var subj2IntraS2Vals = JSON.parse(localStorage.getItem('subj2IntraS2Vals'));
var subj3IntraS2Vals = JSON.parse(localStorage.getItem('subj3IntraS2Vals'));
var subj4IntraS2Vals = JSON.parse(localStorage.getItem('subj4IntraS2Vals'));
var subj5IntraS2Vals = JSON.parse(localStorage.getItem('subj5IntraS2Vals'));
var subj6IntraS2Vals = JSON.parse(localStorage.getItem('subj6IntraS2Vals'));
var subj7IntraS2Vals = JSON.parse(localStorage.getItem('subj7IntraS2Vals'));
var subj9IntraS2Vals = JSON.parse(localStorage.getItem('subj9IntraS2Vals'));

//Collected datas for finals of semester two
var subj1FinalS2Vals = JSON.parse(localStorage.getItem('subj1FinalS2Vals'));
var subj2FinalS2Vals = JSON.parse(localStorage.getItem('subj2FinalS2Vals'));
var subj3FinalS2Vals = JSON.parse(localStorage.getItem('subj3FinalS2Vals'));
var subj4FinalS2Vals = JSON.parse(localStorage.getItem('subj4FinalS2Vals'));
var subj5FinalS2Vals = JSON.parse(localStorage.getItem('subj5FinalS2Vals'));
var subj6FinalS2Vals = JSON.parse(localStorage.getItem('subj6FinalS2Vals'));
var subj7FinalS2Vals = JSON.parse(localStorage.getItem('subj7FinalS2Vals'));
var subj8FinalS2Vals = JSON.parse(localStorage.getItem('subj8FinalS2Vals'));
var subj9FinalS2Vals = JSON.parse(localStorage.getItem('subj9FinalS2Vals'));

//Collected datas for works of semester one
var subj2WorkS2Vals = JSON.parse(localStorage.getItem('subj2WorkS2Vals'));
var subj3WorkS2Vals = JSON.parse(localStorage.getItem('subj3WorkS2Vals'));
var subj4WorkS2Vals = JSON.parse(localStorage.getItem('subj4WorkS2Vals'));
var subj5WorkS2Vals = JSON.parse(localStorage.getItem('subj5WorkS2Vals'));
var subj6WorkS2Vals = JSON.parse(localStorage.getItem('subj6WorkS2Vals'));
var subj7WorkS2Vals = JSON.parse(localStorage.getItem('subj7WorkS2Vals'));
var subj9WorkS2Vals = JSON.parse(localStorage.getItem('subj9WorkS2Vals'));

//Getting the stored values of the averages
var intraS1Average = localStorage.getItem('intraS1Average');
var intraS2Average = localStorage.getItem('intraS2Average');
var finalS1Average = localStorage.getItem('finalS1Average');
var finalS2Average = localStorage.getItem('finalS2Average');

//Getting stored values of global notes
var subj1S1Note = localStorage.getItem('subj1S1Note');
var subj2S1Note = localStorage.getItem('subj2S1Note');
var subj3S1Note = localStorage.getItem('subj3S1Note');
var subj4S1Note = localStorage.getItem('subj4S1Note');
var subj5S1Note = localStorage.getItem('subj5S1Note');
var subj6S1Note = localStorage.getItem('subj6S1Note');
var subj7S1Note = localStorage.getItem('subj7S1Note');
var subj8S1Note = localStorage.getItem('subj8S1Note');

var subj1S2Note = localStorage.getItem('subj1S2Note');
var subj2S2Note = localStorage.getItem('subj2S2Note');
var subj3S2Note = localStorage.getItem('subj3S2Note');
var subj4S2Note = localStorage.getItem('subj4S2Note');
var subj5S2Note = localStorage.getItem('subj5S2Note');
var subj6S2Note = localStorage.getItem('subj6S2Note');
var subj7S2Note = localStorage.getItem('subj7S2Note');
var subj8S2Note = localStorage.getItem('subj8S2Note');
var subj9S2Note = localStorage.getItem('subj9S2Note');

var subj1GenNote = localStorage.getItem('subj1GenNote');
var subj2GenNote = localStorage.getItem('subj2GenNote');
var subj3GenNote = localStorage.getItem('subj3GenNote');
var subj4GenNote = localStorage.getItem('subj4GenNote');
var subj5GenNote = localStorage.getItem('subj5GenNote');
var subj6GenNote = localStorage.getItem('subj6GenNote');
var subj7GenNote = localStorage.getItem('subj7GenNote');
var subj8GenNote = localStorage.getItem('subj8GenNote');
var subj9GenNote = localStorage.getItem('subj9GenNote');

var subjS1NoteAverage = localStorage.getItem('subjS1NoteAverage');
var subjS2NoteAverage = localStorage.getItem('subjS2NoteAverage');

var subjNoteAverage = localStorage.getItem('subjNoteAverage');

var resetBtn = document.getElementById('reset-btn');
resetBtn.addEventListener('click', () => {
    
    if (confirm("Appuyez sur \'OK\' si vous êtes vraiment sûr de vouloir tout effacer.")) {
        window.localStorage.clear();
        location.reload();
    } 
})