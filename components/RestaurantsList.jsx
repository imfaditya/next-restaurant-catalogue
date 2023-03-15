import PropTypes from 'prop-types';
import RestaurantItem from './RestaurantItem';
import Grid from './styled/Grid';

function RestaurantsList({ restaurants }) {
  return (
    <Grid>
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} {...restaurant} />
      ))}
    </Grid>
  )
}

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    pictureId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
}

export default RestaurantsList;
