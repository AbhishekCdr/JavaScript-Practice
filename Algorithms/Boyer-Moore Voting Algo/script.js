/*
Boyer Moore Voting Algo

Cancel votes smartly to find the majority

What is Majority Element
-> A Majority element is one that appears more than [n/k] times where n is the array lenght and k is a chosen number like 2 or 3

-> n/2 only one element can appear more than n/2 times
-> n/3 at most two elements can appear more than n/3 times
-> n/k at most (k-1) elements can appear mote than n/k times

CORE IDEA
- Use a vote system to find potential majority candidates
- Evety time we see the same cnadidate -> VOTE UP
- When we see something different -> vote down
- If votes cancel out (count = 0) -> assume new candidate

Links:

https://algomaster.io/practice/dsa/majority-element?list=am-300

https://coderraj07.medium.com/%EF%B8%8F-boyer-moore-voting-algorithm-explained-n-2-n-3-n-k-majority-elements-ab0f0052fd19

*/

function findMajority(nums){
    let candidate;
    let count = 0;

    for (let num of nums){
        if (count === 0){
            candidate = num;
            count = 1;
        } else if (num === candidate){
            count++   
        } else {
            count--
        }
    }

    return candidate
}

let nums = [3,3,4,2,4,4,2,4,4];

// console.log(findMajority(nums));