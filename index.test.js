
const{ sayHello} = require('./index');
test('shouldgreetproperly', () =>{
const result= sayHello("Laraqui");
expect(result).toMatch(/Hello Laraqui/);
});
