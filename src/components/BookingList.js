import dayjs from 'dayjs';
import Component from '@core/Component';
import store from '@store/store';

export default class BookingList extends Component {
    template() {
        const STATUS = store.getState().BOOKING_STATUS;
        let filteredList = store.getState().bookingList.filter(item => item.status !== 'done');

        if (filteredList.length < 1) {
            return `<div class='no-result'>예약 목록이 없습니다.</div>`
        }
        return `
            ${
                filteredList.map(item => `
                    <div class='booking-item'>
                        <div class='left'>
                            <p>${dayjs(item.timeReserved).format('HH:mm')}</p>
                            <p>${STATUS[item.status]}</p>
                        </div>
                        <div class='middle'>
                            <p>예약자명 - ${item.customer.name}</p>
                            <p>성인 ${item.customer.adult} 아이 ${item.customer.child}</p>
                            <p class='menu'>
                                ${
                                    item.menus.map(menu => `${menu.name} ${menu.qty}`).join(', ')
                                }
                            </p>
                        </div>
                        <div class='right'>
                            <button>${item.status}</button>
                        </div>
                    </div>
                `).join('')
            }
        `
    }
}