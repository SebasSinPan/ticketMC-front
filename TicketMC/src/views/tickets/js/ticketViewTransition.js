const mainTicketView = document.getElementById('container__ticket--ticket');
const completedTicketView = document.getElementById('container__completed');
const allTicketView = document.getElementById('container__history');
const resolveTicketView = document.getElementById('container__resolve');
const mainContainerFiltersApear = document.getElementById('container__ticket--ticket-filters');


const navTicketBtn = document.getElementById('nav--list-btn-main');
const navCompletedBtn = document.getElementById('nav--list-btn-completed');
const navAllBtn = document.getElementById('nav--list-btn-history');

//-----------------------------------------------------------
// Eventos de cambio de vistas según el botón del navegador
//-----------------------------------------------------------

// Página principal de tickets
navTicketBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    //Si la página principal se muestra, entonces se recarga
    if (mainTicketView.style.display !== 'none') 
    {
        mainTicketView.classList.add('upload-view');
        mainTicketView.addEventListener('animationend', ()=>{
            mainTicketView.classList.remove('upload-view');
            window.location.reload(true);
        });
    }
    //Si la página de tickets completados se muestra, se cambia de vista
    //principal (tickets abiertos)
    if (completedTicketView.style.display !== 'none')
    {
        completedTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        completedTicketView.addEventListener('animationend', ()=>{
            completedTicketView.classList.remove('fade-out-view');
            completedTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            //aparece también los filtros que se eliminan con la plantilla
            mainTicketView.classList.add('fade-in-view');
            mainTicketView.style.display = 'grid';
            
            //elimina las animaciones añadidas y recarga la página
            mainTicketView.addEventListener('animationend', ()=>{
                mainTicketView.classList.remove('fade-in-view');
                window.location.reload(true);
            },{once : true});
        },{once : true});
    }
    //Si la página de todos los tickets está abierta, entonces se cambia a
    //la vista de principal (tickets abiertos)
    if (allTicketView.style.display !== 'none')
    {
        allTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        allTicketView.addEventListener('animationend', ()=>{
            allTicketView.classList.remove('fade-out-view');
            allTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            //aparece también los filtros que se eliminan con la plantilla
            mainTicketView.classList.add('fade-in-view');
            mainTicketView.style.display = 'grid';
            
            //elimina las animaciones añadidas y recarga la página
            mainTicketView.addEventListener('animationend', ()=>{
                mainTicketView.classList.remove('fade-in-view');
                window.location.reload(true);
            },{once : true});
        },{once : true});
    }
    //Sii la plantilla de respuesta está abierta, se cambia la 
    //vista a la principal
    if (resolveTicketView.style.display !== 'none')
    {
        resolveTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        resolveTicketView.addEventListener('animationend', ()=>{
            resolveTicketView.classList.remove('fade-out-view');
            resolveTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            //aparece también los filtros que se eliminan con la plantilla
            mainContainerFiltersApear.classList.add('fade-in-view');
            mainContainerFiltersApear.style.display = 'block';
            mainTicketView.classList.add('fade-in-view');
            mainTicketView.style.display = 'grid';
            
            //elimina las animaciones añadidas y recarga la página
            mainTicketView.addEventListener('animationend', ()=>{
                mainTicketView.classList.remove('fade-in-view');
                mainContainerFiltersApear.classList.remove('fade-in-view');
                window.location.reload(true);
            },{once : true});
        },{once : true});
    }
});

