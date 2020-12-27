import makeStyles from '@material-ui/core/styles/makeStyles';

const cardStyles = makeStyles({
  root: {
    width: 400,
    minHeight: 300,
    border: 'none',
    color: '#000000',
    borderRadius: 0,
    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
    // boxShadow: 'none',
  },
  sectionTitle: {
    color: '#0C2444',
    fontFamily: 'Playfair Display',
    fontWeight: 'bold',
    fontSize: '46px',
    paddingBottom: '0rem',
  },
  workColor: {
    background: '#FEEACC',
  },
  projectCard: {
    background: '#FEEACC',
    minHeight: '300px',
  },
  title: {
    fontSize: 14,
  },
  font: {
    fontFamily: 'Castoro',
  },
  sansFont: {
    fontFamily: 'Montserrat',
    fontSize: '15px',
  },
});

export default cardStyles;
