import PropTypes from 'prop-types'

export const PropsApp = ({title, subTitle, developper}) => {
  return (
    <>
      <a href="#">
        <h1 data-testid="test-title">{title}</h1>
      </a>
      <h4>{subTitle}</h4>
      <h4>{subTitle}</h4>
      <p>Desarrollador por: {developper}</p>
    </>
  );
}

PropsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  developper: PropTypes.string
}

PropsApp.defaultProps = {
  developper: 'Andrés Soto',
  subTitle: 'No hay subtítulo',
}