// Página de ticket solucionados
navCompletedBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    //Si la página de tickets solucionados se muestra, entonces se recarga
    if (completedTicketView.style.display !== 'none') 
    {
        completedTicketView.classList.add('upload-view');
        completedTicketView.addEventListener('animationend', ()=>{
            completedTicketView.classList.remove('upload-view');
        });
    }
    // Si la página de todos los tickets se muestra, se cambia de vista
    // de a tickets solucionados
    if (allTicketView.style.display !== 'none')
    {
        allTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        allTicketView.addEventListener('animationend', ()=>{
            allTicketView.classList.remove('fade-out-view');
            allTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            completedTicketView.classList.add('fade-in-view');
            completedTicketView.style.display = 'block';
            
            //elimina las animaciones añadidas
            completedTicketView.addEventListener('animationend', ()=>{
                completedTicketView.classList.remove('fade-in-view');
            },{once : true});
        },{once : true});
    }
    
    //Si la página principal de tickets está abierta, entonces se cambia a
    //la vista de tickets solucionados
    if (mainTicketView.style.display !== 'none')
    {
        mainTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        mainTicketView.addEventListener('animationend', ()=>{
            mainTicketView.classList.remove('fade-out-view');
            mainTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            completedTicketView.classList.add('fade-in-view');
            completedTicketView.style.display = 'block';
            
            //elimina las animaciones añadidas
            completedTicketView.addEventListener('animationend', ()=>{
                completedTicketView.classList.remove('fade-in-view');
            },{once : true});
        },{once : true});
    }
    //Sii la plantilla de respuesta está abierta, se cambia la 
    //vista de tickets solucionados
    if (resolveTicketView.style.display !== 'none')
    {
        resolveTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        resolveTicketView.addEventListener('animationend', ()=>{
            resolveTicketView.classList.remove('fade-out-view');
            resolveTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            //aparece también los filtros que se eliminan con la plantilla
            mainContainerFiltersApear.classList.add('fade-in-view');
            mainContainerFiltersApear.style.display = 'block';
            completedTicketView.classList.add('fade-in-view');
            completedTicketView.style.display = 'block';
            
            //elimina las animaciones añadidas
            completedTicketView.addEventListener('animationend', ()=>{
                completedTicketView.classList.remove('fade-in-view');
                mainContainerFiltersApear.classList.remove('fade-in-view');
            },{once : true});
        },{once : true});
    }
});

// Página de todos los tickets
navAllBtn.addEventListener('click', ev =>{
    ev.preventDefault();

    //Si la página de todos los tickets se muestra, entonces se recarga
    if (allTicketView.style.display !== 'none') 
    {
        allTicketView.classList.add('upload-view');
        allTicketView.addEventListener('animationend', ()=>{
            allTicketView.classList.remove('upload-view');
        });
    }
    // Si la página de tickets completados se muestra, se cambia de vista
    // de todos los tickets
    if (completedTicketView.style.display !== 'none')
    {
        completedTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        completedTicketView.addEventListener('animationend', ()=>{
            completedTicketView.classList.remove('fade-out-view');
            completedTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            allTicketView.classList.add('fade-in-view');
            allTicketView.style.display = 'grid';
            
            //elimina las animaciones añadidas
            allTicketView.addEventListener('animationend', ()=>{
                allTicketView.classList.remove('fade-in-view');
            },{once : true});
        },{once : true});
    }
    
    //Si la página principal de tickets está abierta, entonces se cambia a
    //la vista de todos los tickets
    if (mainTicketView.style.display !== 'none')
    {
        mainTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        mainTicketView.addEventListener('animationend', ()=>{
            mainTicketView.classList.remove('fade-out-view');
            mainTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            allTicketView.classList.add('fade-in-view');
            allTicketView.style.display = 'grid';
            
            //elimina las animaciones añadidas
            allTicketView.addEventListener('animationend', ()=>{
                allTicketView.classList.remove('fade-in-view');
            },{once : true});
        },{once : true});
    }
    //Sii la plantilla de respuesta está abierta, se cambia la 
    //vista de todos los tickets
    if (resolveTicketView.style.display !== 'none')
    {
        resolveTicketView.classList.add('fade-out-view');

        //quita el elemento que se está mostrando
        resolveTicketView.addEventListener('animationend', ()=>{
            resolveTicketView.classList.remove('fade-out-view');
            resolveTicketView.style.display = 'none';

            //aparece y cambia el display de la vista actual
            //aparece también los filtros que se eliminan con la plantilla
            mainContainerFiltersApear.classList.add('fade-in-view');
            mainContainerFiltersApear.style.display = 'block';
            allTicketView.classList.add('fade-in-view');
            allTicketView.style.display = 'grid';
            
            //elimina las animaciones añadidas
            allTicketView.addEventListener('animationend', ()=>{
                allTicketView.classList.remove('fade-in-view');
                mainContainerFiltersApear.classList.remove('fade-in-view');
            },{once : true});
        },{once : true});
    }
});

//TODO : error en las transiciones de tickets resueltos y todos los tickets
//