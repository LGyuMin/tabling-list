import dayjs from 'dayjs';
import Component from '@core/Component';

function padNumber (number) {
    if (number < 10) return `0${number}`
    else return number
}

export default class BookingList extends Component {
    template() {
        const BUTTON_TEXT = {
            seated: '퇴석',
            reserved: '착석',
        }
        const STATUS = this.getBookingStatus();
        const filteredList = this.getFilteredBookingList();

        if (filteredList.length < 1) {
            return `<div class='no-result'>예약 목록이 없습니다.</div>`
        }
        return `
            ${
                filteredList.map(item => `
                    <div class='booking-item' data-id='${item.id}'>
                        <div class='left'>
                            <p>${dayjs(item.timeReserved).format('HH:mm')}</p>
                            <p class="${item.status}">${STATUS[item.status]}</p>
                        </div>
                        <div class='middle'>
                            <p>${item.customer.name} - ${item.tables.map(table => table.name).join(', ')}</p>
                            <p>성인 ${padNumber(item.customer.adult)} 아이 ${padNumber(item.customer.child)}</p>
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
        const { bookingDetail } = this.props;

        this.addEvent('click', '.booking-item', ({target}) => {
            const item_id = target.closest('.booking-item').dataset.id;
            const item = this.$store.getState().bookingList.find(item => item.id === item_id)

            if (target.className === 'booking-btn') {
                this.changeBookingState({id: item.id, status: item.status});
                bookingDetail.render();
            } else {
                bookingDetail.selectBooking(item)
                if (screen.width < 1024) bookingDetail.setState({open: true, close: false})
            }
        })

    }
}