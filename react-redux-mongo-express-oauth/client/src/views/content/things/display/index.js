import { connect } from 'react-redux';
import ThingList from './List';

import { fetchThings } from '../../../../data/store/resources/things/actions';
import { getThings } from '../../../../data/store/resources/things/selectors';

const mapStateToProps = state => ({
  list: getThings(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchThings())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ThingList);
