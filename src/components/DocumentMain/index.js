import CardArticle from '../CardArticle';
import './style.css'
import './../../global/responsivity.css'

function DocumentMain() {
    return `
    <main>
        <div class="main-wrapper" id="main-wrapper">

            ${CardArticle("Agora é oficial: o Windows 11 está vindo", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, doloribus ipsa provident nobis, animi quos illum illo optio eius, molestias tempore incidunt expedita dolor dignissimos! Nesciunt ipsa eaque deleniti cumque!")}

            ${CardArticle("Tim Berners-Lee vai leiloar código-fonte da web", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident impedit ducimus odit assumenda molestias aut consequuntur mollitia laborum sequi. Voluptatem fuga quibusdam perferendis, cupiditate molestias natus dignissimos? Fugiat, dolorem animi.")}

            ${CardArticle("Tem Firefox novo no pedaço e você vai querer migrar", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptas, doloremque animi quam corporis voluptatibus officia sed eligendi reiciendis deleniti voluptates dolore omnis distinctio libero. Deserunt doloribus placeat tenetur minima.")}

            ${CardArticle("John McAfee, criador do antivírus McAfee, morre", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque odio laboriosam id quaerat qui similique cum quisquam eos officia sequi et dolorum soluta, molestiae ipsa rerum dolore recusandae vero sit!")}
            
        </div>
    </main>`
}

export default DocumentMain;