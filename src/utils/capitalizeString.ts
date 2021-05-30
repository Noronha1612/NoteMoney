export default function capitalizeString(initialString: string) {
    const lettersArray = initialString.split('');
    lettersArray[0] = lettersArray[0].toUpperCase();

    return lettersArray.join('');
}