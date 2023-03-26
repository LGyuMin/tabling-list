import { h, Fragment } from 'start-dom-jsx'
import Component from '@core/Component';
import store from '@store/store';
import ic_closed from '@assets/ic_closed.svg';

export default class BookingDetail extends Component {
    template() {
        const STATUS = {
            seated: '착성 중',
            reserved: '예약'
        }
        return (
            <div class='booking-detail'>
                <div class='detail-box'>
                    <div class='title'>예약 정보</div>
                    <button class='close'>
                        <img src={ic_closed} alt="close icon" />
                    </button>
                    <div class="detail">
                        <div class="detail-item">
                            <div class='subtitle'>예약 상태</div>
                            <div class="content">{ STATUS[this.state.status] }</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>예약 시간</div>
                            <div class="content">{ this.state.timeReserved }</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>접수 시간</div>
                            <div class="content">{ this.state.timeRegistered }</div>
                        </div>
                    </div>
                    <div class='title'>고객 정보</div>
                    <div class="detail">
                        <div class="detail-item">
                            <div class='subtitle'>고객 성명</div>
                            <div class="content">{ this.state.customer.name }</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>고객 등급</div>
                            <div class="content">{ this.state.customer.level }</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>고객 메모</div>
                            <div class="content memo">{ this.state.customer.memo }</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>요청 사항</div>
                            <div class="content">{ this.state.customer.request }</div>
                        </div>
                    </div>
                </div>
                <div class='detail-dim'></div>
            </div>
        )
    }

    setup() {
        this.state = store.getState().selectedBooking.booking;
        console.log(this.state);

        this.render();
    }
}