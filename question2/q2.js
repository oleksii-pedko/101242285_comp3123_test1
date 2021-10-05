function delayedSuccess() {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            console.log(success)
            resolve(success);
        }, 500);
    });

    promise.then(
        resolveData => console.log('Resolved', resolveData),
        rejectData => console.log('Rejected', rejectData)
    );
}

function delayedException() {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            try {
                throw new Error()
            } catch (e) {
                let error = {'error': 'delayed exception!'};
                reject(error);
            }
        }, 500);
    });

    promise.then(
        resolveData => console.log('Promise resolved', resolveData),
        rejectData => console.log('Promise rejected', rejectData)
    );
}

delayedSuccess();
delayedException();