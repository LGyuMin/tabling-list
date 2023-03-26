import { h, Fragment } from 'start-dom-jsx'
import axios from 'axios';
import Component from '@core/Component';
import Header from '@components/Header';
import BookingList from '@components/BookingList';
import BookingDetail from '@components/BookingDetail';
import store, { fetchList, selectBooking } from '@store/store';

export default class App extends Component {
    template() {
        return (
            <div id="App">
                <div data-component="header" />
                <div class='main'>
                    <div data-component="booking-list" />
                    <div data-component="booking-detail" />
                </div>
            </div>
        )
    }

    mounted() {
        axios.get('https://frontend.tabling.co.kr/v1/store/9533/reservations')
        .then(res => {
            console.log(res.data.reservations);
            store.dispatch(fetchList(res.data.reservations))
            store.dispatch(selectBooking(res.data.reservations[0]))

            new Header(document.querySelector('[data-component="header"]'));
            new BookingList(document.querySelector('[data-component="booking-list"]'))
            new BookingDetail(document.querySelector('[data-component="booking-detail"]'))
        })
        .catch(err => {
            console.log(err);
        })

    }
}