import axios from 'axios';
import Component from '@core/Component';
import Header from '@components/Header';
import BookingList from '@components/BookingList';
import BookingDetail from '@components/BookingDetail';

export default class App extends Component {
    template() {
        return `
            <div data-component="header"></div>
            <div class="main">
                <div class="booking-list"></div>
                <div class="booking-detail"></div>
            </div>
        `
    }

    mounted() {
        new Header(document.querySelector('[data-component="header"]'));
        const bookingDetail = new BookingDetail(document.querySelector('.booking-detail'))
        const bookingList = new BookingList(document.querySelector('.booking-list'), {
            bookingDetail
        })

        axios.get('https://frontend.tabling.co.kr/v1/store/9533/reservations')
        .then(res => {
            bookingList.fetchList(res.data.reservations)
            bookingDetail.selectBooking(res.data.reservations[0])
        })
        .catch(err => {
            alert('예약목록을 가져오는데 문제가 생겼습니다. 관리자에게 문의하세요.')
        })

    }
}