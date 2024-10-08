const uploadImgCreateForm = document.querySelector('.ticket--img-container');

const root = document.documentElement;

const aplicarTema = () => {
    if (localStorage.getItem('tema') == 'dark'){
        root.style.setProperty('--bg-light-white', '#1F2937');
        root.style.setProperty('--bg-light-gray', '#111827');
        root.style.setProperty('--contour-color', '#23333D');
        root.style.setProperty('--box-shadow-color', '#EBEBEB30');
        root.style.setProperty('--bg-contrast-color', '#EBEBEB');
        
        root.style.setProperty('--main-color', '#0095FF');
        root.style.setProperty('--main-color-highlight', '#0095FFd0');
        root.style.setProperty('--main-contrast', '#D000FF');
        root.style.setProperty('--main-contrast-highlight', '#D000FFa1');
        root.style.setProperty('--main-color-nav', '#665D4F');
        root.style.setProperty('--main-color-nav-contrast', '#817666');

        root.style.setProperty('--font-base-color', '#FCFCFC');
        root.style.setProperty('--font-contrast-dark', '#23333D');
        root.style.setProperty('--font-base-contrast', '#7D3EE6');
        root.style.setProperty('--font-btn-white', '#FCFCFC');

        uploadImgCreateForm.classList.add('filter-contrast');

    }else{
        root.style.setProperty('--bg-light-white', '#FAFAFA');
        root.style.setProperty('--bg-light-gray', '#EBEBEB');
        root.style.setProperty('--contour-color', '#23333D');
        root.style.setProperty('--box-shadow-color', '#23333D49');
        root.style.setProperty('--bg-contrast-color', '#23333D');
        root.style.setProperty('--btn-white-contrast', '#dadadaa3');

        root.style.setProperty('--main-color', '#0095FF');
        root.style.setProperty('--main-color-highlight', '#0095FFd0');
        root.style.setProperty('--main-contrast', '#D000FF');
        root.style.setProperty('--main-contrast-highlight', '#D000FFa1');
        root.style.setProperty('--main-color-nav', '#0095FF');
        root.style.setProperty('--main-color-nav-contrast', '#31a8fe');
        
        root.style.setProperty('--font-base-color', '#23333D');
        root.style.setProperty('--font-contrast-dark', '#FCFCFC');
        root.style.setProperty('--font-base-contrast', '#7D3EE6');
        root.style.setProperty('--font-btn-white', '#FCFCFC');
    }
}

aplicarTema();

document.addEventListener('temaCambiado', aplicarTema);