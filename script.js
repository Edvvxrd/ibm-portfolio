const navUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const addRecommendation = () => {
    const modal = document.getElementById('modal');
    const posts = document.getElementById('posts');
    const card = document.createElement('div');
    const formName = document.getElementById('formName');
    const formMessage = document.getElementById('formMessage');
    
    if (formMessage.value === "") return;
  
    let message = `"${formMessage.value}"` + (formName.value !== "" ? " - " + formName.value : "");
    
    card.classList.add('card');
    card.innerText = message;
    posts.appendChild(card);
    
    modal.style.visibility = "visible";
}

const dismissModal = () => {
    const modal = document.getElementById('modal');
    modal.style.visibility = "hidden";
}
