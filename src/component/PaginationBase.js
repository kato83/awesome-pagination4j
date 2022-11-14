export class PaginationBase extends HTMLElement {
    constructor() {
        super();

        const totalLength = this.getAttribute('total-length')
        this.totalLength = Number.parseInt(totalLength);

        const currentPage = this.getAttribute('current-page');
        this.currentPage = Math.max(Number.parseInt(currentPage) || 1, 1);

        const limit = this.getAttribute('limit');
        this.limit = Math.max(Number.parseInt(limit) || 10, 1);

        this.render();
    };

    render() {
    };

    static get observedAttributes() {
        return ['total-length', 'current-page', 'limit'];
    };

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'total-length':
                this.totalLength = Number.parseInt(newValue);
                break;
            case 'current-page':
                this.currentPage = Number.parseInt(newValue);
                break;
            case 'limit':
                this.limit = Number.parseInt(newValue);
                break;
        }
        this.render();
    };
}