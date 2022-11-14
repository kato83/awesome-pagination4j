import './style.css'
import {PaginationType1} from "./component/PaginationType1";

customElements.define('pagination-type1', PaginationType1);

const onSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    document.querySelectorAll('[total-length]')
        .forEach(node => node.setAttribute('total-length', form.get('total-length') || '100'));
    document.querySelectorAll('[current-page]')
        .forEach(node => node.setAttribute('current-page', form.get('current-page') || '1'));
    document.querySelectorAll('[limit]')
        .forEach(node => node.setAttribute('limit', form.get('limit') || '10'));
};

document.getElementById('paginationController')
    .addEventListener('submit', onSubmit);