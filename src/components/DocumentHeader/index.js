import SearchInput from '../SearchInput'
import './style.css'

function DocumentHeader() {
    return `
        <header>
            <div class="header-wrapper">
                <div class="tittle-logo-wrapper">
                    <h1>Codelândia</h1>
                    <h1>blog</h1>
                </div>
                ${SearchInput()}
            </div>
        </header>
    `
}

export default DocumentHeader