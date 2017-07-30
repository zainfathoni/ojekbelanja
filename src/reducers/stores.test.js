import stores from './stores';
import { receiveStores } from '../actions';

test('FETCH_STORES_SUCCESS', () => {
  const before = {};
  const action = receiveStores({
      jejen: {
      name: 'Jejen',
      phone: '081234567890',
      area: 'Sadang Serang & sekitarnya',
      image: 'placeholder-224x224.png',
      cost: 2000,
    },
    zaenal: {
      name: 'Zaenal',
      phone: '089876543210',
      area: 'Sadang Tengah & sekitarnya',
      image: 'placeholder-224x224.png',
      cost: 3000,
    },
  });
  const after = {
    items: {
      jejen: {
        name: 'Jejen',
        phone: '081234567890',
        area: 'Sadang Serang & sekitarnya',
        image: 'placeholder-224x224.png',
        cost: 2000,
      },
      zaenal: {
        name: 'Zaenal',
        phone: '089876543210',
        area: 'Sadang Tengah & sekitarnya',
        image: 'placeholder-224x224.png',
        cost: 3000,
      },
    },
    keyword: "",
    isFetching: false,
    error: null,
  };

  expect(
    stores(before, action)
  ).toEqual(after);
});
