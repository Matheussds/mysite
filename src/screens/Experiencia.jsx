import List from "../components/List"

export default () => {
    const atividadesAnac = 'Manutenção em datasets e dashboards no Power BI, desenvolvimento e manutenção aplicações Oracle APEX, modelagem de dados, scripts PL/SQL, análise e levantamento de requisitos junto a área departamental.'

    const atividadesSF = 'Solução de problemas e implementações para inserção e atualização de dados no banco de dados Oracle, Scripts PL / SQL, desenvolvimento de aplicações corporativas para gerenciamento de dados organizacionais em Oracle APEX, modelagem de dados.'

    const atividadesTJDFT = ' Solução de problemas técnicos em computadores de advogados usuários de softwares do tribunal, atendimento e orientação relacionados ao uso e manutenção de softwares para às partes processuais, atuação no setor de processos judiciais eletrônicos - PJe.'

    return (
        <>
            <List title='Instituição' value='ANAC - Agência Nacional de Aviação Civil' />
            <List title='Período de Contrato' value='12/2021 - Atual' />
            <List title='Cargo' value='Estágiario' />
            <List
                title='Atividades'
                value={atividadesAnac}
            />
            <br />
            <p className="App-second"
                style={{
                    margin: '20px 0 20px 0', width: '100%', borderBottom: '1px solid'
                }} />
            <br />
            <List title='Instituição' value='SF - Senado Federal' />
            <List title='Período de Contrato' value='05/2018 - 05/2020' />
            <List title='Cargo' value='Estágiario' />
            <List title='Atividades' value={atividadesSF} />
            <br />
            <p className="App-second"
                style={{
                    margin: '20px 0 20px 0', width: '100%', borderBottom: '1px solid'
                }} />
            <br />
            <List title='Instituição' value='TJDFT - Tribunal de Justiça do Distrito Federal e Territórios' />
            <List title='Período de Contrato' value='11/2017 - 04/2018' />
            <List title='Cargo' value='Estágiario' />
            <List title='Atividades' value={atividadesTJDFT} />

        </>
    )
}