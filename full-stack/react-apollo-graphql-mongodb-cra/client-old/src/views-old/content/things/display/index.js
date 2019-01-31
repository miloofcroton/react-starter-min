import { connect } from 'react-redux';
import ThingList from './List';
import { getThings } from '../../../../data/resources/things/selectors';

const mapStateToProps = state => ({
  list: getThings(state)
});

const Data = connect(mapStateToProps);

export default Data(ThingList);
