import React from 'react';

function signMark(first, body, keyword) {
    const index = body.toLowerCase().indexOf(keyword.toLowerCase());
    if (keyword && index > -1) {
        let awal = `${body.slice(0, index)}`;
        let newAwal = (first.length === 0) ? [{ data: awal, isMarked: false }] : [...first, { data: awal, isMarked: false }]
        let akhir = body.slice(index + keyword.length)
        let tengah = body.slice(index, index + keyword.length)
        return signMark([...newAwal, { data: tengah, isMarked: true }], akhir, keyword)
    } else {
        return [...first, { data: body, isMarked: false }]
    }
}

export function markHelper(body, keyword, first = []) {
    const marked = signMark(first, body, keyword);
    let key = 0;
    return marked.map(function(d) {
        if (d.isMarked) {
            return (<mark key={key++}>{d.data}</mark>)
        } else {
            return (d.data)
        }
    })
}
