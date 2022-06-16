import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styles } from './styles';

@customElement('ar-modal')
export class ArModal extends LitElement {
    static styles = styles;

    @property()
    qrTitle = 'Default qr title Text';

    @property()
    qrText = 'Default qr Text';

    @property()
    qrSize = 300;

    render() {
        return html`
            <div class="ar-button-modal">
                <div class="modal-inner" role="dialog">  
                    <div class="ar-modal-header">
                        <h2 class="ar-modal-content">${this.qrTitle}</h2> 
                        <button type="button" class="button-close" @click="${this.closeModalWindow}">✕</button>
                    </div>
                    <section class="ar-modal-body">
                        <div class="qr-element"></div>
                        <p class="ar-modal-content" style="{ width: ${this.qrSize}px }">
                            ${this.qrText}
                        </p>
                    </section>
                    <div class="ar-modal-footer">
                        <p>
                            Powered by
                            <a href="https://yago.cloud/">
                                Yago
                                <img src="https://yago.cloud/static/yago/img/yago_icon.png" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        `;
    }

    closeModalWindow(): void {
        const event = new CustomEvent('modal-close', { bubbles: true, });
        this.dispatchEvent(event);
    }
}