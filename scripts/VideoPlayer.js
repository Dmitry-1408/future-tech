// Селектор корневого элемента видеоплеера
const rootSelector = '[data-js-video-player]';

// Класс управления одним видеоплеером
class VideoPlayer {
  // Селекторы дочерних элементов внутри видеоплеера
  selectors = {
    root: rootSelector,                                // Корневой элемент плеера
    video: '[data-js-video-player-video]',             // Сам видеоэлемент <video>
    panel: '[data-js-video-player-panel]',             // Панель с кнопкой воспроизведения
    playButton: '[data-js-video-player-play-button]',  // Кнопка воспроизведения
  };

  // Классы состояний
  stateClasses = {
    isActive: 'is-active', // CSS-класс, показывающий активность панели
  };

  // Конструктор получает DOM-элемент и инициализирует плеер
  constructor(rootElement) {
    this.rootElement = rootElement; // Корневой элемент плеера
    this.videoElement = this.rootElement.querySelector(this.selectors.video);       // Видеоэлемент
    this.panelElement = this.rootElement.querySelector(this.selectors.panel);       // Панель управления
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton); // Кнопка play
    this.bindEvents(); // Привязка обработчиков событий
  }

  // Обработчик клика по кнопке воспроизведения
  onPlayButtonClick = () => {
    this.videoElement.play();                            // Запуск видео
    this.videoElement.controls = true;                   // Показываем встроенные контролы
    this.panelElement.classList.remove(this.stateClasses.isActive); // Скрываем панель
  };

  // Обработчик события паузы видео
  onVideoPause = () => {
    this.videoElement.controls = false;                  // Скрываем встроенные контролы
    this.panelElement.classList.add(this.stateClasses.isActive); // Показываем панель
  };

  // Метод для привязки событий к DOM-элементам
  bindEvents() {
    this.playButtonElement.addEventListener('click', this.onPlayButtonClick); // Клик по кнопке Play
    this.videoElement.addEventListener('pause', this.onVideoPause);           // Событие паузы
  }
}

// Класс для инициализации всех видеоплееров на странице
class VideoPlayerCollection {
  constructor() {
    this.init(); // Инициализация при создании экземпляра
  }

  // Метод находит все элементы с data-js-video-player и создает для них экземпляры VideoPlayer
  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new VideoPlayer(element); // Создание видеоплеера для каждого DOM-элемента
    });
  }
}

// Экспорт класса VideoPlayerCollection для использования в других модулях
export default VideoPlayerCollection;
