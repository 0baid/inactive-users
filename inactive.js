const user = {
    name: "Qasim Asad",
    age: "25",
    city: "san francisco",
    lastActivity: new Date().getTime()
}

const inactiveFirstStage = () => {
    console.log("User has been inactive for the past 1-2 minutes");
    
}

const inactiveSecondStage = () => {
    console.log("User has been inactive for the past 3-4 minutes");
}

const inactiveThirdStage = () => {
    console.log("User has been inactive for the past 5-6 minutes");
}

const interval = () => {
    setTimeout(inactiveFirstStage,12000);
    setTimeout(inactiveSecondStage,18000);
    setTimeout(inactiveThirdStage,300000);
}


// this is the main method that acts like a worker and runs every 1 minute
setInterval(function(){
    interval();
}, 10000);