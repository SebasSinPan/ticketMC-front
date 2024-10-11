//crea el elemento que permite acceder al menu de creación de tickets
let createTicketCreator = () => {
    // Sección principal
    const ticketCreateSection = document.createElement("section");
    ticketCreateSection.classList.add("container__ticket--create");

    // Botón de creación de ticket
    const createBtnDiv = document.createElement("div");
    createBtnDiv.id = "ticket--create-btn";
    createBtnDiv.classList.add("create--icon");

    const createBtnImg = document.createElement("img");
    createBtnImg.src = "img/ticket_add_icon.png";
    createBtnImg.alt = "Ícono para crear tickets";

    createBtnDiv.appendChild(createBtnImg);
    ticketCreateSection.appendChild(createBtnDiv);

    // Modal / Dialog para crear ticket
    const createDialog = document.createElement("dialog");
    createDialog.id = "create__ticket";
    createDialog.classList.add("create__ticket");

    // Título del modal
    const createTicketTitleDiv = document.createElement("div");
    createTicketTitleDiv.classList.add("create__ticket--title");

    const titleH3 = document.createElement("h3");
    titleH3.textContent = "Crear nuevo ticket";

    const closeDiv = document.createElement("div");
    closeDiv.id = "create__ticket-close";
    closeDiv.textContent = "X";

    createTicketTitleDiv.appendChild(titleH3);
    createTicketTitleDiv.appendChild(closeDiv);
    createDialog.appendChild(createTicketTitleDiv);

    // Formulario para crear ticket
    const form = document.createElement("form");
    form.id = "formCrearTicket";

    // Campo de Título
    const titleFieldDiv = document.createElement("div");
    titleFieldDiv.classList.add("create__ticket--name");

    const titleContainerDiv = document.createElement("div");
    titleContainerDiv.classList.add("ticket--name-container");

    const titleLabel = document.createElement("label");
    titleLabel.textContent = "Título";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.id = "create_ticket_name";
    titleInput.placeholder = "Indique de forma breve su problema";
    titleInput.required = true;

    titleContainerDiv.appendChild(titleLabel);
    titleContainerDiv.appendChild(titleInput);
    titleFieldDiv.appendChild(titleContainerDiv);
    form.appendChild(titleFieldDiv);

    // Campo de Descripción
    const descriptionFieldDiv = document.createElement("div");
    descriptionFieldDiv.classList.add("create__ticket--description");

    const descriptionContainerDiv = document.createElement("div");
    descriptionContainerDiv.classList.add("ticket--description-container");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.textContent = "Descripción";

    const descriptionTextarea = document.createElement("textarea");
    descriptionTextarea.id = "create_ticket_description";
    descriptionTextarea.placeholder = "Especifique, con detalles, las causas o características de su problema";
    descriptionTextarea.required = true;

    descriptionContainerDiv.appendChild(descriptionLabel);
    descriptionContainerDiv.appendChild(descriptionTextarea);
    descriptionFieldDiv.appendChild(descriptionContainerDiv);
    form.appendChild(descriptionFieldDiv);

    // Prioridad
    const priorityFieldDiv = document.createElement("div");
    priorityFieldDiv.classList.add("create__ticket--prio");

    const priorityLabel = document.createElement("label");
    priorityLabel.textContent = "Prioridad";

    const priorityContainerDiv = document.createElement("div");
    priorityContainerDiv.classList.add("ticket--prio-container");

    // Opciones de prioridad
    const priorities = ["Alta", "Media", "Baja"];
    priorities.forEach((prio, index) => {
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.id = `create__ticket-prio-${prio.toLowerCase()}`;
        radioInput.classList.add("ticket-prio-radio");
        radioInput.name = "radio_opt_group";
        radioInput.value = prio.toLowerCase();
        if (prio === "Baja") radioInput.checked = true;

        // Agregar el atributo required solo al primer radio
        if (index === 0) {
            radioInput.required = true;
        }

        const radioLabel = document.createElement("label");
        radioLabel.setAttribute("for", `create__ticket-prio-${prio.toLowerCase()}`);
        radioLabel.textContent = prio;

        priorityContainerDiv.appendChild(radioInput);
        priorityContainerDiv.appendChild(radioLabel);
    });

    priorityFieldDiv.appendChild(priorityLabel);
    priorityFieldDiv.appendChild(priorityContainerDiv);
    form.appendChild(priorityFieldDiv);

    // Adjuntar archivos
    const fileFieldDiv = document.createElement("div");
    fileFieldDiv.classList.add("create__ticket--img");

    const fileLabel = document.createElement("label");
    fileLabel.textContent = "Adjuntar archivos";

    const fileContainerDiv = document.createElement("div");
    fileContainerDiv.classList.add("ticket--img-container");

    const fileP = document.createElement("p");

    const fileImg = document.createElement("img");
    fileImg.src = "img/ticket_upload_icon.png";
    fileImg.alt = "";

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.id = "create_ticket_files";
    fileInput.accept = "image/*";
    fileInput.multiple = true;

    fileP.appendChild(fileImg);
    fileP.appendChild(fileInput);
    fileContainerDiv.appendChild(fileP);
    fileFieldDiv.appendChild(fileLabel);
    fileFieldDiv.appendChild(fileContainerDiv);
    form.appendChild(fileFieldDiv);

    // Botones de Cancelar y Crear ticket
    const buttonContainerDiv = document.createElement("div");
    buttonContainerDiv.classList.add("create__ticket--btn");

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("ticket--btn-container");

    const cancelButton = document.createElement("button");
    cancelButton.id = "btn--container-cancel";
    cancelButton.textContent = "Cancelar";
    cancelButton.type = "button";

    const createButton = document.createElement("button");
    createButton.id = "btn--container-create";
    createButton.type = "submit";
    createButton.textContent = "Crear ticket";

    buttonDiv.appendChild(cancelButton);
    buttonDiv.appendChild(createButton);
    buttonContainerDiv.appendChild(buttonDiv);
    form.appendChild(buttonContainerDiv);

    createDialog.appendChild(form);
    ticketCreateSection.appendChild(createDialog);

    // Finalmente, retornamos la sección creada
    return ticketCreateSection;
}

