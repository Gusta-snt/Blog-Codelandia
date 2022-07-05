import './style.css'
import './../../global/responsivity.css'

function SearchInput() {
    return `
        <div class="input-wrapper" id="input-wrapper">
            <i><img src="../../../images/search-icon.svg" alt="Search Icon" id="search-icon"></i>
            <input type="text" placeholder="Pesquisar no blog" name="search-input" id="search-input">
        </div>
    `
}

export default SearchInput;