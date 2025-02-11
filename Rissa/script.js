const gridItems = document.querySelectorAll('.grid-item');
const modal = document.querySelector('.profile-modal');
const closeBtn = document.querySelector('.close-btn');
const profileImage = document.getElementById('profile-image');
const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');

gridItems.forEach(item => {
  item.addEventListener('click', () => {
    const name = item.getAttribute('data-name');
    const image = item.getAttribute('data-image');
    let bio = item.getAttribute('data-bio').trim();

    profileName.textContent = name;
    profileImage.src = image;

    if (bio.startsWith('@')) {
      const username = bio.substring(1);
      profileBio.innerHTML = `<a href="https://www.instagram.com/${username}" target="_blank" style="text-decoration: none; color: #4a90e2;">${bio}</a>`;
    } else {
      profileBio.textContent = bio;
    }

    modal.classList.add('active');
  });
});

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
  }
});