//crea los tickets que se muestran al usuario
const createTicket = (id, fecha, title, description, prio, state) => {
    // Crea el contenedor principal
    const ticketDiv = document.createElement('div');
    ticketDiv.className = 'ticket select-ticket';

    // Div título
    const titleDiv = document.createElement('div');
    titleDiv.className = 'ticket--title';

    // Creación h3
    const titleElement = document.createElement('h3');
    titleElement.className = 'title--name';
    titleElement.textContent = title;

    // Div para prioridad y fecha
    const nameDataDiv = document.createElement('div');
    nameDataDiv.className = 'title--name_data';

    // Creación prioridad
    const priorityElement = document.createElement('span');
    priorityElement.className = 'title--prio ticket-prio';
    priorityElement.textContent = prio;

    // Creación fecha
    const dateElement = document.createElement('span');
    dateElement.className = 'title--ticket-date';
    dateElement.textContent = fecha;

    // Inyección a Div de datos del nombre
    nameDataDiv.appendChild(priorityElement);
    nameDataDiv.appendChild(dateElement);

    // Inyección al Div título
    titleDiv.appendChild(titleElement);
    titleDiv.appendChild(nameDataDiv);

    // Div descripción
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'ticket--description';

    // Párrafo descripción
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    // Inyección a Div descripción
    descriptionDiv.appendChild(descriptionElement);

    // Div estado
    const stateDiv = document.createElement('div');
    stateDiv.className = 'ticket--state ticket--state-container';

    // Creación Estado
    const stateElement = document.createElement('span');
    stateElement.className = 'ticket-state';
    stateElement.textContent = state;

    // Inyección Estado
    stateDiv.appendChild(stateElement);

    // Div info invisible
    const invisibleInfo = document.createElement('div');
    invisibleInfo.className = 'ticket-hidden-info';
    
    // Párrafo del id
    const hiddenId = document.createElement('p');
    hiddenId.className = 'ticket-hidden-info__id';
    hiddenId.textContent = id;

    // Párrafo de la fecha
    const hiddenDate = document.createElement('p');
    hiddenDate.className = 'ticket-hidden-info__date';
    hiddenDate.textContent = fecha;

    // Inyección información invisible
    invisibleInfo.appendChild(hiddenId);
    invisibleInfo.appendChild(hiddenDate);

    // Inyección al Div del ticket
    ticketDiv.appendChild(titleDiv);
    ticketDiv.appendChild(descriptionDiv);
    ticketDiv.appendChild(stateDiv);
    ticketDiv.appendChild(invisibleInfo);

    return ticketDiv;
};

