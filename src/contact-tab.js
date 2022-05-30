export const contactContainer = () => {
    const container = document.createElement('div');
    container.classList.add('contact-container');
    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameGroup = document.createElement('div');
    nameGroup.classList.add('form-group');
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = 'name';
    nameLabel.textContent = 'Name';
    const nameInput = document.createElement('input');
    nameInput.classList.add('input-control');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.placeholder = 'Enter your name';
    nameGroup.append(nameLabel, nameInput);

    const emailGroup = document.createElement('div');
    emailGroup.classList.add('form-group');
    const emailLabel = document.createElement('label');
    emailLabel.htmlFor = 'mail';
    emailLabel.textContent = 'E-mail'
    const emailInput = document.createElement('input');
    emailInput.classList.add('input-control');
    emailInput.type = 'email';
    emailInput.id = 'mail';
    emailInput.name = 'mail';
    emailInput.placeholder = 'Enter your e-mail';
    emailGroup.append(emailLabel, emailInput);

    const msgGroup = document.createElement('div');
    msgGroup.classList.add('form-group');
    const msgTitle = document.createElement('p');
    msgTitle.textContent = 'Your message';
    const txtArea = document.createElement('textarea');
    txtArea.classList.add('msg-textarea');
    txtArea.placeholder = 'Enter your message';
    msgGroup.append(msgTitle, txtArea);

    const btnGroup = document.createElement('div');
    btnGroup.classList.add('form-group');
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-button');
    submitBtn.id = 'submit';
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Send';

    btnGroup.append(submitBtn);

    form.append(nameGroup, emailGroup, msgGroup, btnGroup);
    container.append(form);

    return container;
}