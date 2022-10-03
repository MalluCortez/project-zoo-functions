const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('caso receba nenhum parâmetro indefinido, é necessário retornar o objeto com suas chaves e valores', () => {
    expect(getOpeningHours(undefined) || getOpeningHours()).toEqual({
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    });
  });

  it('Verifica se `getOpeningHours` é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });

  it('Verifica se o zoológico está aberto ou fechado ao receber os parametros corretos', () => {
    const fraseAberto = 'The zoo is open';
    const fraseFechado = 'The zoo is closed';

    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(fraseAberto);
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(fraseFechado);
    expect(getOpeningHours('Thursday', '09:00-AM')).toBe(fraseFechado);
    expect(getOpeningHours('Friday', '09:00-PM')).toBe(fraseFechado);
    expect(getOpeningHours('Saturday', '12:00-AM')).toBe(fraseFechado);
    expect(getOpeningHours('Sunday', '09:00-AM')).toBe(fraseAberto);
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(fraseFechado);
  });

  it('Verifica se um erro é gerado ao colocar uma "string" no lugar de um "number"', () => {
    expect(() => getOpeningHours('Tuesday', 'nove')).toThrow(new Error('The hour should represent a number'));
  });

  it('Verifica se um erro é gerado ao não colocar "AM" ou "PM"', () => {
    expect(() => getOpeningHours('Tuesday', '09:00')).toThrow(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  it('Verifica se um erro é gerado ao colocar o horário entre 0 e 12', () => {
    expect(() => getOpeningHours('Tuesday', '20:00-AM')).toThrow(new Error('The hour must be between 0 and 12'));
  });

  it('Verifica se um erro é gerado ao colocar os minutos entre 0 e 59', () => {
    expect(() => getOpeningHours('Tuesday', '09:70-AM')).toThrow(new Error('The minutes must be between 0 and 59'));
  });

  it('Verifica se um erro é gerado ao colocar os dias da semana de forma errada', () => {
    expect(() => getOpeningHours('sextou', '09:70-AM')).toThrow(new Error('The day must be valid. Example: Monday'));
  });
});
