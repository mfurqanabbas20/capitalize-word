const capitalizeWord = (word) => {
    const firstLetter = word.charAt(0).toUpperCase();
    const remainingWords = word.slice(1);
    return firstLetter + remainingWords;
}

export default capitalizeWord;