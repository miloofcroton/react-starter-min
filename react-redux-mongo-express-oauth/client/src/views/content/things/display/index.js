import { connect } from 'react-redux';
import ThingList from './List';

import { fetchThingsStart } from '../../../../data/resources/things/actions';
import { getThings } from '../../../../data/resources/things/selectors';

import { LoadingGif } from '../../../lib/loading';
import FromStore from '../../../lib/fetching/FromStore';


const mapStateToProps = state => ({
  list: getThings(state)
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchThingsStart())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(ThingList);
