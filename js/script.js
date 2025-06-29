const container = document.querySelector('.container');
const total = 21;
const radius = 320;

const chapters = [
  {
    heroName: "",
    chapterTitle: "Накрийте на стіл",
    achievements: [
      "Сформировать ясные, письменные цели",
      "Определить приоритеты",
      "Создать план действий"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Заздалегідь плануйте кожен день",
    achievements: [
      "Планировать задачи накануне",
      "Оптимизировать время",
      "Избегать спешки"
    ]
  },
  {
    heroName: "",
    chapterTitle: "До всього застосовуйте правило 80/20",
    achievements: [
      "Делай важное в первую очередь",
      "Определи главный 'frog'",
      "Не отвлекайся на мелочи"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Думайте про наслідки",
    achievements: [
      "Думай о долгосрочных результатах",
      "Направляй усилия правильно"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Займайтесь творчою прокрастинацією",
    achievements: [
      "Откладывай второстепенное",
      "Говори 'нет' малозначимым задачам"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Постійно використовуйте метод АБВГД",
    achievements: [
      "Расставляй приоритеты по методу ABCDE",
      "Работай с задачами категории A"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Зосередьтесь на сферах ключових результатів",
    achievements: [
      "Развивай ключевые зоны ответственности",
      "Оцени и улучшай слабые места"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Скористайтеся законом трьох",
    achievements: [
      "Определи 3 главные задачи",
      "Уделяй им основное время"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Перед початком ретельно готуйтесь",
    achievements: [
      "Щоб перемогти прокрастинацію, ще до початку роботи майте все що може знадобитись, та зробить зручне робоче місце",
      "Починайте працювати, гальма у вашему розвітку це страх невдачи, зробить перші кроки, а потім коррегуйте те що вийшло, тому що перша спроба завжди комом",
      "Перед початком праці прийміть робочу позу(не розслаблену) та починайте працювати поки не закінчите те що повинні зробити."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Рухайтесь від бочки до бочки",
    achievements: [
      "Щоб реалізувати великий проект треба розділити його на невеликі досяжні кроки",
      "Рухайся поступово"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Удосконалюйте свої ключові навички",
    achievements: [
      "Учись систематически",
      "Внедряй обратную связь"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Використовуйте свої особливі таланти",
    achievements: [
      "Используй свои сильные стороны",
      "Максимизируй потенциал"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Визначте основні перепони",
    achievements: [
      "Знайди ключову перепону.",
      "80/20 – більшість перепон у тобі самому",
      "Усунення головної перепони - стрибок уперед."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Тисніть на себе",
    achievements: [
      "Не чекай мотивації – сам себе змушуй",
      "Став дедлайни, ніби завтра вирушаєш у подорож",
      "Працюй трохи краще, ніж вимагають"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Максимізуйте свої особисті сили",
    achievements: [
      "Коли ви перепрацьовуєте, то не викладаєтесь на повну",
      "Працюйте у своєму темпі",
      "Дбайте про своє фізичне здоров’я"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Мотивуйте себе діяти",
    achievements: [
      "Контролюйте свій внутрішній діалог",
      "Розвивайте позитивне мислення",
      "Станьте своєю групою підтримки"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Позбудьтесь технологічного рабства",
    achievements: [
      "Минимизируй отвлечения",
      "Ограничь соцсети и уведомления"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Діліть завдання на частини",
    achievements: [
      "Делай задачи по частям",
      "Используй метод 'салями'"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Створюйте великі блоки часу",
    achievements: [
      "Продуктивне виконання завдання передбачає заздалегідь спланованого часу",
      "Пріоритетність виконання завдань вибудовується за ступенем важливості та терміновості.",
      "Подорожуючи літаком, потягом, відводьте якомога більше часу для кращої результативності виконання завдання."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Розвиньте відчуття крайньої необхідності",
    achievements: [
      "Делай всё сразу",
      "Запускай продуктивный поток"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Виконуйте завдання по одному",
    achievements: [
      "Зосередься на одному завданні — починай і працюй над ним без перерв, поки не завершиш повністю.",
      "Уникай багатозадачності — вона збільшує час виконання й знижує продуктивність",
      "Самодисципліна — ключ до успіху — вона формує характер, підвищує самооцінку та ефективність."
    ]
  }
];

const colors = ["#f44336", "#e91e63", "#9c27b0", "#3f51b5", "#2196f3", "#009688", "#4caf50", "#8bc34a", "#ffc107", "#ff9800"];

let currentIndex = 0;

const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');

const frog = document.querySelector('.frog');

let angleOrbs = 0;
let angleFrog = 0;
// Сделаем вращение медленнее
const speedOrbs = 0.003;  // было 0.01, уменьшил в ~3 раза
const speedFrog = 0.005;  // было 0.016, уменьшил примерно в 3 раза

// Создаем шарики по кругу
for(let i = 0; i < total; i++) {
  const orb = document.createElement('div');
  orb.classList.add('orb');
  orb.textContent = i + 1;
  orb.dataset.index = i;
  orb.style.backgroundColor = colors[i % colors.length];
  container.appendChild(orb);

  orb.addEventListener('click', () => showModal(i));
}

const orbs = document.querySelectorAll('.orb');

function updatePositions() {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const orbRadius = radius;

  orbs.forEach((orb, i) => {
    const angle = angleOrbs + (2 * Math.PI * i) / total;
    const x = centerX + orbRadius * Math.cos(angle) - 30;
    const y = centerY + orbRadius * Math.sin(angle) - 30;
    orb.style.left = `${x}px`;
    orb.style.top = `${y}px`;
  });

  frog.style.left = `${centerX}px`;
  frog.style.top = `${centerY}px`;
  frog.style.transform = `translate(-50%, -50%) rotate(${angleFrog}rad)`;

  angleOrbs += speedOrbs;
  angleFrog += speedFrog;

  requestAnimationFrame(updatePositions);
}

updatePositions();

function showModal(index) {
  currentIndex = index;
  const chapter = chapters[index];
  modalTitle.innerHTML = `
    <div style="text-align:center;">
      <div style="font-weight:bold; font-size: 1.5em; margin-bottom: 6px;">Глава ${index + 1}</div>
      <div style="text-transform: uppercase; font-weight: 700; font-size: 1.3em; margin-bottom: 4px;">${chapter.heroName}</div>
      <div style="font-style: italic; font-size: 1.1em;">${chapter.chapterTitle}</div>
    </div>`;

  const listItems = chapter.achievements.map(item => `<li>${item}</li>`).join('');
  modalText.innerHTML = `<ul>${listItems}</ul>`;

  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}

document.getElementById('prev-btn').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + chapters.length) % chapters.length;
  showModal(currentIndex);
});

document.getElementById('next-btn').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % chapters.length;
  showModal(currentIndex);
});

