import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productsSlice';
import Loading from '../components/Loading';
import DetailSingleProduct from '../components/detail/DetailSingleProduct';

const ProductDetail = () => {
    const { id } = useParams();
    const { productDetail, productDetailStatus } = useSelector( state => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [dispatch, id])

    console.log(productDetail);
  return (
    <div>
        {
            productDetailStatus  == "LOADING" 
            ? 
            <Loading /> 
            :
            <DetailSingleProduct  productDetail = {productDetail} />

        }
    </div>
  )
}

export default ProductDetail