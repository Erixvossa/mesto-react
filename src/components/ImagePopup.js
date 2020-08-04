import React from 'react';

class ImagePopup extends React.Component {
  
  render() {
    return (
      <div className={this.props.card ? "popup popup-img" : "popup popup_type_closed popup-img"}>
        <div className="popup-img__container">
          <button className="popup-img__button-close popup__button-close" type="button" onClick={this.props.onClose} aria-label="Закрыть окно."></button>
          <img className="popup-img__image" alt={this.props.name} src={this.props.card}/>
          <p className="popup-img__title">{this.props.name}</p>
        </div>
      </div>
    )
  }
}

export default ImagePopup;

