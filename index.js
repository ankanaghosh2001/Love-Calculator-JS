
// document.getElementById("submit").addEventListener("click",loveCal);
document.querySelector("form").addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    // Call the loveCal function when the form is submitted
    if(document.getElementById("girl").value === "" || document.getElementById("boy").value === ""){
        alert("Enter the required fields! ");
    }
    else{
        loveCal();
    }
});

let result = document.getElementById("result");
result.innerHTML = "";

function loveCal(){
    var name1 = document.getElementById("girl").value.toUpperCase();
    var name2 = document.getElementById("boy").value.toUpperCase();

    visited1 = [];
    visited2 = [];
    count1 = [];
    count2 = [];

    for(let i=0;i<name1.length;i++){
        let count = 0;
        let flag = 0;
        for(let j=i;j<name1.length;j++){
            if(!visited1.includes(name1[i])){
                if(name1[i] === name1[j]){
                    count++;
                    flag = 1;
                }
            }
        }
        if(flag === 1){
            visited1.push(name1[i]);
        }
        if(count != 0){
            count1.push(count);
        }
    }

    for(let i=0;i<name2.length;i++){
        let count = 0;
        let flag = 0;
        for(let j=i;j<name2.length;j++){
            if(!visited2.includes(name2[i])){
                if(name2[i] === name2[j]){
                    count++;
                    flag = 1;
                }
            }
        }
        if(flag === 1){
            visited2.push(name2[i]);
        }
        if(count != 0){
            count2.push(count);
        }
    }

    let mergedArray = count1.concat(count2);
    let title = document.createElement("h2");
    title.setAttribute("align", "center");
    title.setAttribute("style", "color: #BA0440; font-size:35px; font-weight: bold; font-family: 'Tilt Neon', sans-serif;");
    title.textContent = name1.toUpperCase() + " and " + name2.toUpperCase() + "'s love percentage is: ";
    result.appendChild(title);

    percentageCal(mergedArray);
}

function percentageCal(arr){
    let sumValues = [];
    if(arr.length % 2 === 0){
        let n = Math.floor(arr.length/2);

        for(let i=0;i<n;i++){
            var sum;
            if(i === (2*n-i-1)){
                sum = arr[i];
            }
            else{
                sum = arr[i] + arr[2*n-i-1];
            }
            let digits = Array.from(String(sum), Number);
            sumValues.push(...digits);
        }
        if (sumValues.length > 2) {
            percentageCal(sumValues);
        } else {
            let percentage = sumValues.join('');
            let percentageHeader = document.createElement("h2");
            percentageHeader.setAttribute("align", "center");
            percentageHeader.setAttribute("style", "color: #0441BA; font-size:48px; font-weight: bold; font-family: 'Tilt Neon', sans-serif;");
            percentageHeader.textContent = percentage + "%";
            result.appendChild(percentageHeader);

            let message = document.createElement("h2");
            message.setAttribute("align", "center");
            message.setAttribute("style", "color: #BA0440; font-size:48px; font-weight: bold; font-family: 'Tilt Neon', sans-serif;");
            result.appendChild(message);
            if (percentage >= 85) {
                message.textContent = "Match made in Heaven 😍💖";
            } else if (percentage >= 60 && percentage < 85) {
                message.textContent = "You guys are a Great Match 🥰❤️";
            } else if (percentage >= 40 && percentage < 60) {
                message.textContent = "Don't Worry! Communicate more 😄🩷";
            } else {
                message.textContent = "It's Ok. Someone better is waiting for you 😇🩵";
            }
        }
    }
    else{
        let n = Math.floor(arr.length/2) + 1;

        for(let i=0;i<n;i++){
            var sum;
            if(i === (2*n-i-2)){
                sum = arr[i];
            }
            else{
                sum = arr[i] + arr[2*n-i-2];
            }
            let digits = Array.from(String(sum), Number);
            sumValues.push(...digits);
        }

        if (sumValues.length > 2) {
            percentageCal(sumValues);
        } 
        else {
            let percentage = sumValues.join('');
            let percentageHeader = document.createElement("h2");
            percentageHeader.setAttribute("align", "center");
            percentageHeader.setAttribute("style", "color: #0441BA; font-size:48px; font-weight: bold; font-family: 'Tilt Neon', sans-serif;");
            percentageHeader.textContent = percentage + "%";
            result.appendChild(percentageHeader);

            let message = document.createElement("h2");
            message.setAttribute("align", "center");
            message.setAttribute("style", "color: #BA0440; font-size:48px; font-weight: bold; font-family: 'Tilt Neon', sans-serif;");
            result.appendChild(message);
            if (percentage >= 85) {
                message.textContent = "Match made in Heaven 😍💖";
            } else if (percentage >= 60 && percentage < 85) {
                message.textContent = "You guys are a Great Match 🥰❤️";
            } else if (percentage >= 40 && percentage < 60) {
                message.textContent = "Don't Worry! Communicate more 😄🩷";
            } else {
                message.textContent = "It's Ok. Someone better is waiting for you 😇🩵";
            }
        }
    }

}