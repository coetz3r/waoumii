// ============================================
// SETTINGS PANEL UI
// ============================================

function toggleSettings() {
    document.getElementById('settings-panel').classList.toggle('hidden');
    document.getElementById('settings-backdrop').classList.toggle('hidden');
}

function closeSettings() {
    document.getElementById('settings-panel').classList.add('hidden');
    document.getElementById('settings-backdrop').classList.add('hidden');
}

// ============================================
// FONT SIZE
// ============================================

function setFontSize(size) {
    // Update UI buttons
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    const targetBtn = document.getElementById(size.toLowerCase() + '-btn');
    if (targetBtn) targetBtn.classList.add('active');

    // Apply size via data attribute
    document.body.setAttribute('data-size', size);
    
    // Save preference
    localStorage.setItem('preferredSize', size);
}

// ============================================
// DARK/LIGHT MODE
// ============================================

function setMode(mode) {
    const isDark = (mode === 'dark');
    
    // Toggle dark mode class
    document.body.classList.toggle('dark-mode', isDark);
    
    // Update mode buttons
    document.getElementById('light-btn').classList.toggle('inactive', isDark);
    document.getElementById('dark-btn').classList.toggle('active', isDark);

    // Update all icons
    updateIcons(isDark);
    
    // Save preference
    localStorage.setItem('darkMode', isDark);
}

function updateIcons(isDark) {
    const suffix = isDark ? 'dark' : 'light';
    
    // Settings icon (FIXED: changed from logo-img to settings-img)
    const settingsImg = document.getElementById('settings-img');
    if (settingsImg) settingsImg.src = `./assets/img/icon/settings-${suffix}.svg`;
    
    // Main logo
    const mainLogo = document.getElementById('main-logo');
    if (mainLogo) mainLogo.src = `./assets/img/icon/logo-${suffix}.svg`;
    
    // Hero background
    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        heroImg.classList.remove('hero-light', 'hero-dark');
        heroImg.classList.add(`hero-${suffix}`);
    }
    
    // Feature icons
    const featureIcons = ['power', 'pneumatic', 'robotics'];
    featureIcons.forEach(icon => {
        const el = document.getElementById(`icon-${icon}`);
        if (el) el.src = `./assets/img/icon/${icon === 'pneumatic' ? 'pneumatics' : icon}-${suffix}.svg`;
    });
    
    // Bottom nav icons
    const navIcons = ['lab', 'shop', 'news', 'company'];
    navIcons.forEach(icon => {
        const el = document.getElementById(`icon-${icon}`);
        if (el) el.src = `./assets/img/icon/${icon}-${suffix}.svg`;
    });
}

// ============================================
// CONTRAST SELECTOR
// ============================================

function setContrast(level) {
    document.querySelectorAll('.contrast-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(level + '-btn').classList.add('active');
    document.body.setAttribute('data-contrast', level);
    localStorage.setItem('preferredContrast', level);
}




// ============================================
// THEME SELECTOR
// ============================================


// Toggle theme dropdown visibility
function toggleThemeDropdown() {
    const dropdown = document.getElementById('theme-dropdown');
    dropdown.classList.toggle('hidden');
}

// Change theme
function changeTheme(theme) {
    // Update the displayed theme name
    const themeNames = {
        'theme1': 'Theme 1',
        'theme2': 'Theme 2',
        'theme3': 'Theme 3',
        'theme4': 'Theme 4',
        'theme5': 'Theme 5'

    };
    
    document.getElementById('current-theme').textContent = themeNames[theme];
    
    // Remove active class from all options
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => option.classList.remove('active'));
    
    // Add active class to selected option
    event.target.closest('.theme-option').classList.add('active');
    
    // Close the dropdown
    document.getElementById('theme-dropdown').classList.add('hidden');
    
    // Apply the theme (add your theme logic here)
    applyTheme(theme);
}

// Apply theme to the page
function applyTheme(theme) {
    // Remove all theme classes
    document.body.classList.remove('theme-theme1', 'theme-theme2', 'theme-theme3', 'theme-theme4', 'theme-theme5');
    
    // Add the selected theme class
    document.body.classList.add('theme-' + theme);
    
    // Optional: Save to localStorage
    localStorage.setItem('selectedTheme', theme);
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const themeSection = document.querySelector('.theme-section');
    const themeDropdown = document.getElementById('theme-dropdown');
    
    if (themeSection && !themeSection.contains(event.target)) {
        themeDropdown.classList.add('hidden');
    }
});

// ============================================
// LANGUAGE
// ============================================

function toggleLanguageDropdown() {
    document.getElementById('language-dropdown').classList.toggle('hidden');
}

function changeLanguage(code, name, flag) {
    const curLang = document.getElementById('current-language');
    const curFlag = document.getElementById('current-flag');
    if (curLang) curLang.innerText = name;
    if (curFlag) curFlag.innerText = flag;

    document.querySelectorAll('.language-option').forEach(opt => {
        opt.classList.toggle('active', opt.querySelector('.language-name').innerText === name);
    });

    toggleLanguageDropdown();
    document.body.setAttribute('lang', code);
    localStorage.setItem('selectedLanguage', code);
}

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener('DOMContentLoaded', () => {
    // Load Size
    const savedSize = localStorage.getItem('preferredSize') || 'M';
    setFontSize(savedSize);

    // Load Mode
    const savedMode = localStorage.getItem('darkMode') === 'true' ? 'dark' : 'light';
    setMode(savedMode);



    // Load Theme
// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('selectedTheme') || 'theme1';
    applyTheme(savedTheme);
    
    // Update the display to show the saved theme
    const themeNames = {
        'theme1': 'Theme 1',
        'theme2': 'Theme 2',
        'theme3': 'Theme 3',
        'theme4': 'Theme 4',
        'theme5': 'Theme 5'
    };
    document.getElementById('current-theme').textContent = themeNames[savedTheme];
    
    // Set the active state on the correct theme option
    const options = document.querySelectorAll('.theme-option');
    options.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('onclick').includes(savedTheme)) {
            option.classList.add('active');
        }
    });
});






    //const themeSelect = document.getElementById('theme-toggle-bg');
   // const savedTheme = localStorage.getItem('selected-theme') || 'theme1';
   // if (themeSelect) {
   //     themeSelect.value = savedTheme;
  //      document.body.setAttribute('data-theme', savedTheme);
  //      themeSelect.addEventListener('change', (e) => {
   //         document.body.setAttribute('data-theme', e.target.value);
   //         localStorage.setItem('selected-theme', e.target.value);
   //     });
  //  }

    // Load Contrast
    const savedContrast = localStorage.getItem('preferredContrast') || 'low';
    setContrast(savedContrast);
    
    // Load Language
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    document.body.setAttribute('lang', savedLang);
});