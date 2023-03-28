import dayjs from 'dayjs';
import classNames from 'classnames';
import Component from '@core/Component';
import ic_closed from '@assets/ic_closed.svg';

export default class BookingDetail extends Component {
    template() {
        const { open, close } = this.state;
        const STATUS = this.getBookingStatus();
        const detail = this.getSelectedBooking();
        const list = this.getFilteredBookingList();

        if (!detail || list.length === 0) return '';

        return `
            <div class='detail-box ${ classNames({open, close}) }'>
                <div class='title'>예약 정보</div>
                <button class='close'>
                    <img src="${ic_closed}" alt="close icon" />
                </button>
                <div class="detail">
                    <div class="detail-item">
                        <div class='subtitle'>예약 상태</div>
                        <div class="content">${STATUS[detail.status]}</div>
                    </div>
                    <div class="detail-item">
                        <div class='subtitle'>예약 시간</div>
                        <div class="content">${dayjs(detail.timeReserved).format('HH:mm')}</div>
                    </div>
                    <div class="detail-item">
                        <div class='subtitle'>접수 시간</div>
                        <div class="content">${dayjs(detail.timeRegistered).format('HH:mm')}</div>
                    </div>
                </div>
                <div class='title'>고객 정보</div>
                <div class="detail">
                    <div class="detail-item">
                        <div class='subtitle'>고객 성명</div>
                        <div class="content">${detail.customer.name}</div>
                    </div>
                    <div class="detail-item">
                        <div class='subtitle'>고객 등급</div>
                        <div class="content">${detail.customer.level}</div>
                    </div>
                    <div class="detail-item">
                        <div class='subtitle'>고객 메모</div>
                        <div class="content memo">${detail.customer.memo}</div>
                    </div>
                    <div class="detail-item">
                        <div class='subtitle'>요청 사항</div>
                        <div class="content">${detail.customer.request}</div>
                    </div>
                </div>
            </div>
            <div class='detail-dim'></div>
        `
    }

    setup() {
        this.state = {
            open: false,
            close: false
        }
    }

    setDetailClassName() {
        const { open, close } = this.state;
        if (screen.width < 1024) {
            this.setState({open: true, close: false})
        } else {
            this.setState({open: false, close: false})
        }
    }

    setEvent() {
        let timer;
        window.addEventListener('resize', () => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                console.log(11);
                // if (screen.width >= 1024) {
                //     this.setState({open: false, close: true})
                // }
            }, 300);
        });
    }
}