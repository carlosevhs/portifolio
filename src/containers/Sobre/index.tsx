import Titulo from '../../Components/Titulo'
import Paragrafo from '../../Components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, ut dolores
      perspiciatis ratione illum, vero iste delectus laudantium natus nam
      necessitatibus rerum incidunt accusamus hic corrupti consectetur sed iusto
      expedita.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=carlosevhs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=carlosevhs&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
