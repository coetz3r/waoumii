// Theme toggle and persistence
(function(){
  const docEl = document.documentElement;
  const pill = document.getElementById('modePill');
  if(!pill) return; // nothing to do if the pill isn't present

  const label = pill.querySelector('.label');

  // Load saved preference
  const saved = localStorage.getItem('waoumii-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialDark = saved ? saved === 'dark' : prefersDark;

  function apply(dark){
    if(dark){
      docEl.classList.add('dark');
      label.textContent = 'Light Mode';
      pill.setAttribute('aria-pressed','true');
    } else {
      docEl.classList.remove('dark');
      label.textContent = 'Dark Mode';
      pill.setAttribute('aria-pressed','false');
    }
  }

  // initialize
  apply(initialDark);

  // Toggle on click
  pill.addEventListener('click',()=>{
    const dark = docEl.classList.toggle('dark');
    apply(dark);
    localStorage.setItem('waoumii-theme', dark ? 'dark' : 'light');
  });

  // keyboard accessibility
  pill.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' '){
      e.preventDefault();
      pill.click();
    }
  });
})();
