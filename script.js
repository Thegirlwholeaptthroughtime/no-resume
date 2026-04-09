



const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.2
});

sections.forEach(sec => observer.observe(sec));








const skills = document.querySelectorAll('.skill-box');

skills.forEach(box => {
  const title = box.querySelector('.skill');
  const detail = box.querySelector('.skill-detail');

  title.addEventListener('click', () => {

    skills.forEach(otherBox => {
      const otherDetail = otherBox.querySelector('.skill-detail');

      if (otherBox !== box) {
        otherBox.classList.remove('active');
        otherDetail.style.maxHeight = null;
        otherDetail.style.opacity = 0;
      }
    });

    if (detail.style.maxHeight) {
      box.classList.remove('active');
      detail.style.maxHeight = null;
      detail.style.opacity = 0;
    } else {
      box.classList.add('active');
      detail.style.maxHeight = detail.scrollHeight + "px";
      detail.style.opacity = 1;
    }

  });
});





/* 다크모드 */
const toggleBtn = document.getElementById('darkToggle');

// 👉 클릭
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // 저장
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// 👉 새로고침 유지
window.addEventListener('load', () => {
  const saved = localStorage.getItem('theme');

  if (saved === 'dark') {
    document.body.classList.add('dark');
  }
});

function updateText() {
  if (document.body.classList.contains('dark')) {
    toggleBtn.textContent = 'LIGHT';
  } else {
    toggleBtn.textContent = 'DARK';
  }
}

toggleBtn.addEventListener('click', updateText);
window.addEventListener('load', updateText);






/* //스킬디테일 등장

const skills = document.querySelectorAll('.skill-box');

skills.forEach(box => {
  const title = box.querySelector('.skill');
  const detail = box.querySelector('.skill-detail');

  title.addEventListener('click', () => {

    // 👉 다른거 전부 닫기
    skills.forEach(otherBox => {
      const otherDetail = otherBox.querySelector('.skill-detail');

      if (otherBox !== box) {
        otherDetail.style.maxHeight = null;
        otherDetail.style.opacity = 0;
      }
    });

    // 👉 현재 클릭한거 토글
    if (detail.style.maxHeight) {
      detail.style.maxHeight = null;
      detail.style.opacity = 0;
    } else {
      detail.style.maxHeight = detail.scrollHeight + "px";
      detail.style.opacity = 1;
    }

  });
}); */






