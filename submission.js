//Target elements from the DOM
const submitBtn = document.getElementById('submit-btn');
const calcAveragesBtn = document.getElementById('calc-btn');

var subjectItems = document.getElementsByClassName('subject-item');

var selectedOption = document.getElementsByClassName('selected-option');
var subjectInputs = document.getElementsByClassName('subject-input');

var resultInput = document.getElementById('result-input');

var averagesFields = document.getElementsByClassName('average-field');

submitBtn.addEventListener('click', (e) => {
    //Prevent the form to be submitted
    e.preventDefault();

    // if(selectedOption[1].value.length > 1 && selectedOption[1].value == 0){
    //     selectedOption[1].value = "0";
    // }

    //Validate the form or showing errors
    if(selectedOption[1].value > 100){
        selectedOption[1].value = '00';
        alert('La valeur du champ \'Résultat\' ne peut pas être supérieur à 100.');
    }
    if(selectedOption[1].value < 0){
        selectedOption[1].value = '00';
        alert('La valeur du champ \'Résultat\' ne peut pas être inférieur à 0.');
    }
    let isNum = /^\d*\.?\d+$/.test(selectedOption[1].value);
    if(!isNum){
        selectedOption[1].value = '00';
        alert('Le champ \'Résultat\' ne peut contenir que des valeurs numériques allant de 0 à 100.');
    }
    
    let convSelectedOption1 = ((selectedOption[1].value*10)/10);

    //Collect, save and display data provided by the user
    //If user is providing data for the subject "Economie" :
    if(selectedOption[0].value == "Economie"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj1 Final 1 vars
            subj1IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj1IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj1IntraS1Result = convSelectedOption1;
            }
            subj1IntraS1Coef = selectedOption[2].value;
            subj1IntraS1Period = selectedOption[3].value;
            subj1IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj1IntraS1 = {subj1IntraS1Name,subj1IntraS1Result,subj1IntraS1Coef,subj1IntraS1Period,subj1IntraS1Percent};

            //Store the values
            localStorage.setItem('subj1IntraS1Vals', JSON.stringify(subj1IntraS1));

            //Display the values
            subjectInputs[0].value = JSON.parse(localStorage.getItem('subj1IntraS1Vals')).subj1IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj1 Final 1 vars
            subj1FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj1FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj1FinalS1Result = convSelectedOption1;
            }
            subj1FinalS1Coef = selectedOption[2].value;
            subj1FinalS1Period = selectedOption[3].value;
            subj1FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj1FinalS1 = {subj1FinalS1Name,subj1FinalS1Result,subj1FinalS1Coef,subj1FinalS1Period,subj1FinalS1Percent};

            //Store the values
            localStorage.setItem('subj1FinalS1Vals', JSON.stringify(subj1FinalS1));

            //Display the values
            subjectInputs[7].value = JSON.parse(localStorage.getItem('subj1FinalS1Vals')).subj1FinalS1Result;
        }
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj1Intra vars
            subj1IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj1IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj1IntraS2Result = convSelectedOption1;
            }
            subj1IntraS2Coef = selectedOption[2].value;
            subj1IntraS2Period = selectedOption[3].value;
            subj1IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj1IntraS2 = {subj1IntraS2Name,subj1IntraS2Result,subj1IntraS2Coef,subj1IntraS2Period,subj1IntraS2Percent};

            //Store the values
            localStorage.setItem('subj1IntraS2Vals', JSON.stringify(subj1IntraS2));

            //Display the values
            subjectInputs[21].value = JSON.parse(localStorage.getItem('subj1IntraS2Vals')).subj1IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj1 Final 2 vars
            subj1FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj1FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj1FinalS2Result = convSelectedOption1;
            }
            subj1FinalS2Coef = selectedOption[2].value;
            subj1FinalS2Period = selectedOption[3].value;
            subj1FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj1FinalS2 = {subj1FinalS2Name,subj1FinalS2Result,subj1FinalS2Coef,subj1FinalS2Period,subj1FinalS2Percent};

            //Store the values
            localStorage.setItem('subj1FinalS2Vals', JSON.stringify(subj1FinalS2));

            //Display the values
            subjectInputs[28].value = JSON.parse(localStorage.getItem('subj1FinalS2Vals')).subj1FinalS2Result;
        }
        /*if(selectedOption[3].value == "work1"){}
        if(selectedOption[3].value == "work2"){}*/
    }

    //If user is providing data for the subject "Algèbre" :
    if(selectedOption[0].value == "Algèbre"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj2Intra vars
            subj2IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj2IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj2IntraS1Result = convSelectedOption1;
            }
            subj2IntraS1Coef = selectedOption[2].value;
            subj2IntraS1Period = selectedOption[3].value;
            subj2IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj2IntraS1 = {subj2IntraS1Name,subj2IntraS1Result,subj2IntraS1Coef,subj2IntraS1Period,subj2IntraS1Percent};

            //Store the values
            localStorage.setItem('subj2IntraS1Vals', JSON.stringify(subj2IntraS1));

            //Display the values
            subjectInputs[1].value = JSON.parse(localStorage.getItem('subj2IntraS1Vals')).subj2IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj2Final vars
            subj2FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj2FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj2FinalS1Result = convSelectedOption1;
            }
            subj2FinalS1Coef = selectedOption[2].value;
            subj2FinalS1Period = selectedOption[3].value;
            subj2FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj2FinalS1 = {subj2FinalS1Name,subj2FinalS1Result,subj2FinalS1Coef,subj2FinalS1Period,subj2FinalS1Percent};

            //Store the values
            localStorage.setItem('subj2FinalS1Vals', JSON.stringify(subj2FinalS1));

            //Display the values
            subjectInputs[8].value = JSON.parse(localStorage.getItem('subj2FinalS1Vals')).subj2FinalS1Result;
        }
        if(selectedOption[3].value == "Work 1"){
            //Assign values to subj2 Work 1 vars
            subj2WorkS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj2WorkS1Result = "0" + convSelectedOption1;
            }else{
                subj2WorkS1Result = convSelectedOption1;
            }
            subj2WorkS1Coef = selectedOption[2].value;
            subj2WorkS1Period = selectedOption[3].value;
            subj2WorkS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj2WorkS1 = {subj2WorkS1Name,subj2WorkS1Result,subj2WorkS1Coef,subj2WorkS1Period,subj2WorkS1Percent};

            //Store the values
            localStorage.setItem('subj2WorkS1Vals', JSON.stringify(subj2WorkS1));

            //Display the values
            subjectInputs[15].value = JSON.parse(localStorage.getItem('subj2WorkS1Vals')).subj2WorkS1Result;
        }
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj2 Intra 2 vars
            subj2IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj2IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj2IntraS2Result = convSelectedOption1;
            }
            subj2IntraS2Coef = selectedOption[2].value;
            subj2IntraS2Period = selectedOption[3].value;
            subj2IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj2IntraS2 = {subj2IntraS2Name,subj2IntraS2Result,subj2IntraS2Coef,subj2IntraS2Period,subj2IntraS2Percent};

            //Store the values
            localStorage.setItem('subj2IntraS2Vals', JSON.stringify(subj2IntraS2));

            //Display the values
            subjectInputs[22].value = JSON.parse(localStorage.getItem('subj2IntraS2Vals')).subj2IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj2Final vars
            subj2FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj2FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj2FinalS2Result = convSelectedOption1;
            }
            subj2FinalS2Coef = selectedOption[2].value;
            subj2FinalS2Period = selectedOption[3].value;
            subj2FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj2FinalS2 = {subj2FinalS2Name,subj2FinalS2Result,subj2FinalS2Coef,subj2FinalS2Period,subj2FinalS2Percent};

            //Store the values
            localStorage.setItem('subj2FinalS2Vals', JSON.stringify(subj2FinalS2));

            //Display the values
            subjectInputs[29].value = JSON.parse(localStorage.getItem('subj2FinalS2Vals')).subj2FinalS2Result;
        }
        if(selectedOption[3].value == "Work 2"){
            //Assign values to subj2 Work 1 vars
            subj2WorkS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj2WorkS2Result = "0" + convSelectedOption1;
            }else{
                subj2WorkS2Result = convSelectedOption1;
            }
            subj2WorkS2Coef = selectedOption[2].value;
            subj2WorkS2Period = selectedOption[3].value;
            subj2WorkS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj2WorkS2 = {subj2WorkS2Name,subj2WorkS2Result,subj2WorkS2Coef,subj2WorkS2Period,subj2WorkS2Percent};

            //Store the values
            localStorage.setItem('subj2WorkS2Vals', JSON.stringify(subj2WorkS2));

            //Display the values
            subjectInputs[36].value = JSON.parse(localStorage.getItem('subj2WorkS2Vals')).subj2WorkS2Result;
        }
    }

    //If user is providing data for the subject "Statistique Descriptive" :
    if(selectedOption[0].value == "Statistique Descriptive"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj2Intra vars
            subj3IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj3IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj3IntraS1Result = convSelectedOption1;
            }
            subj3IntraS1Coef = selectedOption[2].value;
            subj3IntraS1Period = selectedOption[3].value;
            subj3IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj3IntraS1 = {subj3IntraS1Name,subj3IntraS1Result,subj3IntraS1Coef,subj3IntraS1Period,subj3IntraS1Percent};

            //Store the values
            localStorage.setItem('subj3IntraS1Vals', JSON.stringify(subj3IntraS1));

            //Display the values
            subjectInputs[2].value = JSON.parse(localStorage.getItem('subj3IntraS1Vals')).subj3IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj2Intra vars
            subj3FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj3FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj3FinalS1Result = convSelectedOption1;
            }
            subj3FinalS1Coef = selectedOption[2].value;
            subj3FinalS1Period = selectedOption[3].value;
            subj3FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj3FinalS1 = {subj3FinalS1Name,subj3FinalS1Result,subj3FinalS1Coef,subj3FinalS1Period,subj3FinalS1Percent};

            //Store the values
            localStorage.setItem('subj3FinalS1Vals', JSON.stringify(subj3FinalS1));

            //Display the values
            subjectInputs[9].value = JSON.parse(localStorage.getItem('subj3FinalS1Vals')).subj3FinalS1Result;
        }
        if(selectedOption[3].value == "Work 1"){
            //Assign values to subj3 Work 1 vars
            subj3WorkS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj3WorkS1Result = "0" + convSelectedOption1;
            }else{
                subj3WorkS1Result = convSelectedOption1;
            }
            subj3WorkS1Coef = selectedOption[2].value;
            subj3WorkS1Period = selectedOption[3].value;
            subj3WorkS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj3WorkS1 = {subj3WorkS1Name,subj3WorkS1Result,subj3WorkS1Coef,subj3WorkS1Period,subj3WorkS1Percent};

            //Store the values
            localStorage.setItem('subj3WorkS1Vals', JSON.stringify(subj3WorkS1));

            //Display the values
            subjectInputs[16].value = JSON.parse(localStorage.getItem('subj3WorkS1Vals')).subj3WorkS1Result;
        }
    }

    //If user is providing data for the subject "Comptabilité" :
    if(selectedOption[0].value == "Comptabilité"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj4 Intra 1 vars
            subj4IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj4IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj4IntraS1Result = convSelectedOption1;
            }
            subj4IntraS1Coef = selectedOption[2].value;
            subj4IntraS1Period = selectedOption[3].value;
            subj4IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj4IntraS1 = {subj4IntraS1Name,subj4IntraS1Result,subj4IntraS1Coef,subj4IntraS1Period,subj4IntraS1Percent};

            //Store the values
            localStorage.setItem('subj4IntraS1Vals', JSON.stringify(subj4IntraS1));

            //Display the values
            subjectInputs[3].value = JSON.parse(localStorage.getItem('subj4IntraS1Vals')).subj4IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj4 Final 1 vars
            subj4FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj4FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj4FinalS1Result = convSelectedOption1;
            }
            subj4FinalS1Coef = selectedOption[2].value;
            subj4FinalS1Period = selectedOption[3].value;
            subj4FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj4FinalS1 = {subj4FinalS1Name,subj4FinalS1Result,subj4FinalS1Coef,subj4FinalS1Period,subj4FinalS1Percent};

            //Store the values
            localStorage.setItem('subj4FinalS1Vals', JSON.stringify(subj4FinalS1));

            //Display the values
            subjectInputs[10].value = JSON.parse(localStorage.getItem('subj4FinalS1Vals')).subj4FinalS1Result;
        }
        if(selectedOption[3].value == "Work 1"){
            //Assign values to subj3 Work 1 vars
            subj4WorkS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj4WorkS1Result = "0" + convSelectedOption1;
            }else{
                subj4WorkS1Result = convSelectedOption1;
            }
            subj4WorkS1Coef = selectedOption[2].value;
            subj4WorkS1Period = selectedOption[3].value;
            subj4WorkS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj4WorkS1 = {subj4WorkS1Name,subj4WorkS1Result,subj4WorkS1Coef,subj4WorkS1Period,subj4WorkS1Percent};

            //Store the values
            localStorage.setItem('subj4WorkS1Vals', JSON.stringify(subj4WorkS1));

            //Display the values
            subjectInputs[17].value = JSON.parse(localStorage.getItem('subj4WorkS1Vals')).subj4WorkS1Result;
        }
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj4 Intra 2 vars
            subj4IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj4IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj4IntraS2Result = convSelectedOption1;
            }
            subj4IntraS2Coef = selectedOption[2].value;
            subj4IntraS2Period = selectedOption[3].value;
            subj4IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj4IntraS2 = {subj4IntraS2Name,subj4IntraS2Result,subj4IntraS2Coef,subj4IntraS2Period,subj4IntraS2Percent};

            //Store the values
            localStorage.setItem('subj4IntraS2Vals', JSON.stringify(subj4IntraS2));

            //Display the values
            subjectInputs[24].value = JSON.parse(localStorage.getItem('subj4IntraS2Vals')).subj4IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj4 Final 2 vars
            subj4FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj4FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj4FinalS2Result = convSelectedOption1;
            }
            subj4FinalS2Coef = selectedOption[2].value;
            subj4FinalS2Period = selectedOption[3].value;
            subj4FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj4FinalS2 = {subj4FinalS2Name,subj4FinalS2Result,subj4FinalS2Coef,subj4FinalS2Period,subj4FinalS2Percent};

            //Store the values
            localStorage.setItem('subj4FinalS2Vals', JSON.stringify(subj4FinalS2));

            //Display the values
            subjectInputs[31].value = JSON.parse(localStorage.getItem('subj4FinalS2Vals')).subj4FinalS2Result;
        }
        if(selectedOption[3].value == "Work 2"){
            //Assign values to subj3 Work 2 vars
            subj4WorkS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj4WorkS2Result = "0" + convSelectedOption1;
            }else{
                subj4WorkS2Result = convSelectedOption1;
            }
            subj4WorkS2Coef = selectedOption[2].value;
            subj4WorkS2Period = selectedOption[3].value;
            subj4WorkS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj4WorkS2 = {subj4WorkS2Name,subj4WorkS2Result,subj4WorkS2Coef,subj4WorkS2Period,subj4WorkS2Percent};

            //Store the values
            localStorage.setItem('subj4WorkS2Vals', JSON.stringify(subj4WorkS2));

            //Display the values
            subjectInputs[38].value = JSON.parse(localStorage.getItem('subj4WorkS2Vals')).subj4WorkS2Result;
        }
    }

    //If user is providing data for the subject "Espagnol" :
    if(selectedOption[0].value == "Espagnol"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj5Intra vars
            subj5IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj5IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj5IntraS1Result = convSelectedOption1;
            }
            subj5IntraS1Coef = selectedOption[2].value;
            subj5IntraS1Period = selectedOption[3].value;
            subj5IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj5IntraS1 = {subj5IntraS1Name,subj5IntraS1Result,subj5IntraS1Coef,subj5IntraS1Period,subj5IntraS1Percent};

            //Store the values
            localStorage.setItem('subj5IntraS1Vals', JSON.stringify(subj5IntraS1));

            //Display the values
            subjectInputs[4].value = JSON.parse(localStorage.getItem('subj5IntraS1Vals')).subj5IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj5Final vars
            subj5FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj5FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj5FinalS1Result = convSelectedOption1;
            }
            subj5FinalS1Coef = selectedOption[2].value;
            subj5FinalS1Period = selectedOption[3].value;
            subj5FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj5FinalS1 = {subj5FinalS1Name,subj5FinalS1Result,subj5FinalS1Coef,subj5FinalS1Period,subj5FinalS1Percent};

            //Store the values
            localStorage.setItem('subj5FinalS1Vals', JSON.stringify(subj5FinalS1));

            //Display the values
            subjectInputs[11].value = JSON.parse(localStorage.getItem('subj5FinalS1Vals')).subj5FinalS1Result;
        }
        if(selectedOption[3].value == "Work 1"){
            //Assign values to subj3 Work 1 vars
            subj5WorkS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj5WorkS1Result = "0" + convSelectedOption1;
            }else{
                subj5WorkS1Result = convSelectedOption1;
            }
            subj5WorkS1Coef = selectedOption[2].value;
            subj5WorkS1Period = selectedOption[3].value;
            subj5WorkS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj5WorkS1 = {subj5WorkS1Name,subj5WorkS1Result,subj5WorkS1Coef,subj5WorkS1Period,subj5WorkS1Percent};

            //Store the values
            localStorage.setItem('subj5WorkS1Vals', JSON.stringify(subj5WorkS1));

            //Display the values
            subjectInputs[18].value = JSON.parse(localStorage.getItem('subj5WorkS1Vals')).subj5WorkS1Result;
        }
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj5Intra vars
            subj5IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj5IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj5IntraS2Result = convSelectedOption1;
            }
            subj5IntraS2Coef = selectedOption[2].value;
            subj5IntraS2Period = selectedOption[3].value;
            subj5IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj5IntraS2 = {subj5IntraS2Name,subj5IntraS2Result,subj5IntraS2Coef,subj5IntraS2Period,subj5IntraS2Percent};

            //Store the values
            localStorage.setItem('subj5IntraS2Vals', JSON.stringify(subj5IntraS2));

            //Display the values
            subjectInputs[25].value = JSON.parse(localStorage.getItem('subj5IntraS2Vals')).subj5IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj5 Final 2 vars
            subj5FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj5FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj5FinalS2Result = convSelectedOption1;
            }
            subj5FinalS2Coef = selectedOption[2].value;
            subj5FinalS2Period = selectedOption[3].value;
            subj5FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj5FinalS2 = {subj5FinalS2Name,subj5FinalS2Result,subj5FinalS2Coef,subj5FinalS2Period,subj5FinalS2Percent};

            //Store the values
            localStorage.setItem('subj5FinalS2Vals', JSON.stringify(subj5FinalS2));

            //Display the values
            subjectInputs[32].value = JSON.parse(localStorage.getItem('subj5FinalS2Vals')).subj5FinalS2Result;
        }
        if(selectedOption[3].value == "Work 2"){
            //Assign values to subj5 Work 2 vars
            subj5WorkS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj5WorkS2Result = "0" + convSelectedOption1;
            }else{
                subj5WorkS2Result = convSelectedOption1;
            }
            subj5WorkS2Coef = selectedOption[2].value;
            subj5WorkS2Period = selectedOption[3].value;
            subj5WorkS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj5WorkS2 = {subj5WorkS2Name,subj5WorkS2Result,subj5WorkS2Coef,subj5WorkS2Period,subj5WorkS2Percent};

            //Store the values
            localStorage.setItem('subj5WorkS2Vals', JSON.stringify(subj5WorkS2));

            //Display the values
            subjectInputs[39].value = JSON.parse(localStorage.getItem('subj5WorkS2Vals')).subj5WorkS2Result;
        }
    }

    //If user is providing data for the subject "Anglais" :
    if(selectedOption[0].value == "Anglais"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj6 Intra 1 vars
            subj6IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj6IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj6IntraS1Result = convSelectedOption1;
            }
            subj6IntraS1Coef = selectedOption[2].value;
            subj6IntraS1Period = selectedOption[3].value;
            subj6IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj6IntraS1 = {subj6IntraS1Name,subj6IntraS1Result,subj6IntraS1Coef,subj6IntraS1Period,subj6IntraS1Percent};

            //Store the values
            localStorage.setItem('subj6IntraS1Vals', JSON.stringify(subj6IntraS1));

            //Display the values
            subjectInputs[5].value = JSON.parse(localStorage.getItem('subj6IntraS1Vals')).subj6IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj6 Final 1 vars
            subj6FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj6FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj6FinalS1Result = convSelectedOption1;
            }
            subj6FinalS1Coef = selectedOption[2].value;
            subj6FinalS1Period = selectedOption[3].value;
            subj6FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj6FinalS1 = {subj6FinalS1Name,subj6FinalS1Result,subj6FinalS1Coef,subj6FinalS1Period,subj6FinalS1Percent};

            //Store the values
            localStorage.setItem('subj6FinalS1Vals', JSON.stringify(subj6FinalS1));

            //Display the values
            subjectInputs[12].value = JSON.parse(localStorage.getItem('subj6FinalS1Vals')).subj6FinalS1Result;
        }
        if(selectedOption[3].value == "Work 1"){
            //Assign values to subj6 Work 1 vars
            subj6WorkS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj6WorkS1Result = "0" + convSelectedOption1;
            }else{
                subj6WorkS1Result = convSelectedOption1;
            }
            subj6WorkS1Coef = selectedOption[2].value;
            subj6WorkS1Period = selectedOption[3].value;
            subj6WorkS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj6WorkS1 = {subj6WorkS1Name,subj6WorkS1Result,subj6WorkS1Coef,subj6WorkS1Period,subj6WorkS1Percent};

            //Store the values
            localStorage.setItem('subj6WorkS1Vals', JSON.stringify(subj6WorkS1));

            //Display the values
            subjectInputs[19].value = JSON.parse(localStorage.getItem('subj6WorkS1Vals')).subj6WorkS1Result;
        }
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj6 Intra 2 vars
            subj6IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj6IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj6IntraS2Result = convSelectedOption1;
            }
            subj6IntraS2Coef = selectedOption[2].value;
            subj6IntraS2Period = selectedOption[3].value;
            subj6IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj6IntraS2 = {subj6IntraS2Name,subj6IntraS2Result,subj6IntraS2Coef,subj6IntraS2Period,subj6IntraS2Percent};

            //Store the values
            localStorage.setItem('subj6IntraS2Vals', JSON.stringify(subj6IntraS2));

            //Display the values
            subjectInputs[26].value = JSON.parse(localStorage.getItem('subj6IntraS2Vals')).subj6IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj6 Final 2 vars
            subj6FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj6FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj6FinalS2Result = convSelectedOption1;
            }
            subj6FinalS2Coef = selectedOption[2].value;
            subj6FinalS2Period = selectedOption[3].value;
            subj6FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj6FinalS2 = {subj6FinalS2Name,subj6FinalS2Result,subj6FinalS2Coef,subj6FinalS2Period,subj6FinalS2Percent};

            //Store the values
            localStorage.setItem('subj6FinalS2Vals', JSON.stringify(subj6FinalS2));

            //Display the values
            subjectInputs[33].value = JSON.parse(localStorage.getItem('subj6FinalS2Vals')).subj6FinalS2Result;
        }
        if(selectedOption[3].value == "Work 2"){
            //Assign values to subj6 Work 1 vars
            subj6WorkS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj6WorkS2Result = "0" + convSelectedOption1;
            }else{
                subj6WorkS2Result = convSelectedOption1;
            }
            subj6WorkS2Coef = selectedOption[2].value;
            subj6WorkS2Period = selectedOption[3].value;
            subj6WorkS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj6WorkS2 = {subj6WorkS2Name,subj6WorkS2Result,subj6WorkS2Coef,subj6WorkS2Period,subj6WorkS2Percent};

            //Store the values
            localStorage.setItem('subj6WorkS2Vals', JSON.stringify(subj6WorkS2));

            //Display the values
            subjectInputs[40].value = JSON.parse(localStorage.getItem('subj6WorkS2Vals')).subj6WorkS2Result;
        }
    }

    //If user is providing data for the subject "Analyse" :
    if(selectedOption[0].value == "Analyse"){
        if(selectedOption[3].value == "Intra 1"){
            //Assign values to subj7 Intra 1 vars
            subj7IntraS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj7IntraS1Result = "0" + convSelectedOption1;
            }else{
                subj7IntraS1Result = convSelectedOption1;
            }
            subj7IntraS1Coef = selectedOption[2].value;
            subj7IntraS1Period = selectedOption[3].value;
            subj7IntraS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj7IntraS1 = {subj7IntraS1Name,subj7IntraS1Result,subj7IntraS1Coef,subj7IntraS1Period,subj7IntraS1Percent};

            //Store the values
            localStorage.setItem('subj7IntraS1Vals', JSON.stringify(subj7IntraS1));

            //Display the values
            subjectInputs[6].value = JSON.parse(localStorage.getItem('subj7IntraS1Vals')).subj7IntraS1Result;
        }
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj7 Final 1 vars
            subj7FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj7FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj7FinalS1Result = convSelectedOption1;
            }
            subj7FinalS1Coef = selectedOption[2].value;
            subj7FinalS1Period = selectedOption[3].value;
            subj7FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj7FinalS1 = {subj7FinalS1Name,subj7FinalS1Result,subj7FinalS1Coef,subj7FinalS1Period,subj7FinalS1Percent};

            //Store the values
            localStorage.setItem('subj7FinalS1Vals', JSON.stringify(subj7FinalS1));

            //Display the values
            subjectInputs[13].value = JSON.parse(localStorage.getItem('subj7FinalS1Vals')).subj7FinalS1Result;
        }
        if(selectedOption[3].value == "Work 1"){
            //Assign values to subj6 Work 1 vars
            subj7WorkS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj7WorkS1Result = "0" + convSelectedOption1;
            }else{
                subj7WorkS1Result = convSelectedOption1;
            }
            subj7WorkS1Coef = selectedOption[2].value;
            subj7WorkS1Period = selectedOption[3].value;
            subj7WorkS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj7WorkS1 = {subj7WorkS1Name,subj7WorkS1Result,subj7WorkS1Coef,subj7WorkS1Period,subj7WorkS1Percent};

            //Store the values
            localStorage.setItem('subj7WorkS1Vals', JSON.stringify(subj7WorkS1));

            //Display the values
            subjectInputs[20].value = JSON.parse(localStorage.getItem('subj7WorkS1Vals')).subj7WorkS1Result;
        }
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj7 Intra 1 vars
            subj7IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj7IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj7IntraS2Result = convSelectedOption1;
            }
            subj7IntraS2Coef = selectedOption[2].value;
            subj7IntraS2Period = selectedOption[3].value;
            subj7IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj7IntraS2 = {subj7IntraS2Name,subj7IntraS2Result,subj7IntraS2Coef,subj7IntraS2Period,subj7IntraS2Percent};

            //Store the values
            localStorage.setItem('subj7IntraS2Vals', JSON.stringify(subj7IntraS2));

            //Display the values
            subjectInputs[27].value = JSON.parse(localStorage.getItem('subj7IntraS2Vals')).subj7IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj7 Final 1 vars
            subj7FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj7FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj7FinalS2Result = convSelectedOption1;
            }
            subj7FinalS2Coef = selectedOption[2].value;
            subj7FinalS2Period = selectedOption[3].value;
            subj7FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj7FinalS2 = {subj7FinalS2Name,subj7FinalS2Result,subj7FinalS2Coef,subj7FinalS2Period,subj7FinalS2Percent};

            //Store the values
            localStorage.setItem('subj7FinalS2Vals', JSON.stringify(subj7FinalS2));

            //Display the values
            subjectInputs[34].value = JSON.parse(localStorage.getItem('subj7FinalS2Vals')).subj7FinalS2Result;
        }
        if(selectedOption[3].value == "Work 2"){
            //Assign values to subj6 Work 1 vars
            subj7WorkS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj7WorkS2Result = "0" + convSelectedOption1;
            }else{
                subj7WorkS2Result = convSelectedOption1;
            }
            subj7WorkS2Coef = selectedOption[2].value;
            subj7WorkS2Period = selectedOption[3].value;
            subj7WorkS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj7WorkS2 = {subj7WorkS2Name,subj7WorkS2Result,subj7WorkS2Coef,subj7WorkS2Period,subj7WorkS2Percent};

            //Store the values
            localStorage.setItem('subj7WorkS2Vals', JSON.stringify(subj7WorkS2));

            //Display the values
            subjectInputs[41].value = JSON.parse(localStorage.getItem('subj7WorkS2Vals')).subj7WorkS2Result;
        }
    }  
    
    //If user is providing data for the subject "Francais" :
    if(selectedOption[0].value == "Français"){
        if(selectedOption[3].value == "Final 1"){
            //Assign values to subj8Final vars
            subj8FinalS1Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj8FinalS1Result = "0" + convSelectedOption1;
            }else{
                subj8FinalS1Result = convSelectedOption1;
            }
            subj8FinalS1Coef = selectedOption[2].value;
            subj8FinalS1Period = selectedOption[3].value;
            subj8FinalS1Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj8FinalS1 = {subj8FinalS1Name,subj8FinalS1Result,subj8FinalS1Coef,subj8FinalS1Period,subj8FinalS1Percent};

            //Store the values
            localStorage.setItem('subj8FinalS1Vals', JSON.stringify(subj8FinalS1));

            //Display the values
            subjectInputs[14].value = JSON.parse(localStorage.getItem('subj8FinalS1Vals')).subj8FinalS1Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj8Final vars
            subj8FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj8FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj8FinalS2Result = convSelectedOption1;
            }
            subj8FinalS2Coef = selectedOption[2].value;
            subj8FinalS2Period = selectedOption[3].value;
            subj8FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj8FinalS2 = {subj8FinalS2Name,subj8FinalS2Result,subj8FinalS2Coef,subj8FinalS2Period,subj8FinalS2Percent};

            //Store the values
            localStorage.setItem('subj8FinalS2Vals', JSON.stringify(subj8FinalS2));

            //Display the values
            subjectInputs[35].value = JSON.parse(localStorage.getItem('subj8FinalS2Vals')).subj8FinalS2Result;
        }
    }

    //If user is providing data for the subject "Probabilité" :
    if(selectedOption[0].value == "Probabilité"){
        if(selectedOption[3].value == "Intra 2"){
            //Assign values to subj9 Intra 2 vars
            subj9IntraS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj9IntraS2Result = "0" + convSelectedOption1;
            }else{
                subj9IntraS2Result = convSelectedOption1;
            }
            subj9IntraS2Coef = selectedOption[2].value;
            subj9IntraS2Period = selectedOption[3].value;
            subj9IntraS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj9IntraS2 = {subj9IntraS2Name,subj9IntraS2Result,subj9IntraS2Coef,subj9IntraS2Period,subj9IntraS2Percent};

            //Store the values
            localStorage.setItem('subj9IntraS2Vals', JSON.stringify(subj9IntraS2));

            //Display the values
            subjectInputs[23].value = JSON.parse(localStorage.getItem('subj9IntraS2Vals')).subj9IntraS2Result;
        }
        if(selectedOption[3].value == "Final 2"){
            //Assign values to subj6 Final 2 vars
            subj9FinalS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj9FinalS2Result = "0" + convSelectedOption1;
            }else{
                subj9FinalS2Result = convSelectedOption1;
            }
            subj9FinalS2Coef = selectedOption[2].value;
            subj9FinalS2Period = selectedOption[3].value;
            subj9FinalS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj9FinalS2 = {subj9FinalS2Name,subj9FinalS2Result,subj9FinalS2Coef,subj9FinalS2Period,subj9FinalS2Percent};

            //Store the values
            localStorage.setItem('subj9FinalS2Vals', JSON.stringify(subj9FinalS2));

            //Display the values
            subjectInputs[30].value = JSON.parse(localStorage.getItem('subj9FinalS2Vals')).subj9FinalS2Result;
        }
        if(selectedOption[3].value == "Work 2"){
            //Assign values to subj6 Work 1 vars
            subj9WorkS2Name = selectedOption[0].value;
            if(selectedOption[1].value.length != 0 && selectedOption[1].value <= 9){
                subj9WorkS2Result = "0" + convSelectedOption1;
            }else{
                subj9WorkS2Result = convSelectedOption1;
            }
            subj9WorkS2Coef = selectedOption[2].value;
            subj9WorkS2Period = selectedOption[3].value;
            subj9WorkS2Percent = selectedOption[4].value;

            //Set the object list with assigned values
            subj9WorkS2 = {subj9WorkS2Name,subj9WorkS2Result,subj9WorkS2Coef,subj9WorkS2Period,subj9WorkS2Percent};

            //Store the values
            localStorage.setItem('subj9WorkS2Vals', JSON.stringify(subj9WorkS2));

            //Display the values
            subjectInputs[37].value = JSON.parse(localStorage.getItem('subj9WorkS2Vals')).subj9WorkS2Result;
        }
    }
});


