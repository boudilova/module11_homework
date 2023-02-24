const containsDigit = require( "./index.js");


describe("tests for containsDigit function", () => {
  const withDigit = 'ASDASasdasd123asdf';
  const  withoutDigit= 'asdsdfgtyunbfd%^&^&*';
  const  emptyString= '';
  
  const nullType = null;
  const undefType = undefined;
  const NaNType = NaN;
  
  
  it("correct result for strings with digit, without digits, empty strings, different types of data", () => {
    expect(containsDigit(withDigit)).toBe(true); // в строке цифры есть
    expect(containsDigit(withoutDigit)).toBe(false); // в строке цифр нет
    expect(containsDigit(emptyString)).toBe(false); // пустая строка
    expect(containsDigit(nullType)).toBe(false); // передали null
    expect(containsDigit(undefType)).toBe(false); // передали undefined
     expect(containsDigit(NaNType)).toBe(false); // передали NaN
    });
});