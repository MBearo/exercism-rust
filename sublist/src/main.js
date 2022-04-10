function sublist(a, b) {
    let i = 0
    let j = 0
    while (i < a.length && j < b.length) {
        if (a[i] < b[j]) {
            i++
        } else if (a[i] > b[j]) {
            j++
        } else {
            while (a[i] === b[j] && i < a.length && j < b.length) {
                i++
                j++
            }
            break
        }
    }
    console.log(i, j)
    if (i === a.length && j === b.length && i === j) {
        return 'equal'
    } else if (i === a.length && a.length < b.length) {
        return 'Sublist'
    } else if (j === b.length && a.length > b.length) {
        return 'Superlist'
    } else {
        return 'Unequal'
    }
}
console.log(sublist([2, 3], [1, 2, 3, 4, 5]))
