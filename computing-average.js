//Target elements from the DOM
var averagesParag = document.getElementsByClassName('averages-p');
var selectedOption = document.getElementsByClassName('selected-option');

//Functions for setting default values to variables if there is no available values and computing the average
submitBtn.addEventListener('click', () => {
    //Computing average for Intra of Semester 1
    if(selectedOption[3].value == "Intra 1"){
        //Retrieving values from local Storage
        let subj1IntraS1Vals = JSON.parse(localStorage.getItem('subj1IntraS1Vals'));
        let subj2IntraS1Vals = JSON.parse(localStorage.getItem('subj2IntraS1Vals'));
        let subj3IntraS1Vals = JSON.parse(localStorage.getItem('subj3IntraS1Vals'));
        let subj4IntraS1Vals = JSON.parse(localStorage.getItem('subj4IntraS1Vals'));
        let subj5IntraS1Vals = JSON.parse(localStorage.getItem('subj5IntraS1Vals'));
        let subj6IntraS1Vals = JSON.parse(localStorage.getItem('subj6IntraS1Vals'));
        let subj7IntraS1Vals = JSON.parse(localStorage.getItem('subj7IntraS1Vals'));


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

        //Multiply each subject result by the coefficient of the subject
        let subj1IntraS1Note = parseFloat(subj1IntraS1Vals.subj1IntraS1Result * subj1IntraS1Vals.subj1IntraS1Coef);
        let subj2IntraS1Note = parseFloat(subj2IntraS1Vals.subj2IntraS1Result * subj2IntraS1Vals.subj2IntraS1Coef);
        let subj3IntraS1Note = parseFloat(subj3IntraS1Vals.subj3IntraS1Result * subj3IntraS1Vals.subj3IntraS1Coef);
        let subj4IntraS1Note = parseFloat(subj4IntraS1Vals.subj4IntraS1Result * subj4IntraS1Vals.subj4IntraS1Coef);
        let subj5IntraS1Note = parseFloat(subj5IntraS1Vals.subj5IntraS1Result * subj5IntraS1Vals.subj5IntraS1Coef);
        let subj6IntraS1Note = parseFloat(subj6IntraS1Vals.subj6IntraS1Result * subj6IntraS1Vals.subj6IntraS1Coef);
        let subj7IntraS1Note = parseFloat(subj7IntraS1Vals.subj7IntraS1Result * subj7IntraS1Vals.subj7IntraS1Coef);

        let subjIntraS1NotesSum = parseFloat(subj1IntraS1Note+subj2IntraS1Note+subj3IntraS1Note+subj4IntraS1Note+subj5IntraS1Note+subj6IntraS1Note+subj7IntraS1Note);
        let subjIntraS1CoefSum = parseFloat(subj1IntraS1Vals.subj1IntraS1Coef)+parseFloat(subj2IntraS1Vals.subj2IntraS1Coef)+parseFloat(subj3IntraS1Vals.subj3IntraS1Coef)+parseFloat(subj4IntraS1Vals.subj4IntraS1Coef)+parseFloat(subj5IntraS1Vals.subj5IntraS1Coef)+parseFloat(subj6IntraS1Vals.subj6IntraS1Coef)+parseFloat(subj7IntraS1Vals.subj7IntraS1Coef);

        //Sum those values and dividing them by the sum of coefficients
        let intraS1Average = [Math.round((subjIntraS1NotesSum / subjIntraS1CoefSum)*100)]/100;

        //Store the average
        localStorage.setItem('intraS1Average', intraS1Average);

        //Displaying the average
        averagesParag[0].innerHTML = intraS1Average;
    }



    //Computing average for Final of Semester 1
    if(selectedOption[3].value == "Final 1"){
        //Retrieving values from local Storage
        let subj1FinalS1Vals = JSON.parse(localStorage.getItem('subj1FinalS1Vals'));
        let subj2FinalS1Vals = JSON.parse(localStorage.getItem('subj2FinalS1Vals'));
        let subj3FinalS1Vals = JSON.parse(localStorage.getItem('subj3FinalS1Vals'));
        let subj4FinalS1Vals = JSON.parse(localStorage.getItem('subj4FinalS1Vals'));
        let subj5FinalS1Vals = JSON.parse(localStorage.getItem('subj5FinalS1Vals'));
        let subj6FinalS1Vals = JSON.parse(localStorage.getItem('subj6FinalS1Vals'));
        let subj7FinalS1Vals = JSON.parse(localStorage.getItem('subj7FinalS1Vals'));
        let subj8FinalS1Vals = JSON.parse(localStorage.getItem('subj8FinalS1Vals'));

        //In case any value have been found in local Storage for a subject or an other
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
            subj8FinalS1Vals = {subj8FinalS1Name: 'Français',subj8FinalS1Result : 0,subj8FinalS1Coef: 1.5,subj8FinalS1Period: 'Final 1',subj8FinalS1Percent: 0.5};
        }

        //Multiply each subject result by the coefficient of the subject
        let subj1FinalS1Note = parseFloat(subj1FinalS1Vals.subj1FinalS1Result * subj1FinalS1Vals.subj1FinalS1Coef);
        let subj2FinalS1Note = parseFloat(subj2FinalS1Vals.subj2FinalS1Result * subj2FinalS1Vals.subj2FinalS1Coef);
        let subj3FinalS1Note = parseFloat(subj3FinalS1Vals.subj3FinalS1Result * subj3FinalS1Vals.subj3FinalS1Coef);
        let subj4FinalS1Note = parseFloat(subj4FinalS1Vals.subj4FinalS1Result * subj4FinalS1Vals.subj4FinalS1Coef);
        let subj5FinalS1Note = parseFloat(subj5FinalS1Vals.subj5FinalS1Result * subj5FinalS1Vals.subj5FinalS1Coef);
        let subj6FinalS1Note = parseFloat(subj6FinalS1Vals.subj6FinalS1Result * subj6FinalS1Vals.subj6FinalS1Coef);
        let subj7FinalS1Note = parseFloat(subj7FinalS1Vals.subj7FinalS1Result * subj7FinalS1Vals.subj7FinalS1Coef);
        let subj8FinalS1Note = parseFloat(subj8FinalS1Vals.subj8FinalS1Result * subj8FinalS1Vals.subj8FinalS1Coef);

        let subjFinalS1NotesSum = parseFloat(subj1FinalS1Note+subj2FinalS1Note+subj3FinalS1Note+subj4FinalS1Note+subj5FinalS1Note+subj6FinalS1Note+subj7FinalS1Note+subj8FinalS1Note);
        let subjFinalS1CoefSum = parseFloat(subj1FinalS1Vals.subj1FinalS1Coef)+parseFloat(subj2FinalS1Vals.subj2FinalS1Coef)+parseFloat(subj3FinalS1Vals.subj3FinalS1Coef)+parseFloat(subj4FinalS1Vals.subj4FinalS1Coef)+parseFloat(subj5FinalS1Vals.subj5FinalS1Coef)+parseFloat(subj6FinalS1Vals.subj6FinalS1Coef)+parseFloat(subj7FinalS1Vals.subj7FinalS1Coef)+parseFloat(subj8FinalS1Vals.subj8FinalS1Coef);

        //Sum those values and dividing them by the sum of coefficients
        let finalS1Average = [Math.round((subjFinalS1NotesSum / subjFinalS1CoefSum)*100)]/100;

        //Store the average
        localStorage.setItem('finalS1Average', finalS1Average);

        //Displaying the average
        averagesParag[1].innerHTML = finalS1Average;
    }




    //Computing average for Intra of Semester 2
    if(selectedOption[3].value == "Intra 2"){
        //Retrieving values from local Storage
        let subj1IntraS2Vals = JSON.parse(localStorage.getItem('subj1IntraS2Vals'));
        let subj2IntraS2Vals = JSON.parse(localStorage.getItem('subj2IntraS2Vals'));
        let subj9IntraS2Vals = JSON.parse(localStorage.getItem('subj9IntraS2Vals'));
        let subj4IntraS2Vals = JSON.parse(localStorage.getItem('subj4IntraS2Vals'));
        let subj5IntraS2Vals = JSON.parse(localStorage.getItem('subj5IntraS2Vals'));
        let subj6IntraS2Vals = JSON.parse(localStorage.getItem('subj6IntraS2Vals'));
        let subj7IntraS2Vals = JSON.parse(localStorage.getItem('subj7IntraS2Vals'));

        //In case any value have been found in local Storage for a subject or an other
        if(subj1IntraS2Vals == null){
            subj1IntraS2Vals = {subj1IntraS2Name: 'Economie',subj1IntraS2Result: 0,subj1IntraS2Coef: 1.5,subj1IntraS2Period: 'Intra 2',subj1IntraS2Percent: 0.35};
        }
        if(subj2IntraS2Vals == null){
            subj2IntraS2Vals = {subj2IntraS2Name: 'Algèbre',subj2IntraS2Result: 0,subj2IntraS2Coef: 1.5,subj2IntraS2Period: 'Intra 2',subj2IntraS2Percent: 0.25};
        }
        if(subj9IntraS2Vals == null){
            subj9IntraS2Vals = {subj9IntraS1Name: 'Probabilité',subj9IntraS2Result : 0,subj9IntraS2Coef: 1.5,subj9IntraS2Period: 'Intra 2',subj9IntraS2Percent: 0.25};
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

        //Multiply each subject result by the coefficient of the subject
        let subj1IntraS2Note = parseFloat(subj1IntraS2Vals.subj1IntraS2Result * subj1IntraS2Vals.subj1IntraS2Coef);
        let subj2IntraS2Note = parseFloat(subj2IntraS2Vals.subj2IntraS2Result * subj2IntraS2Vals.subj2IntraS2Coef);
        let subj9IntraS2Note = parseFloat(subj9IntraS2Vals.subj9IntraS2Result * subj9IntraS2Vals.subj9IntraS2Coef);
        let subj4IntraS2Note = parseFloat(subj4IntraS2Vals.subj4IntraS2Result * subj4IntraS2Vals.subj4IntraS2Coef);
        let subj5IntraS2Note = parseFloat(subj5IntraS2Vals.subj5IntraS2Result * subj5IntraS2Vals.subj5IntraS2Coef);
        let subj6IntraS2Note = parseFloat(subj6IntraS2Vals.subj6IntraS2Result * subj6IntraS2Vals.subj6IntraS2Coef);
        let subj7IntraS2Note = parseFloat(subj7IntraS2Vals.subj7IntraS2Result * subj7IntraS2Vals.subj7IntraS2Coef);

        let subjIntraS2NotesSum = parseFloat(subj1IntraS2Note+subj2IntraS2Note+subj9IntraS2Note+subj4IntraS2Note+subj5IntraS2Note+subj6IntraS2Note+subj7IntraS2Note);
        let subjIntraS2CoefSum = parseFloat(subj1IntraS2Vals.subj1IntraS2Coef)+parseFloat(subj2IntraS2Vals.subj2IntraS2Coef)+parseFloat(subj9IntraS2Vals.subj9IntraS2Coef)+parseFloat(subj4IntraS2Vals.subj4IntraS2Coef)+parseFloat(subj5IntraS2Vals.subj5IntraS2Coef)+parseFloat(subj6IntraS2Vals.subj6IntraS2Coef)+parseFloat(subj7IntraS2Vals.subj7IntraS2Coef);

        //Sum those values and dividing them by the sum of coefficients
        let intraS2Average = [Math.round((subjIntraS2NotesSum / subjIntraS2CoefSum)*100)]/100;

        //Store the average
        localStorage.setItem('intraS2Average', intraS2Average);


        //Displaying the average
        averagesParag[2].innerHTML = intraS2Average;
    }





    //Computing average for Final of Semester 2
    if(selectedOption[3].value == "Final 2"){
        //Retrieving values from local Storage
        let subj1FinalS2Vals = JSON.parse(localStorage.getItem('subj1FinalS2Vals'));
        let subj2FinalS2Vals = JSON.parse(localStorage.getItem('subj2FinalS2Vals'));
        let subj9FinalS2Vals = JSON.parse(localStorage.getItem('subj9FinalS2Vals'));
        let subj4FinalS2Vals = JSON.parse(localStorage.getItem('subj4FinalS2Vals'));
        let subj5FinalS2Vals = JSON.parse(localStorage.getItem('subj5FinalS2Vals'));
        let subj6FinalS2Vals = JSON.parse(localStorage.getItem('subj6FinalS2Vals'));
        let subj7FinalS2Vals = JSON.parse(localStorage.getItem('subj7FinalS2Vals'));
        let subj8FinalS2Vals = JSON.parse(localStorage.getItem('subj8FinalS2Vals'));

        //In case any value have been found in local Storage for a subject or an other
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
            subj8FinalS2Vals = {subj8FinalS2Name: 'Français',subj8FinalS2Result : 0,subj8FinalS2Coef: 1.5,subj8FinalS2Period: 'Final 2',subj8FinalS2Percent: 0.5};
        }

        //Multiply each subject result by the coefficient of the subject
        let subj1FinalS2Note = parseFloat(subj1FinalS2Vals.subj1FinalS2Result * subj1FinalS2Vals.subj1FinalS2Coef);
        let subj2FinalS2Note = parseFloat(subj2FinalS2Vals.subj2FinalS2Result * subj2FinalS2Vals.subj2FinalS2Coef);
        let subj9FinalS2Note = parseFloat(subj9FinalS2Vals.subj9FinalS2Result * subj9FinalS2Vals.subj9FinalS2Coef);
        let subj4FinalS2Note = parseFloat(subj4FinalS2Vals.subj4FinalS2Result * subj4FinalS2Vals.subj4FinalS2Coef);
        let subj5FinalS2Note = parseFloat(subj5FinalS2Vals.subj5FinalS2Result * subj5FinalS2Vals.subj5FinalS2Coef);
        let subj6FinalS2Note = parseFloat(subj6FinalS2Vals.subj6FinalS2Result * subj6FinalS2Vals.subj6FinalS2Coef);
        let subj7FinalS2Note = parseFloat(subj7FinalS2Vals.subj7FinalS2Result * subj7FinalS2Vals.subj7FinalS2Coef);
        let subj8FinalS2Note = parseFloat(subj8FinalS2Vals.subj8FinalS2Result * subj8FinalS2Vals.subj8FinalS2Coef);

        let subjFinalS2NotesSum = parseFloat(subj1FinalS2Note+subj2FinalS2Note+subj9FinalS2Note+subj4FinalS2Note+subj5FinalS2Note+subj6FinalS2Note+subj7FinalS2Note+subj8FinalS2Note);
        let subjFinalS2CoefSum = parseFloat(subj1FinalS2Vals.subj1FinalS2Coef)+parseFloat(subj2FinalS2Vals.subj2FinalS2Coef)+parseFloat(subj9FinalS2Vals.subj9FinalS2Coef)+parseFloat(subj4FinalS2Vals.subj4FinalS2Coef)+parseFloat(subj5FinalS2Vals.subj5FinalS2Coef)+parseFloat(subj6FinalS2Vals.subj6FinalS2Coef)+parseFloat(subj7FinalS2Vals.subj7FinalS2Coef)+parseFloat(subj8FinalS2Vals.subj8FinalS2Coef);

        //Sum those values and dividing them by the sum of coefficients
        let finalS2Average = [Math.round((subjFinalS2NotesSum / subjFinalS2CoefSum)*100)]/100;

        //Store the average
        localStorage.setItem('finalS2Average', finalS2Average);

        //Displaying the average
        averagesParag[3].innerHTML = finalS2Average;
    }
});