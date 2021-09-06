var averagesFields = document.getElementsByClassName('average-field');
var globalAverageFields = document.getElementsByClassName("average-glob-field");

var selectedOption = document.getElementsByClassName('selected-option');

var subjectItems = document.getElementsByClassName('subject-item');

submitBtn.addEventListener('click', () => {
    //Computing average for Semester 1
    //Retrieving values
    let subj1IntraS1Vals = JSON.parse(localStorage.getItem('subj1IntraS1Vals'));
    let subj2IntraS1Vals = JSON.parse(localStorage.getItem('subj2IntraS1Vals'));
    let subj3IntraS1Vals = JSON.parse(localStorage.getItem('subj3IntraS1Vals'));
    let subj4IntraS1Vals = JSON.parse(localStorage.getItem('subj4IntraS1Vals'));
    let subj5IntraS1Vals = JSON.parse(localStorage.getItem('subj5IntraS1Vals'));
    let subj6IntraS1Vals = JSON.parse(localStorage.getItem('subj6IntraS1Vals'));
    let subj7IntraS1Vals = JSON.parse(localStorage.getItem('subj7IntraS1Vals'));

    let subj1FinalS1Vals = JSON.parse(localStorage.getItem('subj1FinalS1Vals'));
    let subj2FinalS1Vals = JSON.parse(localStorage.getItem('subj2FinalS1Vals'));
    let subj3FinalS1Vals = JSON.parse(localStorage.getItem('subj3FinalS1Vals'));
    let subj4FinalS1Vals = JSON.parse(localStorage.getItem('subj4FinalS1Vals'));
    let subj5FinalS1Vals = JSON.parse(localStorage.getItem('subj5FinalS1Vals'));
    let subj6FinalS1Vals = JSON.parse(localStorage.getItem('subj6FinalS1Vals'));
    let subj7FinalS1Vals = JSON.parse(localStorage.getItem('subj7FinalS1Vals'));
    let subj8FinalS1Vals = JSON.parse(localStorage.getItem('subj8FinalS1Vals'));

    let subj2WorkS1Vals = JSON.parse(localStorage.getItem('subj2WorkS1Vals'));
    let subj3WorkS1Vals = JSON.parse(localStorage.getItem('subj3WorkS1Vals'));
    let subj4WorkS1Vals = JSON.parse(localStorage.getItem('subj4WorkS1Vals'));
    let subj5WorkS1Vals = JSON.parse(localStorage.getItem('subj5WorkS1Vals'));
    let subj6WorkS1Vals = JSON.parse(localStorage.getItem('subj6WorkS1Vals'));
    let subj7WorkS1Vals = JSON.parse(localStorage.getItem('subj7WorkS1Vals'));



    //In case any value have been found in local Storage for a subject or an other
    if(subj1IntraS1Vals == null){
        subj1IntraS1Vals = {subj1IntraS1Name: 'Economie',subj1IntraS1Result: 0,subj1IntraS1Coef: 1.5,subj1IntraS1Period: 'Intra 1',subj1IntraS1Percent: 0.35};
    }
    if(subj2IntraS1Vals == null){
        subj2IntraS1Vals = {subj2IntraS1Name: 'Algèbre',subj2IntraS1Result: 0,subj2IntraS1Coef: 1.5,subj2IntraS1Period: 'Intra 1',subj2IntraS1Percent: 0.25};
    }
    if(subj3IntraS1Vals == null){
        subj3IntraS1Vals = {subj3IntraS1Name: 'Statistique Descriptive',subj3IntraS1Result : 0,subj3IntraS1Coef: 1.5,subj3IntraS1Period: 'Intra 1',subj3IntraS1Percent: 0.25};
    }
    if(subj4IntraS1Vals == null){
        subj4IntraS1Vals = {subj4IntraS1Name: 'Comptabilité',subj4IntraS1Result : 0,subj4IntraS1Coef: 1.5,subj4IntraS1Period: 'Intra 1',subj4IntraS1Percent: 0.30};
    }
    if(subj5IntraS1Vals == null){
        subj5IntraS1Vals = {subj5IntraS1Name: 'Espagnol',subj5IntraS1Result : 0,subj5IntraS1Coef: 1,subj5IntraS1Period: 'Intra 1',subj5IntraS1Percent: 0.25};
    }
    if(subj6IntraS1Vals == null){
        subj6IntraS1Vals = {subj6IntraS1Name: 'Anglais',subj6IntraS1Result : 0,subj6IntraS1Coef: 1,subj6IntraS1Period: 'Intra 1',subj6IntraS1Percent: 0.25};
    }
    if(subj7IntraS1Vals == null){
        subj7IntraS1Vals = {subj7IntraS1Name: 'Analyse',subj7IntraS1Result : 0,subj7IntraS1Coef: 1.5,subj7IntraS1Period: 'Intra 1',subj7IntraS1Percent: 0.25};
    }



    if(subj1FinalS1Vals == null){
        subj1FinalS1Vals = {subj1FinalS1Name: 'Economie',subj1FinalS1Result: 0,subj1FinalS1Coef: 1.5,subj1FinalS1Period: 'Final 1',subj1FinalS1Percent: 0.65};
    }
    if(subj2FinalS1Vals == null){
        subj2FinalS1Vals = {subj2FinalS1Name: 'Algèbre',subj2FinalS1Result: 0,subj2FinalS1Coef: 1.5,subj2FinalS1Period: 'Final 1',subj2FinalS1Percent: 0.5};
    }
    if(subj3FinalS1Vals == null){
        subj3FinalS1Vals = {subj3FinalS1Name: 'Statistique Descriptive',subj3FinalS1Result : 0,subj3FinalS1Coef: 1.5,subj3FinalS1Period: 'Final 1',subj3FinalS1Percent: 0.5};
    }
    if(subj4FinalS1Vals == null){
        subj4FinalS1Vals = {subj4FinalS1Name: 'Comptabilité',subj4FinalS1Result : 0,subj4FinalS1Coef: 1.5,subj4FinalS1Period: 'Final 1',subj4FinalS1Percent: 0.5};
    }
    if(subj5FinalS1Vals == null){
        subj5FinalS1Vals = {subj5FinalS1Name: 'Espagnol',subj5FinalS1Result : 0,subj5FinalS1Coef: 1,subj5FinalS1Period: 'Final 1',subj5FinalS1Percent: 0.5};
    }
    if(subj6FinalS1Vals == null){
        subj6FinalS1Vals = {subj6FinalS1Name: 'Anglais',subj6FinalS1Result : 0,subj6FinalS1Coef: 1,subj6FinalS1Period: 'Final 1',subj6FinalS1Percent: 0.5};
    }
    if(subj7FinalS1Vals == null){
        subj7FinalS1Vals = {subj7FinalS1Name: 'Analyse',subj7FinalS1Result : 0,subj7FinalS1Coef: 1.5,subj7FinalS1Period: 'Final 1',subj7FinalS1Percent: 0.5};
    }
    if(subj8FinalS1Vals == null){
        subj8FinalS1Vals = {subj8FinalS1Name: 'Français',subj8FinalS1Result : 0,subj8FinalS1Coef: 1.5,subj8FinalS1Period: 'Final 1',subj8FinalS1Percent: 1};
    }



    if(subj2WorkS1Vals == null){
        subj2WorkS1Vals = {subj2WorkS1Name: 'Algèbre',subj2WorkS1Result: 0,subj2WorkS1Coef: 1.5,subj2WorkS1Period: 'Work 1',subj2WorkS1Percent: 0.25};
    }
    if(subj3WorkS1Vals == null){
        subj3WorkS1Vals = {subj3WorkS1Name: 'Statistique Descriptive',subj3WorkS1Result : 0,subj3WorkS1Coef: 1.5,subj3WorkS1Period: 'Work 1',subj3WorkS1Percent: 0.25};
    }
    if(subj4WorkS1Vals == null){
        subj4WorkS1Vals = {subj4WorkS1Name: 'Comptabilité',subj4WorkS1Result : 0,subj4WorkS1Coef: 1.5,subj4WorkS1Period: 'Work 1',subj4WorkS1Percent: 0.25};
    }
    if(subj5WorkS1Vals == null){
        subj5WorkS1Vals = {subj5WorkS1Name: 'Espagnol',subj5WorkS1Result : 0,subj5WorkS1Coef: 1,subj5WorkS1Period: 'Work 1',subj5WorkS1Percent: 0.25};
    }
    if(subj6WorkS1Vals == null){
        subj6WorkS1Vals = {subj6WorkS1Name: 'Anglais',subj6WorkS1Result : 0,subj6WorkS1Coef: 1,subj6WorkS1Period: 'Work 1',subj6WorkS1Percent: 0.25};
    }
    if(subj7WorkS1Vals == null){
        subj7WorkS1Vals = {subj7WorkS1Name: 'Analyse',subj7WorkS1Result : 0,subj7WorkS1Coef: 1.5,subj7WorkS1Period: 'Work 1',subj7WorkS1Percent: 0.25};
    }



    //Computing average for Semester 2
    //Retrieving values
    let subj1IntraS2Vals = JSON.parse(localStorage.getItem('subj1IntraS2Vals'));
    let subj2IntraS2Vals = JSON.parse(localStorage.getItem('subj2IntraS2Vals'));
    let subj9IntraS2Vals = JSON.parse(localStorage.getItem('subj9IntraS2Vals'));
    let subj4IntraS2Vals = JSON.parse(localStorage.getItem('subj4IntraS2Vals'));
    let subj5IntraS2Vals = JSON.parse(localStorage.getItem('subj5IntraS2Vals'));
    let subj6IntraS2Vals = JSON.parse(localStorage.getItem('subj6IntraS2Vals'));
    let subj7IntraS2Vals = JSON.parse(localStorage.getItem('subj7IntraS2Vals'));

    let subj1FinalS2Vals = JSON.parse(localStorage.getItem('subj1FinalS2Vals'));
    let subj2FinalS2Vals = JSON.parse(localStorage.getItem('subj2FinalS2Vals'));
    let subj9FinalS2Vals = JSON.parse(localStorage.getItem('subj9FinalS2Vals'));
    let subj4FinalS2Vals = JSON.parse(localStorage.getItem('subj4FinalS2Vals'));
    let subj5FinalS2Vals = JSON.parse(localStorage.getItem('subj5FinalS2Vals'));
    let subj6FinalS2Vals = JSON.parse(localStorage.getItem('subj6FinalS2Vals'));
    let subj7FinalS2Vals = JSON.parse(localStorage.getItem('subj7FinalS2Vals'));
    let subj8FinalS2Vals = JSON.parse(localStorage.getItem('subj8FinalS2Vals'));

    let subj2WorkS2Vals = JSON.parse(localStorage.getItem('subj2WorkS2Vals'));
    let subj9WorkS2Vals = JSON.parse(localStorage.getItem('subj9WorkS2Vals'));
    let subj4WorkS2Vals = JSON.parse(localStorage.getItem('subj4WorkS2Vals'));
    let subj5WorkS2Vals = JSON.parse(localStorage.getItem('subj5WorkS2Vals'));
    let subj6WorkS2Vals = JSON.parse(localStorage.getItem('subj6WorkS2Vals'));
    let subj7WorkS2Vals = JSON.parse(localStorage.getItem('subj7WorkS2Vals'));



    //In case any value have been found in local Storage for a subject or an other
    if(subj1IntraS2Vals == null){
        subj1IntraS2Vals = {subj1IntraS2Name: 'Economie',subj1IntraS2Result: 0,subj1IntraS2Coef: 1.5,subj1IntraS2Period: 'Intra 2',subj1IntraS2Percent: 0.35};
    }
    if(subj2IntraS2Vals == null){
        subj2IntraS2Vals = {subj2IntraS2Name: 'Algèbre',subj2IntraS2Result: 0,subj2IntraS2Coef: 1.5,subj2IntraS2Period: 'Intra 2',subj2IntraS2Percent: 0.25};
    }
    if(subj9IntraS2Vals == null){
        subj9IntraS2Vals = {subj9IntraS2Name: 'Probabilité',subj9IntraS2Result : 0,subj9IntraS2Coef: 1.5,subj9IntraS2Period: 'Intra 2',subj9IntraS2Percent: 0.25};
    }
    if(subj4IntraS2Vals == null){
        subj4IntraS2Vals = {subj4IntraS2Name: 'Comptabilité',subj4IntraS2Result : 0,subj4IntraS2Coef: 1.5,subj4IntraS2Period: 'Intra 2',subj4IntraS2Percent: 0.30};
    }
    if(subj5IntraS2Vals == null){
        subj5IntraS2Vals = {subj5IntraS2Name: 'Espagnol',subj5IntraS2Result : 0,subj5IntraS2Coef: 1,subj5IntraS2Period: 'Intra 2',subj5IntraS2Percent: 0.25};
    }
    if(subj6IntraS2Vals == null){
        subj6IntraS2Vals = {subj6IntraS2Name: 'Anglais',subj6IntraS2Result : 0,subj6IntraS2Coef: 1,subj6IntraS2Period: 'Intra 2',subj6IntraS2Percent: 0.25};
    }
    if(subj7IntraS2Vals == null){
        subj7IntraS2Vals = {subj7IntraS2Name: 'Analyse',subj7IntraS2Result : 0,subj7IntraS2Coef: 1.5,subj7IntraS2Period: 'Intra 2',subj7IntraS2Percent: 0.25};
    }




    if(subj1FinalS2Vals == null){
        subj1FinalS2Vals = {subj1FinalS2Name: 'Economie',subj1FinalS2Result: 0,subj1FinalS2Coef: 1.5,subj1FinalS2Period: 'Final 2',subj1FinalS2Percent: 0.65};
    }
    if(subj2FinalS2Vals == null){
        subj2FinalS2Vals = {subj2FinalS2Name: 'Algèbre',subj2FinalS2Result: 0,subj2FinalS2Coef: 1.5,subj2FinalS2Period: 'Final 2',subj2FinalS2Percent: 0.5};
    }
    if(subj9FinalS2Vals == null){
        subj9FinalS2Vals = {subj9FinalS2Name: 'Probabilité',subj9FinalS2Result : 0,subj9FinalS2Coef: 1.5,subj9FinalS2Period: 'Final 2',subj9FinalS2Percent: 0.5};
    }
    if(subj4FinalS2Vals == null){
        subj4FinalS2Vals = {subj4FinalS2Name: 'Comptabilité',subj4FinalS2Result : 0,subj4FinalS2Coef: 1.5,subj4FinalS2Period: 'Final 2',subj4FinalS2Percent: 0.5};
    }
    if(subj5FinalS2Vals == null){
        subj5FinalS2Vals = {subj5FinalS2Name: 'Espagnol',subj5FinalS2Result : 0,subj5FinalS2Coef: 1,subj5FinalS2Period: 'Final 2',subj5FinalS2Percent: 0.5};
    }
    if(subj6FinalS2Vals == null){
        subj6FinalS2Vals = {subj6FinalS2Name: 'Anglais',subj6FinalS2Result : 0,subj6FinalS2Coef: 1,subj6FinalS2Period: 'Final 2',subj6FinalS2Percent: 0.5};
    }
    if(subj7FinalS2Vals == null){
        subj7FinalS2Vals = {subj7FinalS2Name: 'Analyse',subj7FinalS2Result : 0,subj7FinalS2Coef: 1.5,subj7FinalS2Period: 'Final 2',subj7FinalS2Percent: 0.5};
    }
    if(subj8FinalS2Vals == null){
        subj8FinalS2Vals = {subj8FinalS2Name: 'Français',subj8FinalS2Result : 0,subj8FinalS2Coef: 1.5,subj8FinalS2Period: 'Final 2',subj8FinalS2Percent: 1};
    }



    if(subj2WorkS2Vals == null){
        subj2WorkS2Vals = {subj2WorkS2Name: 'Algèbre',subj2WorkS2Result: 0,subj2WorkS2Coef: 1.5,subj2WorkS2Period: 'Work 2',subj2WorkS2Percent: 0.25};
    }
    if(subj9WorkS2Vals == null){
        subj9WorkS2Vals = {subj9WorkS2Name: 'Probabilité',subj9WorkS2Result : 0,subj9WorkS2Coef: 1.5,subj9WorkS2Period: 'Work 2',subj9WorkS2Percent: 0.25};
    }
    if(subj4WorkS2Vals == null){
        subj4WorkS2Vals = {subj4WorkS2Name: 'Comptabilité',subj4WorkS2Result : 0,subj4WorkS2Coef: 1.5,subj4WorkS2Period: 'Work 2',subj4WorkS2Percent: 0.25};
    }
    if(subj5WorkS2Vals == null){
        subj5WorkS2Vals = {subj5WorkS2Name: 'Espagnol',subj5WorkS2Result : 0,subj5WorkS2Coef: 1,subj5WorkS2Period: 'Work 2',subj5WorkS2Percent: 0.25};
    }
    if(subj6WorkS2Vals == null){
        subj6WorkS2Vals = {subj6WorkS2Name: 'Anglais',subj6WorkS2Result : 0,subj6WorkS2Coef: 1,subj6WorkS2Period: 'Work 2',subj6WorkS2Percent: 0.25};
    }
    if(subj7WorkS2Vals == null){
        subj7WorkS2Vals = {subj7WorkS2Name: 'Analyse',subj7WorkS2Result : 0,subj7WorkS2Coef: 1.5,subj7WorkS2Period: 'Work 2',subj7WorkS2Percent: 0.25};
    }



    //Average for "Economie"
    if(selectedOption[0].value == "Economie"){
        //Semester 1 average
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1"){
            //Summing the notes of the subject for the semester 1
            let subj1IntraS1 = subj1IntraS1Vals.subj1IntraS1Result * subj1IntraS1Vals.subj1IntraS1Percent;
            let subj1FinalS1 = subj1FinalS1Vals.subj1FinalS1Result * subj1FinalS1Vals.subj1FinalS1Percent;

            let subj1S1Note = [Math.round((subj1IntraS1 + subj1FinalS1)*100)]/100; //The semester 1 result of "Economie" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj1S1Note', subj1S1Note);

            //Displaying the average of "Economie" for the Semester 1
            averagesFields[0].innerHTML = subj1S1Note;
        }
        //Semester 2 average
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2"){
            //Summing the notes of the subject for the semester 2
            let subj1IntraS2 = subj1IntraS2Vals.subj1IntraS2Result * subj1IntraS2Vals.subj1IntraS2Percent;
            let subj1FinalS2 = subj1FinalS2Vals.subj1FinalS2Result * subj1FinalS2Vals.subj1FinalS2Percent;

            let subj1S2Note = [Math.round((subj1IntraS2 + subj1FinalS2)*100)]/100; //The semester 2 result of "Economie" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj1S2Note', subj1S2Note);

            //Displaying the average of "Economie" for the Semester 2
            averagesFields[8].innerHTML = subj1S2Note;
        }
        //General average
        let subj1GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj1S1Note')) + JSON.parse(localStorage.getItem('subj1S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Economie"
        localStorage.setItem('subj1GenNote', subj1GenNote);

        //Displaying its value
        averagesFields[16].innerHTML = subj1GenNote;
    }
    
    


    //Average for "Algèbre"
    if(selectedOption[0].value == "Algèbre"){
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1" || selectedOption[3].value == "Work 1"){
            //Semester 1 average
            //Summing the notes of the subject for the semester 1
            let subj2IntraS1 = subj2IntraS1Vals.subj2IntraS1Result * subj2IntraS1Vals.subj2IntraS1Percent;
            let subj2FinalS1 = subj2FinalS1Vals.subj2FinalS1Result * subj2FinalS1Vals.subj2FinalS1Percent;
            let subj2WorkS1 = subj2WorkS1Vals.subj2WorkS1Result * subj2WorkS1Vals.subj2WorkS1Percent;

            let subj2S1Note = [Math.round((subj2IntraS1 + subj2FinalS1 + subj2WorkS1)*100)]/100; //The semester 1 result of "Algèbre" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj2S1Note', subj2S1Note);

            //Displaying the average of "Algèbre" for the Semester 1
            averagesFields[1].innerHTML = subj2S1Note;
        }
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2" || selectedOption[3].value == "Work 2"){
            //Semester 2 average
            //Summing the notes of the subject for the semester 2
            let subj2IntraS2 = subj2IntraS2Vals.subj2IntraS2Result * subj2IntraS2Vals.subj2IntraS2Percent;
            let subj2FinalS2 = subj2FinalS2Vals.subj2FinalS2Result * subj2FinalS2Vals.subj2FinalS2Percent;
            let subj2WorkS2 = subj2WorkS2Vals.subj2WorkS2Result * subj2WorkS2Vals.subj2WorkS2Percent;

            let subj2S2Note = [Math.round((subj2IntraS2 + subj2FinalS2 + subj2WorkS2)*100)]/100; //The semester 2 result of "Algèbre" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj2S2Note', subj2S2Note);

            //Displaying the average of "Algèbre" for the Semester 2
            averagesFields[9].innerHTML = subj2S2Note;
        }
        //General average
        let subj2GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj2S1Note')) + JSON.parse(localStorage.getItem('subj2S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Algèbre"
        localStorage.setItem('subj2GenNote', subj2GenNote);

        //Displaying its value
        averagesFields[17].innerHTML = subj2GenNote;
    }



    //Average for "Statistique Descriptive"
    if(selectedOption[0].value == "Statistique Descriptive"){
        //Semester 1 average
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1" || selectedOption[3].value == "Work 1"){
            //Summing the notes of the subject for the semester 1
            let subj3IntraS1 = subj3IntraS1Vals.subj3IntraS1Result * subj3IntraS1Vals.subj3IntraS1Percent;
            let subj3FinalS1 = subj3FinalS1Vals.subj3FinalS1Result * subj3FinalS1Vals.subj3FinalS1Percent;
            let subj3WorkS1 = subj3WorkS1Vals.subj3WorkS1Result * subj3WorkS1Vals.subj3WorkS1Percent;

            let subj3S1Note = [Math.round((subj3IntraS1 + subj3FinalS1 + subj3WorkS1)*100)]/100; //The semester 1 result of "Statistique Descriptive" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj3S1Note', subj3S1Note);

            //Displaying the average of "Statistique Descriptive" for the Semester 1
            averagesFields[2].innerHTML = subj3S1Note;
        }
        //General average
        let subj3GenNote = [Math.round(JSON.parse(localStorage.getItem('subj3S1Note'))*100)]/100;

        //Store the final average of the subject "Statistique Descriptive"
        localStorage.setItem('subj3GenNote', subj3GenNote);

        //Displaying its value
        averagesFields[18].innerHTML = subj3GenNote;
    }
    



    //Average for "Comptabilité"
    if(selectedOption[0].value == "Comptabilité"){
        //Semester 1 average
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1" || selectedOption[3].value == "Work 1"){
            //Summing the notes of the subject for the semester 1
            let subj4IntraS1 = subj4IntraS1Vals.subj4IntraS1Result * subj4IntraS1Vals.subj4IntraS1Percent;
            let subj4FinalS1 = subj4FinalS1Vals.subj4FinalS1Result * subj4FinalS1Vals.subj4FinalS1Percent;
            let subj4WorkS1 = subj4WorkS1Vals.subj4WorkS1Result * subj4WorkS1Vals.subj4WorkS1Percent;

            let subj4S1Note = [Math.round((subj4IntraS1 + subj4FinalS1 + subj4WorkS1)*100)]/100; //The semester 1 result of "Comptabilité" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj4S1Note', subj4S1Note);

            //Displaying the average of "Comptabilité" for the Semester 1
            averagesFields[3].innerHTML = subj4S1Note;
        }
        //Semester 2 average
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2" || selectedOption[3].value == "Work 2"){
            //Summing the notes of the subject for the semester 2
            let subj4IntraS2 = subj4IntraS2Vals.subj4IntraS2Result * subj4IntraS2Vals.subj4IntraS2Percent;
            let subj4FinalS2 = subj4FinalS2Vals.subj4FinalS2Result * subj4FinalS2Vals.subj4FinalS2Percent;
            let subj4WorkS2 = subj4WorkS2Vals.subj4WorkS2Result * subj4WorkS2Vals.subj4WorkS2Percent;

            let subj4S2Note = [Math.round((subj4IntraS2 + subj4FinalS2 + subj4WorkS2)*100)]/100; //The semester 2 result of "Comptabilité" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj4S2Note', subj4S2Note);

            //Displaying the average of "Comptabilité" for the Semester 2
            averagesFields[11].innerHTML = subj4S2Note;
        }
        //General average
        let subj4GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj4S1Note')) + JSON.parse(localStorage.getItem('subj4S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Comptabilité"
        localStorage.setItem('subj4GenNote', subj4GenNote);

        //Displaying its value
        averagesFields[20].innerHTML = subj4GenNote;
    }
    



    //Average for "Espagnol"
    if(selectedOption[0].value == "Espagnol"){
        //Semester 1 average
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1" || selectedOption[3].value == "Work 1"){
            //Summing the notes of the subject for the semester 1
            let subj5IntraS1 = subj5IntraS1Vals.subj5IntraS1Result * subj5IntraS1Vals.subj5IntraS1Percent;
            let subj5FinalS1 = subj5FinalS1Vals.subj5FinalS1Result * subj5FinalS1Vals.subj5FinalS1Percent;
            let subj5WorkS1 = subj5WorkS1Vals.subj5WorkS1Result * subj5WorkS1Vals.subj5WorkS1Percent;

            let subj5S1Note = [Math.round((subj5IntraS1 + subj5FinalS1 + subj5WorkS1)*100)]/100; //The semester 1 result of "Espagnol" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj5S1Note', subj5S1Note);

            //Displaying the average of "Espagnol" for the Semester 1
            averagesFields[4].innerHTML = subj5S1Note;
        }
        //Semester 2 average
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2" || selectedOption[3].value == "Work 2"){
            //Summing the notes of the subject for the semester 2
            let subj5IntraS2 = subj5IntraS2Vals.subj5IntraS2Result * subj5IntraS2Vals.subj5IntraS2Percent;
            let subj5FinalS2 = subj5FinalS2Vals.subj5FinalS2Result * subj5FinalS2Vals.subj5FinalS2Percent;
            let subj5WorkS2 = subj5WorkS2Vals.subj5WorkS2Result * subj5WorkS2Vals.subj5WorkS2Percent;

            let subj5S2Note = [Math.round((subj5IntraS2 + subj5FinalS2 + subj5WorkS2)*100)]/100; //The semester 2 result of "Espagnol" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj5S2Note', subj5S2Note);

            //Displaying the average of "Espagnol" for the Semester 2
            averagesFields[12].innerHTML = subj5S2Note;
        }
        //General average
        let subj5GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj5S1Note')) + JSON.parse(localStorage.getItem('subj5S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Espagnol"
        localStorage.setItem('subj5GenNote', subj5GenNote);

        //Displaying its value
        averagesFields[21].innerHTML = subj5GenNote;
    }

    



    //Average for "Anglais"
    if(selectedOption[0].value == "Anglais"){
        //Semester 1 average
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1" || selectedOption[3].value == "Work 1"){
            //Summing the notes of the subject for the semester 2
            let subj6IntraS1 = subj6IntraS1Vals.subj6IntraS1Result * subj6IntraS1Vals.subj6IntraS1Percent;
            let subj6FinalS1 = subj6FinalS1Vals.subj6FinalS1Result * subj6FinalS1Vals.subj6FinalS1Percent;
            let subj6WorkS1 = subj6WorkS1Vals.subj6WorkS1Result * subj6WorkS1Vals.subj6WorkS1Percent;

            let subj6S1Note = [Math.round((subj6IntraS1 + subj6FinalS1 + subj6WorkS1)*100)]/100; //The semester 1 result of "Anglais" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj6S1Note', subj6S1Note);

            //Displaying the average of "Anglais" for the Semester 2
            averagesFields[5].innerHTML = subj6S1Note;
        }
        //Semester 2 average
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2" || selectedOption[3].value == "Work 2"){
            //Summing the notes of the subject for the semester 2
            let subj6IntraS2 = subj6IntraS2Vals.subj6IntraS2Result * subj6IntraS2Vals.subj6IntraS2Percent;
            let subj6FinalS2 = subj6FinalS2Vals.subj6FinalS2Result * subj6FinalS2Vals.subj6FinalS2Percent;
            let subj6WorkS2 = subj6WorkS2Vals.subj6WorkS2Result * subj6WorkS2Vals.subj6WorkS2Percent;

            let subj6S2Note = [Math.round((subj6IntraS2 + subj6FinalS2 + subj6WorkS2)*100)]/100; //The semester 2 result of "Anglais" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj6S2Note', subj6S2Note);

            //Displaying the average of "Anglais" for the Semester 2
            averagesFields[13].innerHTML = subj6S2Note;
        }
        //General average
        let subj6GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj6S1Note')) + JSON.parse(localStorage.getItem('subj6S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Anglais"
        localStorage.setItem('subj6GenNote', subj6GenNote);

        //Displaying its value
        averagesFields[22].innerHTML = subj6GenNote;
    }
    



    //Average for "Analyse"
    if(selectedOption[0].value == "Analyse"){
        //Semester 1 average
        if(selectedOption[3].value == "Intra 1" || selectedOption[3].value == "Final 1" || selectedOption[3].value == "Work 1"){
            //Summing the notes of the subject for the semester 1
            let subj7IntraS1 = subj7IntraS1Vals.subj7IntraS1Result * subj7IntraS1Vals.subj7IntraS1Percent;
            let subj7FinalS1 = subj7FinalS1Vals.subj7FinalS1Result * subj7FinalS1Vals.subj7FinalS1Percent;
            let subj7WorkS1 = subj7WorkS1Vals.subj7WorkS1Result * subj7WorkS1Vals.subj7WorkS1Percent;

            let subj7S1Note = [Math.round((subj7IntraS1 + subj7FinalS1 + subj7WorkS1)*100)]/100; //The semester 1 result of "Analyse" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj7S1Note', subj7S1Note);

            //Displaying the average of "Analyse" for the Semester 1
            averagesFields[6].innerHTML = subj7S1Note;
        }
        //Semester 2 average
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2" || selectedOption[3].value == "Work 2"){
            //Summing the notes of the subject for the semester 2
            let subj7IntraS2 = subj7IntraS2Vals.subj7IntraS2Result * subj7IntraS2Vals.subj7IntraS2Percent;
            let subj7FinalS2 = subj7FinalS2Vals.subj7FinalS2Result * subj7FinalS2Vals.subj7FinalS2Percent;
            let subj7WorkS2 = subj7WorkS2Vals.subj7WorkS2Result * subj7WorkS2Vals.subj7WorkS2Percent;

            let subj7S2Note = [Math.round((subj7IntraS2 + subj7FinalS2 + subj7WorkS2)*100)]/100; //The semester 2 result of "Analyse" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj7S2Note', subj7S2Note);

            //Displaying the average of "Analyse" for the Semester 2
            averagesFields[14].innerHTML = subj7S2Note;
        }
        //General average
        let subj7GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj7S1Note')) + JSON.parse(localStorage.getItem('subj7S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Analyse"
        localStorage.setItem('subj7GenNote', subj7GenNote);

        //Displaying its value
        averagesFields[23].innerHTML = subj7GenNote;
    }
    



    //Average for "Français"
    if(selectedOption[0].value == "Français"){
        //Semester 1 average
        if(selectedOption[3].value == "Final 1"){
            //Summing the notes of the subject for the semester 1
            let subj8FinalS1 = subj8FinalS1Vals.subj8FinalS1Result * subj8FinalS1Vals.subj8FinalS1Percent;

            let subj8S1Note = [Math.round((subj8FinalS1)*100)]/100; //The semester 1 result of "Français" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj8S1Note', subj8S1Note);

            //Displaying the average of "Français" for the Semester 1
            averagesFields[7].innerHTML = subj8S1Note;
        }
        //Semester 2 average
        if(selectedOption[3].value == "Final 2"){
            //Summing the notes of the subject for the semester 2
            let subj8FinalS2 = subj8FinalS2Vals.subj8FinalS2Result * subj8FinalS2Vals.subj8FinalS2Percent;

            let subj8S2Note = [Math.round((subj8FinalS2)*100)]/100; //The semester 2 result of "Français" on 100
            
            //Storing the semester 2 average
            localStorage.setItem('subj8S2Note', subj8S2Note);

            //Displaying the average of "Français" for the Semester 2
            averagesFields[15].innerHTML = subj8S2Note;
        }
        //General average
        let subj8GenNote = [Math.round(((JSON.parse(localStorage.getItem('subj8S1Note')) + JSON.parse(localStorage.getItem('subj8S2Note'))) / 2)*100)]/100;

        //Store the final average of the subject "Français"
        localStorage.setItem('subj8GenNote', subj8GenNote);

        //Displaying its value
        averagesFields[24].innerHTML = subj8GenNote;
    }
    



    //Average for "Probabilité"
    if(selectedOption[0].value == "Probabilité"){
        //Semester 2 average
        if(selectedOption[3].value == "Intra 2" || selectedOption[3].value == "Final 2" || selectedOption[3].value == "Work 2"){
            //Summing the notes of the subject for the semester 1
            let subj9IntraS2 = subj9IntraS2Vals.subj9IntraS2Result * subj9IntraS2Vals.subj9IntraS2Percent;
            let subj9FinalS2 = subj9FinalS2Vals.subj9FinalS2Result * subj9FinalS2Vals.subj9FinalS2Percent;
            let subj9WorkS2 = subj9WorkS2Vals.subj9WorkS2Result * subj9WorkS2Vals.subj9WorkS2Percent;

            let subj9S2Note = [Math.round((subj9IntraS2 + subj9FinalS2 + subj9WorkS2)*100)]/100; //The semester 2 result of "Probabilité" on 100
            
            //Storing the semester 1 average
            localStorage.setItem('subj9S2Note', subj9S2Note);

            //Displaying the average of "Economie" for the Semester 1
            averagesFields[10].innerHTML = subj9S2Note;
        }
        //General average
        let subj9GenNote = [Math.round(JSON.parse(localStorage.getItem('subj9S2Note'))*100)]/100;

        //Store the final average of the subject "Algèbre"
        localStorage.setItem('subj9GenNote', subj9GenNote);

        //Displaying its value
        averagesFields[19].innerHTML = subj9GenNote;
    }    









    //General average for Semester 1
    let subj1S1Note = JSON.parse(localStorage.getItem('subj1S1Note'));
    let subj2S1Note = JSON.parse(localStorage.getItem('subj2S1Note'));
    let subj3S1Note = JSON.parse(localStorage.getItem('subj3S1Note'));
    let subj4S1Note = JSON.parse(localStorage.getItem('subj4S1Note'));
    let subj5S1Note = JSON.parse(localStorage.getItem('subj5S1Note'));
    let subj6S1Note = JSON.parse(localStorage.getItem('subj6S1Note'));
    let subj7S1Note = JSON.parse(localStorage.getItem('subj7S1Note'));
    let subj8S1Note = JSON.parse(localStorage.getItem('subj8S1Note'));

    //Computing this average
    let subjS1Note = ((subj1S1Note*1.5)+(subj2S1Note*1.5)+(subj3S1Note*1.5)+(subj4S1Note*1.5)+(subj5S1Note*1)+(subj6S1Note*1)+(subj7S1Note*1.5)+(subj8S1Note*0.5))/10;
    let subjS1NoteAverage = [Math.round(subjS1Note*100)]/100;

    //Storing its value
    localStorage.setItem('subjS1NoteAverage', subjS1NoteAverage);

    //Displaying it
    globalAverageFields[0].innerHTML = subjS1NoteAverage;



    //General average for Semester 2
    let subj1S2Note = JSON.parse(localStorage.getItem('subj1S2Note'));
    let subj2S2Note = JSON.parse(localStorage.getItem('subj2S2Note'));
    let subj9S2Note = JSON.parse(localStorage.getItem('subj9S2Note'));
    let subj4S2Note = JSON.parse(localStorage.getItem('subj4S2Note'));
    let subj5S2Note = JSON.parse(localStorage.getItem('subj5S2Note'));
    let subj6S2Note = JSON.parse(localStorage.getItem('subj6S2Note'));
    let subj7S2Note = JSON.parse(localStorage.getItem('subj7S2Note'));
    let subj8S2Note = JSON.parse(localStorage.getItem('subj8S2Note'));

    //Computing this average
    let subjS2Note = ((subj1S2Note*1.5)+(subj2S2Note*1.5)+(subj9S2Note*1.5)+(subj4S2Note*1.5)+(subj5S2Note*1)+(subj6S2Note*1)+(subj7S2Note*1.5)+(subj8S2Note*0.5))/10;
    let subjS2NoteAverage = [Math.round(subjS2Note*100)]/100;

    //Storing its value
    localStorage.setItem('subjS2NoteAverage', subjS2NoteAverage);

    //Displaying it
    globalAverageFields[1].innerHTML = subjS2NoteAverage;




    //General average for the year
    let subj1GenNote = JSON.parse(localStorage.getItem('subj1GenNote'));
    let subj2GenNote = JSON.parse(localStorage.getItem('subj2GenNote'));
    let subj3GenNote = JSON.parse(localStorage.getItem('subj3GenNote'));
    let subj9GenNote = JSON.parse(localStorage.getItem('subj9GenNote'));
    let subj4GenNote = JSON.parse(localStorage.getItem('subj4GenNote'));
    let subj5GenNote = JSON.parse(localStorage.getItem('subj5GenNote'));
    let subj6GenNote = JSON.parse(localStorage.getItem('subj6GenNote'));
    let subj7GenNote = JSON.parse(localStorage.getItem('subj7GenNote'));
    let subj8GenNote = JSON.parse(localStorage.getItem('subj8GenNote'));

    //Computing this average
    let subjGenNote = ((subj1GenNote*1.5)+(subj2GenNote*1.5)+(subj3GenNote*1.5)+(subj9GenNote*1.5)+(subj4GenNote*1.5)+(subj5GenNote*1)+(subj6GenNote*1)+(subj7GenNote*1.5)+(subj8GenNote*0.5))/11.5;
    let subjNoteAverage = [Math.round(subjGenNote*100)]/100;

    //Storing its value
    localStorage.setItem('subjNoteAverage', subjNoteAverage);

    //Displaying it
    globalAverageFields[2].innerHTML = subjNoteAverage;



    //Setting values for subject items
    subjectItems[0].title = `Matière : ${subj1IntraS1Vals.subj1IntraS1Name} | Note obtenue : ${subj1IntraS1Vals.subj1IntraS1Result}/100 | Coefficient : ${subj1IntraS1Vals.subj1IntraS1Coef} | Période : ${subj1IntraS1Vals.subj1IntraS1Period} | Pourcentage : ${subj1IntraS1Vals.subj1IntraS1Percent*100}%`;
    subjectItems[1].title = `Matière : ${subj2IntraS1Vals.subj2IntraS1Name} | Note obtenue : ${subj2IntraS1Vals.subj2IntraS1Result}/100 | Coefficient : ${subj2IntraS1Vals.subj2IntraS1Coef} | Période : ${subj2IntraS1Vals.subj2IntraS1Period} | Pourcentage : ${subj2IntraS1Vals.subj2IntraS1Percent*100}%`;
    subjectItems[2].title = `Matière : ${subj3IntraS1Vals.subj3IntraS1Name} | Note obtenue : ${subj3IntraS1Vals.subj3IntraS1Result}/100 | Coefficient : ${subj3IntraS1Vals.subj3IntraS1Coef} | Période : ${subj3IntraS1Vals.subj3IntraS1Period} | Pourcentage : ${subj3IntraS1Vals.subj3IntraS1Percent*100}%`;
    subjectItems[3].title = `Matière : ${subj4IntraS1Vals.subj4IntraS1Name} | Note obtenue : ${subj4IntraS1Vals.subj4IntraS1Result}/100 | Coefficient : ${subj4IntraS1Vals.subj4IntraS1Coef} | Période : ${subj4IntraS1Vals.subj4IntraS1Period} | Pourcentage : ${subj4IntraS1Vals.subj4IntraS1Percent*100}%`;
    subjectItems[4].title = `Matière : ${subj5IntraS1Vals.subj5IntraS1Name} | Note obtenue : ${subj5IntraS1Vals.subj5IntraS1Result}/100 | Coefficient : ${subj5IntraS1Vals.subj5IntraS1Coef} | Période : ${subj5IntraS1Vals.subj5IntraS1Period} | Pourcentage : ${subj5IntraS1Vals.subj5IntraS1Percent*100}%`;
    subjectItems[5].title = `Matière : ${subj6IntraS1Vals.subj6IntraS1Name} | Note obtenue : ${subj6IntraS1Vals.subj6IntraS1Result}/100 | Coefficient : ${subj6IntraS1Vals.subj6IntraS1Coef} | Période : ${subj6IntraS1Vals.subj6IntraS1Period} | Pourcentage : ${subj6IntraS1Vals.subj6IntraS1Percent*100}%`;
    subjectItems[6].title = `Matière : ${subj7IntraS1Vals.subj7IntraS1Name} | Note obtenue : ${subj7IntraS1Vals.subj7IntraS1Result}/100 | Coefficient : ${subj7IntraS1Vals.subj7IntraS1Coef} | Période : ${subj7IntraS1Vals.subj7IntraS1Period} | Pourcentage : ${subj7IntraS1Vals.subj7IntraS1Percent*100}%`;

    subjectItems[7].title = `Matière : ${subj1FinalS1Vals.subj1FinalS1Name} | Note obtenue : ${subj1FinalS1Vals.subj1FinalS1Result}/100 | Coefficient : ${subj1FinalS1Vals.subj1FinalS1Coef} | Période : ${subj1FinalS1Vals.subj1FinalS1Period} | Pourcentage : ${subj1FinalS1Vals.subj1FinalS1Percent*100}%`;
    subjectItems[8].title = `Matière : ${subj2FinalS1Vals.subj2FinalS1Name} | Note obtenue : ${subj2FinalS1Vals.subj2FinalS1Result}/100 | Coefficient : ${subj2FinalS1Vals.subj2FinalS1Coef} | Période : ${subj2FinalS1Vals.subj2FinalS1Period} | Pourcentage : ${subj2FinalS1Vals.subj2FinalS1Percent*100}%`;
    subjectItems[9].title = `Matière : ${subj3FinalS1Vals.subj3FinalS1Name} | Note obtenue : ${subj3FinalS1Vals.subj3FinalS1Result}/100 | Coefficient : ${subj3FinalS1Vals.subj3FinalS1Coef} | Période : ${subj3FinalS1Vals.subj3FinalS1Period} | Pourcentage : ${subj3FinalS1Vals.subj3FinalS1Percent*100}%`;
    subjectItems[10].title = `Matière : ${subj4FinalS1Vals.subj4FinalS1Name} | Note obtenue : ${subj4FinalS1Vals.subj4FinalS1Result}/100 | Coefficient : ${subj4FinalS1Vals.subj4FinalS1Coef} | Période : ${subj4FinalS1Vals.subj4FinalS1Period} | Pourcentage : ${subj4FinalS1Vals.subj4FinalS1Percent*100}%`;
    subjectItems[11].title = `Matière : ${subj5FinalS1Vals.subj5FinalS1Name} | Note obtenue : ${subj5FinalS1Vals.subj5FinalS1Result}/100 | Coefficient : ${subj5FinalS1Vals.subj5FinalS1Coef} | Période : ${subj5FinalS1Vals.subj5FinalS1Period} | Pourcentage : ${subj5FinalS1Vals.subj5FinalS1Percent*100}%`;
    subjectItems[12].title = `Matière : ${subj6FinalS1Vals.subj6FinalS1Name} | Note obtenue : ${subj6FinalS1Vals.subj6FinalS1Result}/100 | Coefficient : ${subj6FinalS1Vals.subj6FinalS1Coef} | Période : ${subj6FinalS1Vals.subj6FinalS1Period} | Pourcentage : ${subj6FinalS1Vals.subj6FinalS1Percent*100}%`;
    subjectItems[13].title = `Matière : ${subj7FinalS1Vals.subj7FinalS1Name} | Note obtenue : ${subj7FinalS1Vals.subj7FinalS1Result}/100 | Coefficient : ${subj7FinalS1Vals.subj7FinalS1Coef} | Période : ${subj7FinalS1Vals.subj7FinalS1Period} | Pourcentage : ${subj7FinalS1Vals.subj7FinalS1Percent*100}%`;
    subjectItems[14].title = `Matière : ${subj8FinalS1Vals.subj8FinalS1Name} | Note obtenue : ${subj8FinalS1Vals.subj8FinalS1Result}/100 | Coefficient : ${subj8FinalS1Vals.subj8FinalS1Coef} | Période : ${subj8FinalS1Vals.subj8FinalS1Period} | Pourcentage : ${subj8FinalS1Vals.subj8FinalS1Percent*100}%`;

    subjectItems[15].title = `Matière : ${subj2WorkS1Vals.subj2WorkS1Name} | Note obtenue : ${subj2WorkS1Vals.subj2WorkS1Result}/100 | Coefficient : ${subj2WorkS1Vals.subj2WorkS1Coef} | Période : ${subj2WorkS1Vals.subj2WorkS1Period} | Pourcentage : ${subj2WorkS1Vals.subj2WorkS1Percent*100}%`;
    subjectItems[16].title = `Matière : ${subj3WorkS1Vals.subj3WorkS1Name} | Note obtenue : ${subj3WorkS1Vals.subj3WorkS1Result}/100 | Coefficient : ${subj3WorkS1Vals.subj3WorkS1Coef} | Période : ${subj3WorkS1Vals.subj3WorkS1Period} | Pourcentage : ${subj3WorkS1Vals.subj3WorkS1Percent*100}%`;
    subjectItems[17].title = `Matière : ${subj4WorkS1Vals.subj4WorkS1Name} | Note obtenue : ${subj4WorkS1Vals.subj4WorkS1Result}/100 | Coefficient : ${subj4WorkS1Vals.subj4WorkS1Coef} | Période : ${subj4WorkS1Vals.subj4WorkS1Period} | Pourcentage : ${subj4WorkS1Vals.subj4WorkS1Percent*100}%`;
    subjectItems[18].title = `Matière : ${subj5WorkS1Vals.subj5WorkS1Name} | Note obtenue : ${subj5WorkS1Vals.subj5WorkS1Result}/100 | Coefficient : ${subj5WorkS1Vals.subj5WorkS1Coef} | Période : ${subj5WorkS1Vals.subj5WorkS1Period} | Pourcentage : ${subj5WorkS1Vals.subj5WorkS1Percent*100}%`;
    subjectItems[19].title = `Matière : ${subj6WorkS1Vals.subj6WorkS1Name} | Note obtenue : ${subj6WorkS1Vals.subj6WorkS1Result}/100 | Coefficient : ${subj6WorkS1Vals.subj6WorkS1Coef} | Période : ${subj6WorkS1Vals.subj6WorkS1Period} | Pourcentage : ${subj6WorkS1Vals.subj6WorkS1Percent*100}%`;
    subjectItems[20].title = `Matière : ${subj7WorkS1Vals.subj7WorkS1Name} | Note obtenue : ${subj7WorkS1Vals.subj7WorkS1Result}/100 | Coefficient : ${subj7WorkS1Vals.subj7WorkS1Coef} | Période : ${subj7WorkS1Vals.subj7WorkS1Period} | Pourcentage : ${subj7WorkS1Vals.subj7WorkS1Percent*100}%`;

    subjectItems[21].title = `Matière : ${subj1IntraS2Vals.subj1IntraS2Name} | Note obtenue : ${subj1IntraS2Vals.subj1IntraS2Result}/100 | Coefficient : ${subj1IntraS2Vals.subj1IntraS2Coef} | Période : ${subj1IntraS2Vals.subj1IntraS2Period} | Pourcentage : ${subj1IntraS2Vals.subj1IntraS2Percent*100}%`;
    subjectItems[22].title = `Matière : ${subj2IntraS2Vals.subj2IntraS2Name} | Note obtenue : ${subj2IntraS2Vals.subj2IntraS2Result}/100 | Coefficient : ${subj2IntraS2Vals.subj2IntraS2Coef} | Période : ${subj2IntraS2Vals.subj2IntraS2Period} | Pourcentage : ${subj2IntraS2Vals.subj2IntraS2Percent*100}%`;
    subjectItems[23].title = `Matière : ${subj9IntraS2Vals.subj9IntraS2Name} | Note obtenue : ${subj9IntraS2Vals.subj9IntraS2Result}/100 | Coefficient : ${subj9IntraS2Vals.subj9IntraS2Coef} | Période : ${subj9IntraS2Vals.subj9IntraS2Period} | Pourcentage : ${subj9IntraS2Vals.subj9IntraS2Percent*100}%`;
    subjectItems[24].title = `Matière : ${subj4IntraS2Vals.subj4IntraS2Name} | Note obtenue : ${subj4IntraS2Vals.subj4IntraS2Result}/100 | Coefficient : ${subj4IntraS2Vals.subj4IntraS2Coef} | Période : ${subj4IntraS2Vals.subj4IntraS2Period} | Pourcentage : ${subj4IntraS2Vals.subj4IntraS2Percent*100}%`;
    subjectItems[25].title = `Matière : ${subj5IntraS2Vals.subj5IntraS2Name} | Note obtenue : ${subj5IntraS2Vals.subj5IntraS2Result}/100 | Coefficient : ${subj5IntraS2Vals.subj5IntraS2Coef} | Période : ${subj5IntraS2Vals.subj5IntraS2Period} | Pourcentage : ${subj5IntraS2Vals.subj5IntraS2Percent*100}%`;
    subjectItems[26].title = `Matière : ${subj6IntraS2Vals.subj6IntraS2Name} | Note obtenue : ${subj6IntraS2Vals.subj6IntraS2Result}/100 | Coefficient : ${subj6IntraS2Vals.subj6IntraS2Coef} | Période : ${subj6IntraS2Vals.subj6IntraS2Period} | Pourcentage : ${subj6IntraS2Vals.subj6IntraS2Percent*100}%`;
    subjectItems[27].title = `Matière : ${subj7IntraS2Vals.subj7IntraS2Name} | Note obtenue : ${subj7IntraS2Vals.subj7IntraS2Result}/100 | Coefficient : ${subj7IntraS2Vals.subj7IntraS2Coef} | Période : ${subj7IntraS2Vals.subj7IntraS2Period} | Pourcentage : ${subj7IntraS2Vals.subj7IntraS2Percent*100}%`;

    subjectItems[28].title = `Matière : ${subj1FinalS2Vals.subj1FinalS2Name} | Note obtenue : ${subj1FinalS2Vals.subj1FinalS2Result}/100 | Coefficient : ${subj1FinalS2Vals.subj1FinalS2Coef} | Période : ${subj1FinalS2Vals.subj1FinalS2Period} | Pourcentage : ${subj1FinalS2Vals.subj1FinalS2Percent*100}%`;
    subjectItems[29].title = `Matière : ${subj2FinalS2Vals.subj2FinalS2Name} | Note obtenue : ${subj2FinalS2Vals.subj2FinalS2Result}/100 | Coefficient : ${subj2FinalS2Vals.subj2FinalS2Coef} | Période : ${subj2FinalS2Vals.subj2FinalS2Period} | Pourcentage : ${subj2FinalS2Vals.subj2FinalS2Percent*100}%`;
    subjectItems[30].title = `Matière : ${subj9FinalS2Vals.subj9FinalS2Name} | Note obtenue : ${subj9FinalS2Vals.subj9FinalS2Result}/100 | Coefficient : ${subj9FinalS2Vals.subj9FinalS2Coef} | Période : ${subj9FinalS2Vals.subj9FinalS2Period} | Pourcentage : ${subj9FinalS2Vals.subj9FinalS2Percent*100}%`;
    subjectItems[31].title = `Matière : ${subj4FinalS2Vals.subj4FinalS2Name} | Note obtenue : ${subj4FinalS2Vals.subj4FinalS2Result}/100 | Coefficient : ${subj4FinalS2Vals.subj4FinalS2Coef} | Période : ${subj4FinalS2Vals.subj4FinalS2Period} | Pourcentage : ${subj4FinalS2Vals.subj4FinalS2Percent*100}%`;
    subjectItems[32].title = `Matière : ${subj5FinalS2Vals.subj5FinalS2Name} | Note obtenue : ${subj5FinalS2Vals.subj5FinalS2Result}/100 | Coefficient : ${subj5FinalS2Vals.subj5FinalS2Coef} | Période : ${subj5FinalS2Vals.subj5FinalS2Period} | Pourcentage : ${subj5FinalS2Vals.subj5FinalS2Percent*100}%`;
    subjectItems[33].title = `Matière : ${subj6FinalS2Vals.subj6FinalS2Name} | Note obtenue : ${subj6FinalS2Vals.subj6FinalS2Result}/100 | Coefficient : ${subj6FinalS2Vals.subj6FinalS2Coef} | Période : ${subj6FinalS2Vals.subj6FinalS2Period} | Pourcentage : ${subj6FinalS2Vals.subj6FinalS2Percent*100}%`;
    subjectItems[34].title = `Matière : ${subj7FinalS2Vals.subj7FinalS2Name} | Note obtenue : ${subj7FinalS2Vals.subj7FinalS2Result}/100 | Coefficient : ${subj7FinalS2Vals.subj7FinalS2Coef} | Période : ${subj7FinalS2Vals.subj7FinalS2Period} | Pourcentage : ${subj7FinalS2Vals.subj7FinalS2Percent*100}%`;
    subjectItems[35].title = `Matière : ${subj8FinalS2Vals.subj8FinalS2Name} | Note obtenue : ${subj8FinalS2Vals.subj8FinalS2Result}/100 | Coefficient : ${subj8FinalS2Vals.subj8FinalS2Coef} | Période : ${subj8FinalS2Vals.subj8FinalS2Period} | Pourcentage : ${subj8FinalS2Vals.subj8FinalS2Percent*100}%`;

    subjectItems[36].title = `Matière : ${subj2WorkS2Vals.subj2WorkS2Name} | Note obtenue : ${subj2WorkS2Vals.subj2WorkS2Result}/100 | Coefficient : ${subj2WorkS2Vals.subj2WorkS2Coef} | Période : ${subj2WorkS2Vals.subj2WorkS2Period} | Pourcentage : ${subj2WorkS2Vals.subj2WorkS2Percent*100}%`;
    subjectItems[37].title = `Matière : ${subj9WorkS2Vals.subj9WorkS2Name} | Note obtenue : ${subj9WorkS2Vals.subj9WorkS2Result}/100 | Coefficient : ${subj9WorkS2Vals.subj9WorkS2Coef} | Période : ${subj9WorkS2Vals.subj9WorkS2Period} | Pourcentage : ${subj9WorkS2Vals.subj9WorkS2Percent*100}%`;
    subjectItems[38].title = `Matière : ${subj4WorkS2Vals.subj4WorkS2Name} | Note obtenue : ${subj4WorkS2Vals.subj4WorkS2Result}/100 | Coefficient : ${subj4WorkS2Vals.subj4WorkS2Coef} | Période : ${subj4WorkS2Vals.subj4WorkS2Period} | Pourcentage : ${subj4WorkS2Vals.subj4WorkS2Percent*100}%`;
    subjectItems[39].title = `Matière : ${subj5WorkS2Vals.subj5WorkS2Name} | Note obtenue : ${subj5WorkS2Vals.subj5WorkS2Result}/100 | Coefficient : ${subj5WorkS2Vals.subj5WorkS2Coef} | Période : ${subj5WorkS2Vals.subj5WorkS2Period} | Pourcentage : ${subj5WorkS2Vals.subj5WorkS2Percent*100}%`;
    subjectItems[40].title = `Matière : ${subj6WorkS2Vals.subj6WorkS2Name} | Note obtenue : ${subj6WorkS2Vals.subj6WorkS2Result}/100 | Coefficient : ${subj6WorkS2Vals.subj6WorkS2Coef} | Période : ${subj6WorkS2Vals.subj6WorkS2Period} | Pourcentage : ${subj6WorkS2Vals.subj6WorkS2Percent*100}%`;
    subjectItems[41].title = `Matière : ${subj7WorkS2Vals.subj7WorkS2Name} | Note obtenue : ${subj7WorkS2Vals.subj7WorkS2Result}/100 | Coefficient : ${subj7WorkS2Vals.subj7WorkS2Coef} | Période : ${subj7WorkS2Vals.subj7WorkS2Period} | Pourcentage : ${subj7WorkS2Vals.subj7WorkS2Percent*100}%`;

});