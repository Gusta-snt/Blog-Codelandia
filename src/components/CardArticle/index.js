import './style.css'

function CardArticle(title, body){
    return `
    <article class="card">
        <div class="date-icon-wrapper">
            <p class="date">12 de jul, 2021</p>
            <img src="../../../images/heart-icon.svg" class="icon">
        </div>
        <h2 class="title">${title}</h2>
        <p class="body">${body}</p>
    </article>`
}

export default CardArticle;