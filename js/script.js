const container = document.querySelector('.container');
const total = 21;
const radius = 320;

const chapters = [
  {
    heroName: "",
    chapterTitle: "Set the Table",
    achievements: [
      "Сформировать ясные, письменные цели",
      "Определить приоритеты",
      "Создать план действий"
    ]
  },
  {
    heroName: "",
    chapterTitle: "Plan Every Day in Advance",
    achievements: [
      "Планировать задачи накануне",
      "Оптимизировать время",
      "Избегать спешки"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Apply the 80/20 Rule",
    achievements: [
      "Делай важное в первую очередь",
      "Определи главный 'frog'",
      "Не отвлекайся на мелочи"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Consider the Consequences",
    achievements: [
      "Думай о долгосрочных результатах",
      "Направляй усилия правильно"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Practice Creative Procrastination",
    achievements: [
      "Откладывай второстепенное",
      "Говори 'нет' малозначимым задачам"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Use ABCDE Method",
    achievements: [
      "Расставляй приоритеты по методу ABCDE",
      "Работай с задачами категории A"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Focus on Key Result Areas",
    achievements: [
      "Развивай ключевые зоны ответственности",
      "Оцени и улучшай слабые места"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Law of Three",
    achievements: [
      "Определи 3 главные задачи",
      "Уделяй им основное время"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Prepare Thoroughly",
    achievements: [
      "Подготовь всё заранее",
      "Убери хаос вокруг себя"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "One Step at a Time",
    achievements: [
      "Разбей задачи на маленькие шаги",
      "Двигайся постепенно"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Upgrade Skills",
    achievements: [
      "Учись систематически",
      "Внедряй обратную связь"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Use Your Talents",
    achievements: [
      "Используй свои сильные стороны",
      "Максимизируй потенциал"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Remove Constraints",
    achievements: [
      "Устраняй препятствия",
      "Определи ключевые ограничения"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Pressure Yourself",
    achievements: [
      "Ставь жёсткие сроки",
      "Используй дедлайны как мотивацию"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Personal Energy",
    achievements: [
      "Поддерживай здоровье и энергию",
      "Правильно питайся и отдыхай"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Motivate Yourself",
    achievements: [
      "Визуализируй цели",
      "Используй аффирмации"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Kill Tech Noise",
    achievements: [
      "Минимизируй отвлечения",
      "Ограничь соцсети и уведомления"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Slice Tasks",
    achievements: [
      "Делай задачи по частям",
      "Используй метод 'салями'"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Time Blocks",
    achievements: [
      "Выделяй большие блоки для работы",
      "Отключай всё лишнее"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Sense of Urgency",
    achievements: [
      "Делай всё сразу",
      "Запускай продуктивный поток"
    ]
  },
  {
    heroName: "Клава Така-то",
    chapterTitle: "Single Handle",
    achievements: [
      "Работай над одной задачей до конца",
      "Не переключайся между делами"
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








