import makeStyles from '@material-ui/core/styles/makeStyles';

const cardStyles = makeStyles({
  root: {
    width: 400,
    minHeight: 300,
    border: 'none',
    color: '#0C2444',
    borderRadius: 5,
    boxShadow: '0 8px 40px -12px rgba(0,0,0,0.3)',
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
