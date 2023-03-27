import dayjs from 'dayjs';
import Component from '@core/Component';
import ic_closed from '@assets/ic_closed.svg';

export default class BookingDetail extends Component {
    template() {
        const STATUS = this.getBookingStatus();
        const detail = this.getSelectedBooking();
        const list = this.getFilteredBookingList();

        if (!detail || list.length === 0) return '';

        return `
            <div class='detail-box'>
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
}