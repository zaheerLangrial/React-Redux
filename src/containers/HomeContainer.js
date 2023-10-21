import { Connect, connect } from "react-redux";
import Home from "../Components/Home";
import { AddToCart } from "../services/Actions/Actions";

const mapStateToProps = state => ({
    data: state.cardItem
})
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(AddToCart(data))

})

export default connect (mapStateToProps , mapDispatchToProps)(Home)



// export default Home