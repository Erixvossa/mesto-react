import React from 'react';

class PopupWithForm extends React.Component {
  render() {
    return (
      <div className={this.props.isOpen ? `popup popup_type_${this.props.name}` : `popup_type_closed popup popup_type_${this.props.name}`}>
        <form className="popup__container" name={this.props.name} noValidate onSubmit={this.props.onSubmit}>
          <h2 className="popup__title">{this.props.title}</h2>
          {this.props.children}
          <button className="popup__submit-button popup__submit-button_enabled" type="submit">Сохранить</button>
          <button className="popup__button-close" type="button" onClick={this.props.onClose} aria-label="Закрыть окно."></button>
        </form>
      </div>
    )
  }
}

export default PopupWithForm;