//When user want to modify results of a subject
for(let i = 0; i < subjectItems.length; i++){
    subjectItems[i].addEventListener('click', () => {
        let subj = subjectItems[i].getElementsByTagName('p')[0].innerHTML;
        let result;
        if(subjectInputs[i].value < 10){
            result = subjectInputs[i].value - "0";
        }else{
            result = subjectInputs[i].value;
        }

        selectedOption[0].value = subj;
        selectedOption[1].value = result;

        //Setting periods for the subject
        if(i >= 0 && i <= 6){
            selectedOption[3].value = "Intra 1";
        }
        if(i >= 7 && i <= 14){
            selectedOption[3].value = "Final 1";
        }
        if(i >= 15 && i <= 20){
            selectedOption[3].value = "Work 1";
        }
        if(i >= 21 && i <= 27){
            selectedOption[3].value = "Intra 2";
        }
        if(i >= 28 && i <= 35){
            selectedOption[3].value = "Final 2";
        }
        if(i >= 36 && i <= 41){
            selectedOption[3].value = "Work 2";
        }

        //if the subject is "Economie"
        if(i == 0 || i == 7 || i == 21 || i == 28){
            //if the periods are intras
            if(i == 0 || i == 21){
                if(i == 0){
                    if(JSON.parse(localStorage.getItem('subj1IntraS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.35";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj1IntraS1Vals')).subj1IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj1IntraS1Vals')).subj1IntraS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj1IntraS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.35";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj1IntraS2Vals')).subj1IntraS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj1IntraS2Vals')).subj1IntraS2Percent;
                    }
                }
            }
            //if the periods are finals
            if(i == 7 || i == 28){
                if(i == 7){
                    if(JSON.parse(localStorage.getItem('subj1FinalS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.65";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj1FinalS1Vals')).subj1FinalS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj1FinalS1Vals')).subj1FinalS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj1FinalS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.65";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj1FinalS2Vals')).subj1FinalS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj1FinalS2Vals')).subj1FinalS2Percent;
                    }
                }
            }
        }


        //if the subject is "Algèbre"
        if(i == 1 || i == 8 || i == 15 || i == 22 || i == 29 || i == 36){
            //if the periods are intras
            if(i == 1 || i == 22){
                if(i == 1){
                    if(JSON.parse(localStorage.getItem('subj2IntraS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj2IntraS1Vals')).subj2IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj2IntraS1Vals')).subj2IntraS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj2IntraS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj2IntraS2Vals')).subj2IntraS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj2IntraS2Vals')).subj2IntraS2Percent;
                    }
                }
            }
            //if the periods are finals
            if(i == 8 || i == 29){
                if(i == 8){
                    if(JSON.parse(localStorage.getItem('subj2FinalS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj2FinalS1Vals')).subj2FinalS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj2FinalS1Vals')).subj2FinalS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj2FinalS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj2FinalS2Vals')).subj2FinalS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj2FinalS2Vals')).subj2FinalS2Percent;
                    }
                }
            }
            //if the periods are works
            if(i == 15 || i == 36){
                if(i == 15){
                    if(JSON.parse(localStorage.getItem('subj2WorkS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj2WorkS1Vals')).subj2WorkS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj2WorkS1Vals')).subj2WorkS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj2WorkS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj2WorkS2Vals')).subj2WorkS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj2WorkS2Vals')).subj2WorkS2Percent;
                    }
                }
            }
        }


        //if the subject is "Statistique Descriptive"
        if(i == 2 || i == 9 || i == 16){
                if(i == 2){
                    if(JSON.parse(localStorage.getItem('subj3IntraS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj3IntraS1Vals')).subj3IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj3IntraS1Vals')).subj3IntraS1Percent;
                    }
                }
                if(i == 9){
                    if(JSON.parse(localStorage.getItem('subj3FinalS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj3FinalS1Vals')).subj3FinalS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj3FinalS1Vals')).subj3FinalS1Percent;
                    }
                }
                if(i == 16){
                    if(JSON.parse(localStorage.getItem('subj3FinalS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj3WorkS1Vals')).subj3WorkS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj3WorkS1Vals')).subj3WorkS1Percent;
                    }
                }
        }


        //if the subject is "Comptabilité"
        if(i == 3 || i == 10 || i == 17 || i == 24 || i == 31 || i == 38){
            //if the periods are intras
            if(i == 3 || i == 24){
                if(i == 3){
                    if(JSON.parse(localStorage.getItem('subj4IntraS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj4IntraS1Vals')).subj4IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj4IntraS1Vals')).subj4IntraS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj4IntraS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj4IntraS2Vals')).subj4IntraS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj4IntraS2Vals')).subj4IntraS2Percent;
                    }   
                }
            }
            //if the periods are finals
            if(i == 10 || i == 31){
                if(i == 10){
                    if(JSON.parse(localStorage.getItem('subj4FinalS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj4FinalS1Vals')).subj4FinalS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj4FinalS1Vals')).subj4FinalS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj4FinalS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj4FinalS2Vals')).subj4FinalS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj4FinalS2Vals')).subj4FinalS2Percent;
                    }
                }
            }
            //if the periods are works
            if(i == 17 || i == 38){
                if(i == 17){
                    if(JSON.parse(localStorage.getItem('subj4WorkS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj4WorkS1Vals')).subj4WorkS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj4WorkS1Vals')).subj4WorkS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj4WorkS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj4WorkS2Vals')).subj4WorkS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj4WorkS2Vals')).subj4WorkS2Percent;
                    }   
                }
            }
        }


        //if the subject is "Espagnol"
        if(i == 4 || i == 11 || i == 18 || i == 25 || i == 32 || i == 39){
            //if the periods are intras
            if(i == 4 || i == 25){
                if(i == 4){
                    if(JSON.parse(localStorage.getItem('subj5IntraS1Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj5IntraS1Vals')).subj5IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj5IntraS1Vals')).subj5IntraS1Percent;
                    }
                    
                }else{
                    if(JSON.parse(localStorage.getItem('subj5IntraS2Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj5IntraS2Vals')).subj5IntraS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj5IntraS2Vals')).subj5IntraS2Percent;
                    }
                }
            }
            //if the periods are finals
            if(i == 11 || i == 32){
                if(i == 11){
                    if(JSON.parse(localStorage.getItem('subj5FinalS1Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj5FinalS1Vals')).subj5FinalS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj5FinalS1Vals')).subj5FinalS1Percent;
                    }
                    
                }else{
                    if(JSON.parse(localStorage.getItem('subj5FinalS2Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj5FinalS2Vals')).subj5FinalS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj5FinalS2Vals')).subj5FinalS2Percent;
                    }
                    
                }
            }
            //if the periods are works
            if(i == 18 || i == 39){
                if(i == 18){
                    if(JSON.parse(localStorage.getItem('subj5WorkS1Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj5WorkS1Vals')).subj5WorkS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj5WorkS1Vals')).subj5WorkS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj5WorkS2Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj5WorkS2Vals')).subj5WorkS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj5WorkS2Vals')).subj5WorkS2Percent;
                    }
                }
            }
        }


        //if the subject is "Anglais"
        if(i == 5 || i == 12 || i == 19 || i == 26 || i == 33 || i == 40){
            //if the periods are intras
            if(i == 5 || i == 26){
                if(i == 5){
                    if(JSON.parse(localStorage.getItem('subj6IntraS1Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj6IntraS1Vals')).subj6IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj6IntraS1Vals')).subj6IntraS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj6IntraS2Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj6IntraS2Vals')).subj6IntraS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj6IntraS2Vals')).subj6IntraS2Percent;
                    }   
                }
            }
            //if the periods are finals
            if(i == 12 || i == 33){
                if(i == 12){
                    if(JSON.parse(localStorage.getItem('subj6FinalS1Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj6FinalS1Vals')).subj6FinalS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj6FinalS1Vals')).subj6FinalS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj6FinalS2Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.50";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj6FinalS2Vals')).subj6FinalS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj6FinalS2Vals')).subj6FinalS2Percent;
                    }
                }
            }
            //if the periods are works
            if(i == 19 || i == 40){
                if(i == 19){
                    if(JSON.parse(localStorage.getItem('subj6WorkS1Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj6WorkS1Vals')).subj6WorkS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj6WorkS1Vals')).subj6WorkS1Percent;
                    }
                    
                }else{
                    if(JSON.parse(localStorage.getItem('subj6WorkS2Vals')) == null){
                        selectedOption[2].value = "1";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj6WorkS2Vals')).subj6WorkS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj6WorkS2Vals')).subj6WorkS2Percent;
                    }
                }
            }
        }


        //if the subject is "Analyse"
        if(i == 6 || i == 13 || i == 20 || i == 27 || i == 34 || i == 41){
            //if the periods are intras
            if(i == 6 || i == 27){
                if(i == 6){
                    if(JSON.parse(localStorage.getItem('subj7IntraS1Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj7IntraS1Vals')).subj7IntraS1Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj7IntraS1Vals')).subj7IntraS1Percent;
                    }
                }else{
                    if(JSON.parse(localStorage.getItem('subj7IntraS2Vals')) == null){
                        selectedOption[2].value = "1.5";
                        selectedOption[4].value = "0.25";
                    }else{
                        selectedOption[2].value = JSON.parse(localStorage.getItem('subj7IntraS2Vals')).subj7IntraS2Coef;
                        selectedOption[4].value = JSON.parse(localStorage.getItem('subj7IntraS2Vals')).subj7IntraS2Percent;
                    }
                }
            }
            //if the periods are finals
            if(i == 13 || i == 34){
                    if(i == 13){
                        if(JSON.parse(localStorage.getItem('subj7FinalS1Vals')) == null){
                            selectedOption[2].value = "1.5";
                            selectedOption[4].value = "0.50";
                        }else{
                            selectedOption[2].value = JSON.parse(localStorage.getItem('subj7FinalS1Vals')).subj7FinalS1Coef;
                            selectedOption[4].value = JSON.parse(localStorage.getItem('subj7FinalS1Vals')).subj7FinalS1Percent;
                        }
                        
                    }else{
                        if(JSON.parse(localStorage.getItem('subj7FinalS2Vals')) == null){
                            selectedOption[2].value = "1.5";
                            selectedOption[4].value = "0.50";
                        }else{
                            selectedOption[2].value = JSON.parse(localStorage.getItem('subj7FinalS2Vals')).subj7FinalS2Coef;
                            selectedOption[4].value = JSON.parse(localStorage.getItem('subj7FinalS2Vals')).subj7FinalS2Percent;
                        }
                        
                    }
            }
            //if the periods are works
            if(i == 20 || i == 41){
                    if(i == 20){
                        if(JSON.parse(localStorage.getItem('subj7WorkS1Vals')) == null){
                            selectedOption[2].value = "1.5";
                            selectedOption[4].value = "0.25";
                        }else{
                            selectedOption[2].value = JSON.parse(localStorage.getItem('subj7WorkS1Vals')).subj7WorkS1Coef;
                            selectedOption[4].value = JSON.parse(localStorage.getItem('subj7WorkS1Vals')).subj7WorkS1Percent;
                        }
                        
                    }else{
                        if(JSON.parse(localStorage.getItem('subj7WorkS2Vals')) == null){
                            selectedOption[2].value = "1.5";
                            selectedOption[4].value = "0.25";
                        }else{
                            selectedOption[2].value = JSON.parse(localStorage.getItem('subj7WorkS2Vals')).subj7WorkS2Coef;
                            selectedOption[4].value = JSON.parse(localStorage.getItem('subj7WorkS2Vals')).subj7WorkS2Percent;
                        }
                    }
            }
        }

        //if the subject is "Français"
        if(i == 14 || i == 35){
            if(i == 14){
                if(JSON.parse(localStorage.getItem('subj8FinalS1Vals')) == null){
                    selectedOption[2].value = "0.5";
                    selectedOption[4].value = "1.00";
                }else{
                    selectedOption[2].value = JSON.parse(localStorage.getItem('subj8FinalS1Vals')).subj8FinalS1Coef;
                    selectedOption[4].value = JSON.parse(localStorage.getItem('subj8FinalS1Vals')).subj8FinalS1Percent;
                }
                
            }else{
                if(JSON.parse(localStorage.getItem('subj8FinalS2Vals')) == null){
                    selectedOption[2].value = "0.5";
                    selectedOption[4].value = "1.00";
                }else{
                    selectedOption[2].value = JSON.parse(localStorage.getItem('subj8FinalS2Vals')).subj8FinalS2Coef;
                    selectedOption[4].value = JSON.parse(localStorage.getItem('subj8FinalS2Vals')).subj8FinalS2Percent;
                }
            }
        }


        //if the subject is "Probabilité"
        if(i == 23 || i == 30 || i == 37){
            if(i == 23){
                if(JSON.parse(localStorage.getItem('subj9IntraS2Vals')) == null){
                    selectedOption[2].value = "1.5";
                    selectedOption[4].value = "0.25";
                }
                else{
                    selectedOption[2].value = JSON.parse(localStorage.getItem('subj9IntraS2Vals')).subj9IntraS2Coef;
                    selectedOption[4].value = JSON.parse(localStorage.getItem('subj9IntraS2Vals')).subj9IntraS2Percent;
                }
            }
            if(i == 30){
                if(JSON.parse(localStorage.getItem('subj9FinalS2Vals')) == null){
                    selectedOption[2].value = "1.5";
                    selectedOption[4].value = "0.50";
                }
                else{
                    selectedOption[2].value = JSON.parse(localStorage.getItem('subj9FinalS2Vals')).subj9FinalS2Coef;
                    selectedOption[4].value = JSON.parse(localStorage.getItem('subj9FinalS2Vals')).subj9FinalS2Percent;
                }
                
            }
            if(i == 37){
                if(JSON.parse(localStorage.getItem('subj9WorkS2Vals')) == null){
                    selectedOption[2].value = "1.5";
                    selectedOption[4].value = "0.25";
                }
                else{
                    selectedOption[2].value = JSON.parse(localStorage.getItem('subj9WorkS2Vals')).subj9WorkS2Coef;
                    selectedOption[4].value = JSON.parse(localStorage.getItem('subj9WorkS2Vals')).subj9WorkS2Percent;
                }
            }
        }
    })
}