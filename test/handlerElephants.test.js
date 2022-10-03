const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('caso receba nenhum parâmetro indefinido, é necessário retornar undefined', () => {
    expect(handlerElephants(undefined)).toEqual(undefined);
  });

  it('caso receba um parâmetro que não seja do tipo string, é necessário retornar: Parâmetro inválido, é necessário uma string', () => {
    const frase = 'Parâmetro inválido, é necessário uma string';
    expect(handlerElephants(3)).toEqual(frase);
    expect(handlerElephants({})).toEqual(frase);
    expect(handlerElephants([])).toEqual(frase);
  });

  it('Verifica se `handlerElephants` é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });

  it('caso receba um parâmetro, é necessário retornar o valor esperado', () => {
    expect(handlerElephants('name')).toEqual('elephants');
    expect(handlerElephants('id')).toEqual('bb2a76d8-5fe3-4d03-84b7-dba9cfc048b5');
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('location')).toEqual('NW');
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
    expect(handlerElephants('residents')).toEqual([
      { name: 'Ilana', sex: 'female', age: 11 },
      { name: 'Orval', sex: 'male', age: 15 },
      { name: 'Bea', sex: 'female', age: 12 },
      { name: 'Jefferson', sex: 'male', age: 4 }]);
    expect(handlerElephants('count')).toEqual(4);
    expect(handlerElephants('averageAge')).toEqual(10.5);
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });

  it('Caso a função receba um parametro inexistente, retornar null', () => {
    expect(handlerElephants('parametroInexistente')).toEqual(null);
  });
});
