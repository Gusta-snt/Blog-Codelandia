import SearchInput from '../SearchInput'
import './style.css'
import './../../global/responsivity.css'

function DocumentHeader() {
    return `
        <header id="header">
            <div class="header-wrapper" id="header-wrapper">
                <div class="tittle-logo-wrapper">
                    <h1 class="title-page">Codelândia</h1>
                    <h1 class="title-page">blog</h1>
                </div>
                ${SearchInput()}
            </div>
        </header>
    `
}

export default DocumentHeader