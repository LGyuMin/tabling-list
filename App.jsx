import { h, Fragment } from 'start-dom-jsx'
import Component from '@core/Component';
import Header from '@components/Header';
import BookingList from '@components/BookingList';
import BookingDetail from '@components/BookingDetail';

export default class App extends Component {
    template() {
        return (
            <div id="App">
                <div data-component="header" />
                <div data-component="booking-list" />
                <div data-component="booking-detail" />
            </div>
        )
    }

    mounted() {
        new Header(document.querySelector('[data-component="header"]'));
        new BookingList(document.querySelector('[data-component="booking-list"]'))
        new BookingDetail(document.querySelector('[data-component="booking-detail"]'))
    }
}