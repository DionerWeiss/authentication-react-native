interface Response {
    token: string,
    user: {
        name: string,
        email: string
    }
}

export function singIn(): Promise<Response> {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'jfkjnfkewlsnlfkewnsngvklshfbglkfdnlkgmdkflnbklçedbe',
                user: {
                    name: 'Dioner',
                    email: 'dionerweiss@gmail.com'
                }
            })
        }, 2000)
    });
}