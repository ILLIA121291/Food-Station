import { useDispatch } from "react-redux"
import useHttp from "../hooks/http.hook"
import { DOMAIN_NAME } from "../variables/variables"
import { addAllAppProductsToState } from "../Componetns/13_App-Components/13.1_App/sliceApp";


// HOOK --------------------------------------------------------------------
const useProductService = () => {
  // IMPORTS --------------------------------------------------------------
  const dispatch = useDispatch();
  const {request, stateHTTPprocess, setStateHTTPprocess, clearError} = useHttp()

  // GET ALL RODUCTS --------------------------------------------------------
  const getAllProducts = async () => {
    const getProducts = await request(`${DOMAIN_NAME}products`)
    dispatch(addAllAppProductsToState(getProducts))
  }

  // HOOK RETURN ------------------------------------------------------------------
  return {
    stateHTTPprocess,
    setStateHTTPprocess,
    clearError,
    getAllProducts,
  }

}

export default useProductService
