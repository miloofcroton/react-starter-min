import { connect } from 'react-redux';
import ItemList from './List';

import { fetchItems } from '../../../../data/store/resources/items/actions';
import { getItems, isItemsLoading, getFirstItem } from '../../../../data/store/resources/items/selectors';

import { LoadingGif } from '../../../lib/loading';
import FromStore from '../../../lib/fetching/FromStore';

const mapStateToProps = state => ({
  list: getItems(state),
  first: getFirstItem(state),
  loading: isItemsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchItems())
});

const Data = connect(mapStateToProps, mapDispatchToProps);

export default Data(FromStore(LoadingGif(ItemList)));
