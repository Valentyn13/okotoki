export const fuzzySearch = (array: string[], searchTerm: string) => {
    // Convert the search term to a regular expression
    const regex = new RegExp(searchTerm.split('').join('.*'), 'i');

    // Filter the array based on the regular expression
    return array.filter((item) => regex.test(item));
};
