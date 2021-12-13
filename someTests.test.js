test('testOne for fun', ()=> {
    let a = 2;
    let b = 2;
    expect(a+b).toBe(4)
});

test('yo mama', ()=> {
    let joke = 'mama so fat, she ate the internet';
    expect(joke).toBeDefined();
});

test('arrays', ()=> {
    let arr = [1,2,3];
    expect(arr).toContain(1)
});

test('typeOf', ()=> {
    let str = 'oh yes';
    expect(typeof str).toBe('string')
});

test('yo mama weight', ()=> {
    let yoMama = 1000;
    let weights = 800;
    expect(weights).toBeLessThanOrEqual(yoMama)
})