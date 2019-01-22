import { connect } from 'react-redux';
import ThingList from './List';

import { fetchThings } from '../../../../data/store/resources/things/actions';
import { getThings } from '../../../../data/store/resources/things/selectors';

import { LoadingGif } from '../../../lib/loading';
import FromStore from '../../../lib/fetching/FromStore';

const mapStateToProps = state => ({
  list: getThings(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchThings())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FromStore(LoadingGif(ThingList)));
