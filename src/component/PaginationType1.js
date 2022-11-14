import {PaginationBase} from './PaginationBase';

export class PaginationType1 extends PaginationBase {
    render() {
        super.render();
        const {totalLength, currentPage, limit} = this;
        const isFirst = currentPage <= 1;
        const isLast = Math.ceil((totalLength || 1) / limit) === currentPage;

        this.innerHTML = `<ul class="pagination">
                <li class="pagination__item${isFirst ? '--disable' : ''}">Prev</li>
                <li class="pagination__item">${currentPage}</li>
                <li class="pagination__item${isLast ? '--disable' : ''}">Next</li>
            </ul>`;
    };
}