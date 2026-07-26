document.addEventListener('DOMContentLoaded', () => {
    const menuOverlay = document.getElementById('menu-overlay');
    const minimizedIcon = document.getElementById('minimized-icon');
    const btnMinimize = document.getElementById('btn-minimize');
    const btnClose = document.getElementById('btn-close');
    const btnActivate = document.getElementById('btn_activate');
    const toast = document.getElementById('toast');
    const fpsDisplay = document.getElementById('fps-display');
    
    const cbOpenLineAim = document.getElementById('cb_open_line_aim');
    const crosshairContainer = document.getElementById('crosshair-container');

    // Make entire feature item clickable for the checkboxes
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent double triggering if clicked directly on input or slider
            if(e.target.tagName !== 'INPUT' && e.target.tagName !== 'SPAN') {
                const checkbox = item.querySelector('input[type="checkbox"]');
                checkbox.checked = !checkbox.checked;
                // Dispatch change event to trigger listeners
                checkbox.dispatchEvent(new Event('change'));
            }
        });
    });

    // Handle Open Line Aim
    cbOpenLineAim.addEventListener('change', (e) => {
        if (e.target.checked) {
            crosshairContainer.classList.remove('hidden');
        } else {
            crosshairContainer.classList.add('hidden');
        }
    });

    // Minimize and Maximize logic
    btnMinimize.addEventListener('click', () => {
        menuOverlay.classList.add('hidden');
        minimizedIcon.classList.remove('hidden');
    });

    minimizedIcon.addEventListener('click', () => {
        minimizedIcon.classList.add('hidden');
        menuOverlay.classList.remove('hidden');
    });

    // Close totally (simulated by hiding both)
    btnClose.addEventListener('click', () => {
        menuOverlay.classList.add('hidden');
        minimizedIcon.classList.add('hidden');
        // Reset video to play just as background
    });

    // Activate button logic
    btnActivate.addEventListener('click', () => {
        if (btnActivate.textContent === 'ACTIVATE') {
            btnActivate.textContent = 'RUNNING';
            btnActivate.classList.add('active');
            
            // Show toast
            toast.classList.remove('hidden');
            // Remove and re-add animation
            toast.style.animation = 'none';
            setTimeout(() => {
                toast.style.animation = 'fadeInOut 3s forwards';
            }, 10);
            
            setTimeout(() => {
                toast.classList.add('hidden');
            }, 3000);
        } else {
            btnActivate.textContent = 'ACTIVATE';
            btnActivate.classList.remove('active');
        }
    });

    // Fake FPS updater (to simulate Android service)
    setInterval(() => {
        // Random number between 58 and 62
        const fps = Math.floor(Math.random() * (62 - 58 + 1)) + 58;
        fpsDisplay.textContent = `FPS: ${fps}`;
    }, 800);
});
