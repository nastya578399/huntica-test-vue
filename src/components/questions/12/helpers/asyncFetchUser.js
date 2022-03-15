function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Эмуляция работы бека
export function asyncFetchUser() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = getRandomInt(2);
            switch (result) {
                case 0:
                    resolve({
                        username: 'vasyan',
                        type: 'admin'
                    })
                    break;
                case 1:
                    reject('userNotFound');
                    break;
                case 2:
                    resolve({})
            }
        }, 1000)
    });
}
