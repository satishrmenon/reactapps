import moment from 'moment';
const expenses = [{
    id: '1',
    description: 'Home rent',
    note: '',
    amount: 200,
    createdAt: 0
},
{
    id: '2',
    description: 'Furniture',
    note: 'Some note',
    amount: 1200,
    createdAt: moment(0).subtract(4,'days').valueOf()
},
{
    id: '3',
    description: 'Home rent',
    note: '',
    amount: 500,
    createdAt: moment(0).add(4,'days').valueOf()
}]

export  default expenses;