export const getTitleProper = title => {
    const items = title.split(" ");
    const words = [];

    for (let i in items)
        words.push(items[i][0].toUpperCase() + items[i].slice(1, items[i].length));

    return words.join(" ");
};

export const getOwnerProper = owner => {
    const words = owner.split("_");
    return words.join(" ");
};