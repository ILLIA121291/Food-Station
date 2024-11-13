import { useDispatch } from 'react-redux';
import useHttp from '../hooks/http.hook';
import { DOMAIN_NAME } from '../variables/variables';
import { addAllAppProductsToState } from '../app/sliceApp';


// HOOK --------------------------------------------------------------------
const useProductService = () => {
  // IMPORTS --------------------------------------------------------------
  const dispatch = useDispatch();
  const productUrl = `${DOMAIN_NAME}products`;
  const { request, stateHttpProcess, setStateHttpProcess, clearError } = useHttp();

  // GET ALL PRODUCTS --------------------------------------------------------
  const getAllProducts = async () => {
    // Get all products from database;
    const getProducts = await request(productUrl);
    
    // Add all products at App State;
    dispatch(addAllAppProductsToState(getProducts));

    setStateHttpProcess('received');
  };

  // HOOK RETURN ------------------------------------------------------------------
  return {
    stateHttpProcess,
    setStateHttpProcess,
    clearError,
    getAllProducts,
  };
};

export default useProductService;
