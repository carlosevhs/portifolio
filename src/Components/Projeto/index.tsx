import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './style'

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de taredas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feitas com React</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
