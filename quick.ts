function swap(items: number[], left: number, right: number) {
    const temp = items[left];
    items[left] = items[right];
    items[right] = temp;
}

function partition(items: number[], left: number, right: number) {
    const pivot = items[Math.floor((left + right) / 2)];
    let i = left;
    let j = right;

    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

module.exports = function quick(items: number[],
                                left: number = 0,
                                right: number = items.length - 1) {
    if (items.length > 1) {
        const index = partition(items, left, right);
        if (left < (index - 1)) {
            quick(items, left, index - 1);
        }
        if (index < right) {
            quick(items, index, right);
        }
    }
    return items;
}