import { useDispatch } from 'react-redux';
import useHttp from '../hooks/http.hook';
import { DOMAIN_NAME } from '../variables/variables';
import { addAllAppProductsToState } from '../Componetns/13_App-Components/13.1_App/sliceApp';

// HOOK --------------------------------------------------------------------
const useProductService = () => {
  // IMPORTS --------------------------------------------------------------
  const dispatch = useDispatch();
  const { request, stateHTTPprocess, setStateHTTPprocess, clearError } = useHttp();

  // GET ALL PRODUCTS --------------------------------------------------------
  const getAllProducts = async () => {
    // Get all products from database;
    const getProducts = await request(`${DOMAIN_NAME}products`);
    // Add all products at App State;
    dispatch(addAllAppProductsToState(getProducts));
    setStateHTTPprocess('waiting');
  };

  // HOOK RETURN ------------------------------------------------------------------
  return {
    stateHTTPprocess,
    setStateHTTPprocess,
    clearError,
    getAllProducts,
  };
};

export default useProductService;
