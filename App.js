// import { h, Fragment } from 'start-dom-jsx'
import axios from 'axios';
import Component from '@core/Component';
import Header from '@components/Header';
import BookingList from '@components/BookingList';
import BookingDetail from '@components/BookingDetail';
import store, { fetchList, selectBooking } from '@store/store';

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
        const bookingList = new BookingList(document.querySelector('.booking-list'))

        axios.get('https://frontend.tabling.co.kr/v1/store/9533/reservations')
        .then(res => {
            console.log(res.data.reservations);
            store.dispatch(fetchList(res.data.reservations))
            store.dispatch(selectBooking(res.data.reservations[0]))
            
            // new BookingList(document.querySelector('.booking-list'))
            bookingList.render();
            new BookingDetail(document.querySelector('.booking-detail'))
        })
        .catch(err => {
            console.log(err);
        })

    }
}