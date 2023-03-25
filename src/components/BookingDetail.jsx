import { h, Fragment } from 'start-dom-jsx'
import Component from '@core/Component';

export default class BookingDetail extends Component {
    template() {
        return (
            <div class='booking-detail'>
                <div class='detail-box'>
                    <div class='title'>예약 정보</div>
                    <div class="detail">
                        <div class="detail-item">
                            <div class='subtitle'>예약 상태</div>
                            <div class="content">value</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>예약 시간</div>
                            <div class="content">value</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>접수 시간</div>
                            <div class="content">value</div>
                        </div>
                    </div>
                    <div class='title'>고객 정보</div>
                    <div class="detail">
                        <div class="detail-item">
                            <div class='subtitle'>고객 성명</div>
                            <div class="content">value</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>고객 등급</div>
                            <div class="content">value</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>고객 메모</div>
                            <div class="content">value</div>
                        </div>
                        <div class="detail-item">
                            <div class='subtitle'>요청 사항</div>
                            <div class="content">value</div>
                        </div>
                    </div>
                </div>
                <div class='detail-dim'></div>
            </div>
        )
    }
}