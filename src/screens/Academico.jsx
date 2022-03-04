import List from '../components/List'

export default () => {
    return (
        <>
            <List title="Curso" value="Análise e Desenvolvimento de Sistemas" />
            <List title="Status" value="Cursando" />
            <List title="Universidade" value="CEUB - Centro Univesitário de Brasília" color={{ color: '#9932CC' }} />
            <br />
            <p className="App-second"
                style={{
                    margin: '20px 0 20px 0', width: '100%', borderBottom: '1px solid'
                }} />
            <br />
            <List title="Curso" value="Ciência da Computação" />
            <List title="Status" value="Incompleto" />
            <List title="Universidade" value="CEUB - Centro Univesitário de Brasília" color={{ color: '#9932CC' }} />
        </>

    )
}