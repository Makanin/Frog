const container = document.querySelector('.container');
const total = 21;
const radius = 320;

const chapters = [
  {
    heroName: "",
    chapterTitle: "Накрийте на стіл",
    achievements: [
      "Чіткість цілей — ключ до продуктивності.Люди, які досягають більшого, завжди ясно розуміють, чого прагнуть. Розмитість цілей — головна причина прокрастинації.",
      "Семикроковий метод постановки цілей.Визначення цілі, запис, встановлення термінів, створення списку дій, складання плану, негайний старт і щоденне просування до мети — це перевірений шлях до результату.",
      "Записані цілі мають силу.Лише 3% людей записують свої цілі, і саме вони досягають найкращих результатів. Письмове формулювання мотивує, активізує мислення та бореться з прокрастинацією."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Заздалегідь плануйте кожен день",
    achievements: [
      "Планування економить час і енергію.Кожна хвилина, витрачена на планування, економить до десяти хвилин у реалізації. Це один із найефективніших способів підвищити продуктивність.",
      "Різні списки — для різних рівнів планування.Варто мати довгостроковий (основний), місячний, тижневий та щоденний список справ. Це дає відчуття структури, прогресу і контролю.",
      "Правило 10/90.Перші 10% часу, витрачені на планування, визначають ефективність наступних 90% виконання. Добре продуманий план робить роботу значно легшою."
    ]
  },
  {
    heroName: "",
    chapterTitle: "До всього застосовуйте правило 80/20",
    achievements: [
      "Згідно з принципом Вільфредо Парето: 20 % вашої діяльності дадуть 80 % результатів",
      "Люди завжди відкладають важкі але важливі справи й займаються дрібницями. Щоб досягти успіху, вам потрібно починати день із найважливішло завдання.",
      "Початок роботи над важливими справами заряджає мотивацією і допомагає подолати лінь. Якщо зосереджуватись на головному й не витрачати час на дрібниці, ви отримаєте більше задоволення від роботи."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Думайте про наслідки",
    achievements: [
      "На цьому тижні виділи 30 хвилин, щоб прописати, як твої поточні дії вплинуть на тебе через 1 рік. Повертайся до цього аналізу щотижня.Успішні люди мають чітку орієнтацію на майбутнє. Вони міркують наперед на п’ять, десять або й двадцять років",
      "Виконати всі завдання раніше на 20% за поставлений дедлайн, і ви побачите наскільки розслабленими почуватиметесь і наскільки краще виконуватимете роботу.",
      "Щоранку протягом 7 днів починати робочий день із відповіді на ці 3 запитання.1.«Які дії мають для мене найвищу цінність?» 2.«Що такого можу зробити я і ніхто, окрім мене, що дійсно матиме велике значення?» 3. «Як найкраще використати свій час саме зараз?»"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Займайтесь творчою прокрастинацією",
    achievements: [
      "Визначте свої пріоритети! Це основа, база, фундамент",
      "Чітко говоріть (НІ)всьому, що не має великої цінності для вашого часу.",
      "Делегуйте все, що можна делегувати і позбавляйтеся лишніх завдань."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Постійно використовуйте метод АБВГД",
    achievements: [
      "Викладіть на папері всі жаби. А1 - це найбридкіша, але і найважливіша жаба. Д6 - жаба, яку з легкістю можна (відпустити на волю).",
      "Ми не приступаємо до букви Б, поки не зробимо букву А. Так само В, ми робимо тільки після виконання Б..",
      "Не думайте - робіть. Як тільки ви виписали всі свої АБВГД-завдання, то відразу ж приступайте до виконання А1."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Зосередьтесь на сферах ключових результатів",
    achievements: [
      "Чітке розуміння посадових обов’язків: Знай свої ключові завдання, обов’язки та очікувані результати. Це підвищує ефективність і впливає на кар’єрне зростання.",
      "Оцінка сильних і слабких сторін: Регулярно аналізуй свої навички. Оціни кожну сферу за шкалою від 1 до 10. Найслабша з них обмежує твій загальний потенціал.",
      "Прокрастинація через слабкі сторони: Люди схильні уникати завдань, пов’язаних зі своїми слабкими місцями — саме це гальмує розвиток."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Скористайтеся законом трьох",
    achievements: [
      "Цінність внеску = винагорода: Фінансова та емоційна винагорода прямо залежить від цінності твоєї роботи. 90% результату — це три головні завдання. Зосередься на них.",
      "Метод 30 секунд: Швидко запиши три головні цілі життя. Підсвідомість видасть найголовніше. Метод працює і для щоденних цілей.",
      "Правило тайм-менеджменту: Має значення не лише кількість, а й якість часу — на роботі та вдома. Будь продуктивним і присутнім.",
      "Баланс між роботою і життям: Пам’ятай про work-life balance. Встановлюй пріоритети на роботі, щоб мати повноцінне життя поза нею. Помірність — ключ до гармонії."
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
      "Єдиним насправді дієвим способом досягнення успіху є давати краще й більше, ніж від вас очікується, хоч би в чому полягало ваше завдання.",
      "Чим краще ти виконуєш важливі завдання, тим більше у тебе мотивації, енергії та бажання працювати. Постійне навчання додає впевненості в собі.",
      "Визнач компетенції, які тобі знадобляться в майбутньому, щоб стати найкращим у своїй сфері. Постав мету, розроби план дій і щодня розвивайся у цих напрямах."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Використовуйте свої особливі таланти",
    achievements: [
      "Виконуй свою роботу з натхненням — не лише сумлінно, а й з душею. Саме «душа» часто важить більше за досконалість.Використовуй таланти та здібності, які роблять тебе унікальним і цінним.",
      "Ти можеш втратити дім, роботу чи заощадження — але доки маєш свої компетенції та досвід, можеш усе відбудувати",
      "Подумай, що ти робиш природньо добре — саме ці здібності вказують, у чому ти можеш бути справді видатним. Зосереджуйся на тому, що робиш краще за інших."

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
      " Не дозволяйте пристроям диктувати ваш распорядок та увагу",
      "Використовуйте гаджети для підтримки ваших цілей, а не для розсіювання уваги.",
      "Завдяки свідомому підходу можна отримати більше вільного часу та підвищити особисте задоволення від життя."
    ]
  },
  {
    heroName: "",
    chapterTitle: "Діліть завдання на частини",
    achievements: [
      "Техніка «шматочок салямі»: За цим методом ви ділите роботу на частинки і беретесь до виконання одного шматка за раз. Це психологічно легше (робити по троху) аніж боятися гігантського проекту. Почавши з малого, легше втягнутись і продовжити.",
      "Вимагайте від себе закінчувати роботу: Ми маємо внутрішню потребу завершувати почате. Коли ви доводите справу до кінця, в мозку виділяються ендорфіни, зростає відчуття сили та задоволення. Чим більше завдання, тим більший прилив енергії після його завершення.'",
      "Техніка «швейцарський сир»: Якщо не можете одразу зосередитись на всьому завданні — «пробийте в ньому дірку». Присвятіть йому хоча б 5–10 хвилин, а потім переключіться. Це дозволяє почати, уникнути прокрастинації і поступово включитись у процес."
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
      "Починайте діяти негайно — не чекайте ідеального моменту, починайте з того, що маєте.",
      "Стан «куражу» приходить через зосереджену роботу над важливим завданням — саме він дає максимум продуктивності та натхнення.",
      " Швидкий темп і дія створюють успіх — чим більше дієте, тим більше енергії, впевненості й результатів."
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

