import { connect } from 'react-redux';
import ItemList from './List';

import { fetchItems } from '../../../../data/store/resources/items/actions';
import { getItems, isItemsLoading } from '../../../../data/store/resources/items/selectors';

import { LoadingGif } from '../../../lib/loading';
import FromStore from '../../../lib/fetching/FromStore';

const mapStateToProps = state => ({
  list: getItems(state),
  loading: isItemsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FromStore(LoadingGif(ItemList)));
