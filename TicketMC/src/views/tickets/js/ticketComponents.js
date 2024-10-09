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
let createTicket = (id, fecha, title, description, prio, state) =>{
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

    // Creación prioridad
    const priorityElement = document.createElement('span');
    priorityElement.className = 'title--prio ticket-prio';
    priorityElement.textContent = prio;

    // Inyección a Div título
    titleDiv.appendChild(titleElement);
    titleDiv.appendChild(priorityElement);

    // Div descripción
    const descriptionDiv = document.createElement('div');
    descriptionDiv.className = 'ticket--description';

    // Párrafo descripción
    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    // Inyección a Div descipción
    descriptionDiv.appendChild(descriptionElement);

    // Div estado
    const stateDiv = document.createElement('div');
    stateDiv.className = 'ticket--state';

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

    // Párrafo del id
    const hiddenDate = document.createElement('p');
    hiddenDate.className = 'ticket-hidden-info__date';
    hiddenDate.textContent = fecha;

    // Inyección información invisible
    invisibleInfo.appendChild(hiddenId)
    invisibleInfo.appendChild(hiddenDate)

    // Inyección al Div del ticket
    ticketDiv.appendChild(titleDiv);
    ticketDiv.appendChild(descriptionDiv);
    ticketDiv.appendChild(stateDiv);
    ticketDiv.appendChild(invisibleInfo);

    return ticketDiv;
}