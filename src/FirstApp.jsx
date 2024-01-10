import PropTypes from 'prop-types';

const message = {
  nombre: 'Fernando',
  title: 'Hola Mundo',
  arr: [1,2,3,4,5,6,7,8,9]
}

const getSaludo = (n) => `Hola ${n}`;

export const FirstApp = ({title, subtitle, nombre}) => {
  return (
    <>
    {/*<h1>First App Fernando *-*-*</h1>*/}
    <h1 data-testid="test-title">{title}</h1>
    {/* <code>{ JSON.stringify(message)}</code> */}
    {/* <h3>{getSaludo('Fer')}</h3> */}
    <p>{subtitle}</p>
    <p>{subtitle}</p>
    <p>{subtitle}</p>
    <p>{ nombre }</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
  nombre: 'Fernando',  
  subtitle: 'No hay subtitulo',
  //title: 'No hay titulo',
}