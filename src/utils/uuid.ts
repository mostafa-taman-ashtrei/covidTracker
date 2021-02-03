const generateId = (numberOfCharacters: number) => {
    let randomValues = '';
    const stringValues = 'ABCDEFGHIJKLMNOabcdefghijklmnopqrstuvwxyzPQRSTUVWXYZ';
    const sizeOfCharacter = stringValues.length;
    for (let i = 0; i < numberOfCharacters; i += 1) {
        randomValues += stringValues.charAt(Math.floor(Math.random() * sizeOfCharacter));
    }
    return randomValues;
};

export default generateId;
