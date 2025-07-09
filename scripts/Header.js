// Объявление класса Header, который управляет поведением шапки сайта (header)
class Header {
    // Объект с CSS-селекторами, используемыми в классе
    selectors = {
      root: '[data-js-header]',                     // Корневой элемент шапки
      overlay: '[data-js-header-overlay]',          // Элемент оверлея (затемнение фона)
      burgerButton: '[data-js-header-burger-button]'// Кнопка-бургер (для мобильного меню)
    };
  
    // Объект с CSS-классами, описывающими состояния элементов
    stateClasses = {
      isActive: 'is-active', // Класс активного состояния (например, для отображения меню)
      isLock: 'is-lock',     // Класс блокировки прокрутки документа
    };
  
    // Конструктор вызывается при создании экземпляра класса
    constructor() {
      // Находим корневой элемент шапки
      this.rootElement = document.querySelector(this.selectors.root);
  
      // Находим элемент оверлея внутри шапки
      this.overlayElement = this.rootElement.querySelector(
        this.selectors.overlay
      );
  
      // Находим кнопку-бургер внутри шапки
      this.burgerButtonElement = this.rootElement.querySelector(
        this.selectors.burgerButton
      );
  
      // Привязываем обработчики событий
      this.bindEvents();
    }
  
    // Метод-обработчик клика по кнопке-бургеру
    onBurgerButtonClick = () => {
      // Переключаем класс активности у кнопки-бургера
      this.burgerButtonElement.classList.toggle(this.stateClasses.isActive);
  
      // Переключаем класс активности у оверлея
      this.overlayElement.classList.toggle(this.stateClasses.isActive);
  
      // Переключаем блокировку прокрутки у всего документа
      document.documentElement.classList.toggle(this.stateClasses.isLock);
    };
  
    // Метод для привязки событий
    bindEvents() {
      // Добавляем слушатель клика на кнопку-бургер
      this.burgerButtonElement.addEventListener(
        'click',
        this.onBurgerButtonClick
      );
    }
  }
  
  // Экспорт класса для использования в других модулях
  export default Header;
  