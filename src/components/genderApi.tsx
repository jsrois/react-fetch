export interface GenderApi {
    getGender: (name: string) => Promise<string>;
}

export class GenderizeIOApi implements GenderApi {
    public getGender(name: string) {
        return fetch(`https://api.genderize.io/?name=${name}`)
            .then(response => response.json())
            .then(response => response.gender);
    }
}
