function century(year) {
    const cent = year.toString().split('').splice(0, 2).join('');
    const divid = year.toString().split('');
    let num = '1';
    for (let i = 0; i < +divid.length - 2; i++) {
        num = num + '0';
    }

    if (year / num === +cent) {
        return cent
    } else if (year / 100 < 1) {
        return 1
    }
    else {return +cent + 1}
}


console.log(century(448609));


