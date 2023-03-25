import { h, Fragment } from 'start-dom-jsx'
import Component from '@core/Component';

export default class BookingItem extends Component {
    template() {
        return (
            <div class='booking-item'>
                <div class='left'>
                    <p>시간</p>
                    <p>상태</p>
                </div>
                <div class='middle'>
                    <p>예약자명 - 테이블명</p>
                    <p>성인 00 아이 00</p>
                    <p>메뉴명(개수)</p>
                </div>
                <div class='right'>
                    <button>버튼</button>
                </div>
            </div>
        )
    }
}