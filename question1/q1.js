function lowerCaseWords(arr) {

    const myPromise = new Promise(function (resolve, reject) {
        resolve(arr);
    });

    myPromise.then(arr => {
        let result = [];
        let i = arr.length;
        i--;
        for (i; i >= 0; --i) {
            console.log(arr[i]);
            if (typeof arr[i] == 'string') {
                result.push(arr[i].toLowerCase());
            }
        }
        result.reverse();
        console.log(result);

        return result;
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray);