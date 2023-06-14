function myBio(firstname,lastname, ...company){
    return `${firstname} ${lastname} runs ${company}`;
}
console.log(myBio(...['pavan','charan','Google']));
