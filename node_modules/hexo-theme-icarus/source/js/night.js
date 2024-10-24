(function () {
    var isNight = localStorage.getItem('night');
    var nightNav;
    var nightIcon;

    function applyNight(value) {
        if (value.toString() === 'true') {
            document.body.classList.remove('light');
            document.body.classList.add('night');
            document.documentElement.style.backgroundColor = 'rgba(40, 44, 52, 1)'; // 夜间模式背景色
            if (nightNav) {
                nightNav.setAttribute('title', 'Light Mode');
                nightNav.blur();
            }
        } else {
            document.body.classList.remove('night');
            document.body.classList.add('light');
            document.documentElement.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // 白天模式背景色
            if (nightNav) {
                nightNav.setAttribute('title', 'Dark Mode');
                nightNav.blur();
            }
        }
    }

    function findNightNav() {
        nightNav = document.getElementById('night-nav');
        nightIcon = document.getElementById('night-icon');
        if (!nightNav || !nightIcon) {
            setTimeout(findNightNav, 100);
        } else {
            nightNav.addEventListener('click', switchNight);
            if (isNight === null) {
                isNight = false;
            }
            applyNight(isNight);
        }
    }

    function switchNight() {
        isNight = isNight ? isNight.toString() !== 'true' : true;
        applyNight(isNight);
        localStorage.setItem('night', isNight);
    }

    findNightNav();
}());
