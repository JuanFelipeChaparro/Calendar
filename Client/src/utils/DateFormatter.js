const _isDate = date => {
    try {
        return !isNaN(date.getDate());
    } catch(err) {
        return false;
    }
};

const _getDateStringSplit = date => {
    if (_isDate(date)) {
        return date.toDateString().split(" ")
    } else {
        return new Date(Number(date)).toDateString().split(" ");
    }
};

export const getMonth = date => {
    return _getDateStringSplit(date)[1];
};

export const getDay = date => {
    return _getDateStringSplit(date)[2];
};
