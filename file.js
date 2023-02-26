var excercises = ['jumpj',
'pushups',
'situps',
'planks',
'burpees',
'squats'
];
function randomExcercise(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function callRandExercise() {
    var current_exercise = randomExcercise(excercises);
    if (current_exercise == 'pushups'){
        document.getElementById("pushups").style.opacity = 1;
        document.getElementById("pushups").style.color = "#ff6961";
        document.getElementById("pushups").style.borderColor = "#ff6961";
    }
    else if (current_exercise == 'situps'){
        document.getElementById("situps").style.opacity = 1;
        document.getElementById("situps").style.color = "#ff6961";
        document.getElementById("situps").style.borderColor = "#ff6961";
       
    }
    else if (current_exercise == 'planks'){
        document.getElementById("planks").style.opacity = 1;
        document.getElementById("planks").style.color = "#ff6961";
        document.getElementById("planks").style.borderColor = "#ff6961";
    }
    else if (current_exercise == 'jumpj'){
        document.getElementById("jumpj").style.opacity = 1;
        document.getElementById("jumpj").style.color = "#ff6961";
        document.getElementById("jumpj").style.borderColor = "#ff6961";
       
    }
    else if (current_exercise == 'squats'){
        document.getElementById("squats").style.opacity = 1;
        document.getElementById("squats").style.color = "#ff6961";
        document.getElementById("squats").style.borderColor = "#ff6961";
        
    }
    else{
        document.getElementById("burpees").style.opacity = 1;
        document.getElementById("burpees").style.color = "#ff6961";
        document.getElementById("burpees").style.borderColor = "#ff6961";
    }
    //console.log(current_exercise);
}