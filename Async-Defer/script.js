const h1 = document.getElementById("h1");

const h2 = document.createElement("h2");

h2.innerText = "this is added";

h1.after(h2);

console.log(h2);

/*
    NORMAL EXECUTION

    1. Executor will wait on the Script to do 2 things 
        1.1 Download the script 
        1.2 Execute the script 
    
        After these 2 things are done the the DOM CREATION RESUMES.


    CONCLUSION: always have the script tag in the last of the body so that 
    out HTML DOM tree is fully Crated.

*/

/*
    Defer EXECUTION

    1. When Executor finds the Script tag It downloads the Script PARALLELY 
    hence the DOM CREATION DO NOT STOP.

    2. After DOM is 100% Created then the DOWNLOADED script starts its EXECUTION.


    // OUR Script.
*/

/*
    Async Execution

    1. When Executor finds the Script tag It downloads the Script PARALLELY 
    
    2. Then as soon as the download of script is finsihed the EXECUTION of script starts halting 
    DOM creation 

    3. When the EXECUTION is completed then the REST of the DOM is CREATED.


    // Google Analytics.

*/
