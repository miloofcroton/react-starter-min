import { connect } from 'react-redux';
import ItemList from './List';

import { fetchItems } from '../../../../data/store/resources/items/actions';
import { getItems, isItemsLoading } from '../../../../data/store/resources/items/selectors';

import { LoadingGif } from '../../../lib/loading';

const mapStateToProps = state => ({
  data: getItems(state),
  // loading: isItemsLoading(state),
  loading: true
});

const mapDispatchToProps = dispatch => ({
  fetch: () => dispatch(fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadingGif(ItemList));
