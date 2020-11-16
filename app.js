document.getElementById("theAnswer").style.display = "none";
//hides the last p element until the values are able to be added to 

calculate.addEventListener("click", function () {
    const liter = 0.5
    let time = document.querySelector("#time").value
    let answer = Math.floor(time * liter)

    document.getElementById("theAnswer").style.display = "block";
    //brings the last area back
    document.getElementById("correctAnswer").textContent = answer
    //adds the answer to the last area

})

