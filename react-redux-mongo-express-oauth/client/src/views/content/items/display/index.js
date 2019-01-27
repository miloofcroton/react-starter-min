import { connect } from 'react-redux';
import ItemList from './List';
import { LoadingGif } from '../../../lib/loading';
import { getItems, isItemsLoading, getFirstItem } from '../../../../data/resources/items/selectors';

const mapStateToProps = state => ({
  list: getItems(state),
  first: getFirstItem(state),
  loading: isItemsLoading(state),
});

const Data = connect(mapStateToProps);

export default Data(LoadingGif(ItemList));
