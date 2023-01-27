import PropTypes from 'prop-types'

export const PropsApp = ({title, subTitle}) => {
  return (
    <>
      <a href="#">
        <h1>{title}</h1>
      </a>
      <h4>{subTitle}</h4>
    </>
  );
}

PropsApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
}

PropsApp.defaultProps = {
  name: 'Andrés Soto',
  subTitle: 'No hay subtítulo',
  title: 'No hay título',
}