import { Popup } from './Popup.js';
import { popupPicTitle, popupPicExpand } from '../utils/constants.js';

export class PopupWithImage extends Popup {
  open(name, link) {
    this._selectorPopup.classList.add('popup_opened');
    popupPicTitle.textContent = name;
    popupPicExpand.src = link;
  }
}
