function linearSearch(arr, key) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].nayok === key){
            results.push(arr[i]);
        }
    }
    if(!results){
        return -1;
    }
    return results;
}

const arr = [
    {
        nayok: "Sakib",
        nayika: "Apu"
    },
    {
        nayok: "Eliyas",
        nayika: "Anju"
    },
    {
        nayok: "Sakib",
        nayika: "Bubli"
    },
    {
        nayok: "Morshed",
        nayika: "Arfin"
    },
    {
        nayok: "Salman",
        nayika: "Sabnur"
    },
    {
        nayok: "Mojnu",
        nayika: "nai"
    }
]
const result = linearSearch(arr, "Sakib");
console.log(result);