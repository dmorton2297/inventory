import categories from './categories';
const chairImage = 'https://secure.img1-fg.wfcdn.com/im/19556338/resize-h600-w600%5Ecompr-r85/3444/34441276/Kitchen+%26+Dining+Chairs.jpg';
const tableImage = 'https://target.scene7.com/is/image/Target/GUEST_3345b6d4-692e-4aea-ba22-07a9181a0833?wid=488&hei=488&fmt=pjpeg';

const locations = [
    {
      id: 1,
      name: 'Show Room',
      inventory: [
        {
          id: 1,
          name: 'Chair 2',
          description: 'Description of a chair',
          quantity: 2,
          category: 'Chairs',
          image: chairImage,
          status: 'Available'

        },
        {
          id: 2,
          name: 'Table 1',
          description: 'Description of a table',
          quantity: 1,
          category: 'Tables',
          image: tableImage,
          status: 'Available'
        }
      ]
    },
    {
      id: 2,
      name: 'Storage',
      inventory: [
        {
          id: 3,
          name: 'Chair 1',
          description: 'Description of a chair',
          quantity: 0,
          category: 'Chairs',
          image: chairImage,
          status: 'Available'

        },
        {
          id: 4,
          name: 'Chair 2',
          description: 'Description of a chair',
          quantity: 2,
          category: 'Chairs',
          image: chairImage,
          status: 'Unavailable'

        },
        {
          id: 5,
          name: 'Table 1',
          description: 'Description of a table',
          quantity: 1,
          category: 'Tables',
          image: tableImage,
          status: 'Available'
        }
      ]
    },
    {
      id: 3,
      name: 'Factory',
      inventory: [
        {
          id: 6,
          name: 'Table 1',
          description: 'Description of a table',
          quantity: 1,
          category: 'Tables',
          image: tableImage,
          status: 'Unavailable'
        }
      ]
    }
];

export default locations;
