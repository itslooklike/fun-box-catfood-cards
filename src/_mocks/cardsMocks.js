export default [
  {
    subtitle: 'с\u00A0фуа-гра',
    list: [
      [{ type: 'bold', text: '10' }, { type: 'text', text: ' порций' }],
      [{ type: 'text', text: 'мышь в\u00A0подарок' }],
    ],
    amount: '0,5',
    tooltip: [
      { type: 'text', text: 'Чего сидишь? Порадуй котэ, ' },
      { type: 'link', text: 'купи.' },
    ],
    status: 'available',
    inputId: 'inputFuaGra',
  },
  {
    subtitle: 'с\u00A0рыбой',
    list: [
      [{ type: 'bold', text: '40' }, { type: 'text', text: ' порций' }],
      [{ type: 'bold', text: '2' }, { type: 'text', text: ' мыши в\u00A0подарок' }],
    ],
    amount: '2',
    tooltip: [{ type: 'text', text: 'Головы щучьи с\u00A0чесноком да\u00A0свежайшая сёмгушка.' }],
    status: 'available',
    inputId: 'inputFish',
  },
  {
    subtitle: 'с\u00A0курой',
    list: [
      [{ type: 'bold', text: '100' }, { type: 'text', text: ' порций' }],
      [{ type: 'bold', text: '5' }, { type: 'text', text: ' мышей в\u00A0подарок' }],
      [{ type: 'text', text: 'заказчик доволен' }],
    ],
    amount: '5',
    tooltip: [{ type: 'text', text: 'Печалька, с\u00A0курой закончился.' }],
    status: 'disabled',
    inputId: 'inputChiken',
  },
];
