import { connect } from 'react-redux';
import ThingList from './List';

import { fetchListStart } from '../../../../data/resources/things/actions';
import { getThings } from '../../../../data/resources/things/selectors';

import { LoadingGif } from '../../../lib/loading';
import FromStore from '../../../lib/fetching/FromStore';


const mapStateToProps = state => ({
  list: getThings(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchListStart())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ThingList);
