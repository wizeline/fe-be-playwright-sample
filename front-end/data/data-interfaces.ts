//these interfaces define the structures of the data objects
//whenever you add new constants or add new properties to current objects, add them to these interfaces

interface Url {
    home: string,
    login: string
}

interface Credentials {
    email: string | undefined,
    password: string | undefined
}

interface Lists {
    toDo: string,
    doing: string,
    done: string
}

interface Card {
    id: string,
    title: string,
    description: string
}

interface Board {
    id: string,
    name: string
}

export { Url, Credentials, Lists, Card, Board }