import './style.css'
import './../../global/responsivity.css'

function CardArticle(title, body){
    return `
    <article class="card" id="card">
        <div class="date-icon-wrapper">
            <p class="date" id="date">12 de jul, 2021</p>
            <img src="../../../images/heart-icon.svg" alt="Heart Icon" class="icon">
        </div>
        <h2 class="title" id="title">${title}</h2>
        <p class="body" id="body">${body}</p>
    </article>`
}

export default CardArticle;