let createTicketCompleted = (ticketId, ticketDate, ticketTitle, ticketState, solveTech, solveDate, solveDescription, tickerUser, ticketDescription, ticketPrio) => {
    // Crea el contenedor principal
    const completedTicketSection = document.createElement('section');
    completedTicketSection.className = 'container__completed--ticket';

    // Div título del ticket
    const completedTicketTitleDiv = document.createElement('div');
    completedTicketTitleDiv.className = 'completed--ticket-title';

    // Título del ticket
    const ticketTitleElement = document.createElement('h2');
    ticketTitleElement.textContent = ticketTitle;

    // Estado
    const statusElement = document.createElement('span');
    statusElement.textContent = ticketState;

    // Inyección al Div del título
    completedTicketTitleDiv.appendChild(ticketTitleElement);
    completedTicketTitleDiv.appendChild(statusElement);

    // Div solución
    const completedTicketSolutionDiv = document.createElement('div');
    completedTicketSolutionDiv.className = 'completed--ticket-solution';

    // Título de la solución
    const ticketSolutionTitleDiv = document.createElement('div');
    ticketSolutionTitleDiv.className = 'ticket-solution-title';

    // Título y fecha de la solución
    const solutionTitleElement = document.createElement('h3');
    solutionTitleElement.textContent = solveTech;

    const solutionDateElement = document.createElement('span');
    solutionDateElement.textContent = solveDate;

    // Inyección al Div de solución
    ticketSolutionTitleDiv.appendChild(solutionTitleElement);
    ticketSolutionTitleDiv.appendChild(solutionDateElement);
    completedTicketSolutionDiv.appendChild(ticketSolutionTitleDiv);

    // Párrafo descripción de la solución
    const solutionDescriptionElement = document.createElement('p');
    solutionDescriptionElement.textContent = solveDescription;

    // Inyección a Div solución
    completedTicketSolutionDiv.appendChild(solutionDescriptionElement);

    // Div problema
    const completedTicketProblemDiv = document.createElement('div');
    completedTicketProblemDiv.className = 'completed--ticket-problem';

    // Título del problema
    const ticketProblemTitleDiv = document.createElement('div');
    ticketProblemTitleDiv.className = 'ticket-problem-title';

    // Título y fecha del problema
    const userTitleElement = document.createElement('h3');
    userTitleElement.textContent = tickerUser;

    const problemDateElement = document.createElement('span');
    problemDateElement.textContent = ticketDate;

    // Inyección al Div del problema
    ticketProblemTitleDiv.appendChild(userTitleElement);
    ticketProblemTitleDiv.appendChild(problemDateElement);
    completedTicketProblemDiv.appendChild(ticketProblemTitleDiv);

    // Párrafo descripción del problema
    const problemDescriptionElement = document.createElement('p');
    problemDescriptionElement.textContent = ticketDescription;

    // Inyección a Div problema
    completedTicketProblemDiv.appendChild(problemDescriptionElement);

    // Div detalles
    const completedTicketDetailsDiv = document.createElement('div');
    completedTicketDetailsDiv.className = 'completed--ticket-details';

    // Botón para ver detalles
    const detailsButton = document.createElement('button');
    detailsButton.id = 'completed-open-details';
    detailsButton.className = 'completed-open-details';
    detailsButton.textContent = 'Ver detalles del ticket';

    // Div info invisible
    const invisibleInfo = document.createElement('div');
    invisibleInfo.className = 'ClosedTicket-hidden-info';
    
    // Párrafo del id
    const hiddenId = document.createElement('p');
    hiddenId.className = 'ClosedTicket-hidden-info__id';
    hiddenId.textContent = ticketId;

    // Párrafo del id
    const hiddenPrio = document.createElement('p');
    hiddenPrio.className = 'ClosedTicket-hidden-info__prio';
    hiddenPrio.textContent = ticketPrio;

    // Inyección información invisible
    invisibleInfo.appendChild(hiddenId)
    invisibleInfo.appendChild(hiddenPrio)

    // Inyección al Div de detalles
    completedTicketDetailsDiv.appendChild(detailsButton);

    // Inyección al contenedor principal
    completedTicketSection.appendChild(completedTicketTitleDiv);
    completedTicketSection.appendChild(completedTicketSolutionDiv);
    completedTicketSection.appendChild(completedTicketProblemDiv);
    completedTicketSection.appendChild(completedTicketDetailsDiv);
    completedTicketSection.appendChild(invisibleInfo);

    return completedTicketSection;
}