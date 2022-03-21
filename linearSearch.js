function linearSearch(arr, key) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email === key) {
            results.push(arr[i]);
        }
    }
    if (!results) {
        return -1;
    }
    return results;
}

const arr = [
    {
        email: "mojnu.cse.pust@gmail.com",
        order: "Bondna"
    },
    {
        email: "morshed@gmail.com",
        order: "Hariken"
    },
    {
        email: "asad@gmail.com",
        order: "Nempo"
    },
    {
        email: "mojnu.cse.pust@gmail.com",
        order: "data structure and algorithm book"
    }
]
const result = linearSearch(arr, "mojnu.cse.pust@gmail.com");
console.log(result);