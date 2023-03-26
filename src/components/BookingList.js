import dayjs from 'dayjs';
import Component from '@core/Component';
import store from '@store/store';

export default class BookingList extends Component {
    template() {
        const BUTTON_TEXT = {
            seated: '퇴석',
            reserved: '착석',
        }
        const STATUS = store.getState().BOOKING_STATUS;
        let filteredList = store.getState().bookingList.filter(item => item.status !== 'done');

        if (filteredList.length < 1) {
            return `<div class='no-result'>예약 목록이 없습니다.</div>`
        }
        return `
            ${
                filteredList.map(item => `
                    <div class='booking-item' data-id='${item.id}' data-status='${item.status}'>
                        <div class='left'>
                            <p>${dayjs(item.timeReserved).format('HH:mm')}</p>
                            <p class="${item.status}">${STATUS[item.status]}</p>
                        </div>
                        <div class='middle'>
                            <p>${item.customer.name} - ${item.tables.map(table => table.name).join(', ')}</p>
                            <p>성인 ${item.customer.adult} 아이 ${item.customer.child}</p>
                            <p class='menu'>
                                ${
                                    item.menus.map(menu => `${menu.name}(${menu.qty})`).join(', ')
                                }
                            </p>
                        </div>
                        <div class='right'>
                            <button class='booking-btn'>${BUTTON_TEXT[item.status]}</button>
                        </div>
                    </div>
                `).join('')
            }
        `
    }

    setEvent() {
        this.addEvent('click', '.booking-btn', ({target}) => {
            console.log(target.closest('.booking-item').dataset.id);
            console.log(target.closest('.booking-item').dataset.status);
        })
    }
}