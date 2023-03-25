import { h, Fragment } from 'start-dom-jsx'
import Component from '@core/Component';
import BookingItem from '@components/BookingItem';

export default class BookingList extends Component {
    template() {
        return (
            <div class='booking-list'>
                <div data-component="booking-item"></div>
            </div>
        )
    }

    mounted() {
        new BookingItem(document.querySelector('[data-component="booking-item"]'));
    }
}