export const getTitleProper = title => {
    if (title.search("http") === -1) {
        const items = title.split(" ");
        const words = [];

        for (let i in items)
            words.push(items[i][0].toUpperCase() + items[i].slice(1, items[i].length));

        return words.join(" ");
    } else return title;
};

export const getProperDescription = description => (description.length > 50) ? description.slice(0, 50) + "..." : description;

export const getOwnerProper = owner => {
    const words = owner.split("_");
    return words.join(" ");
};