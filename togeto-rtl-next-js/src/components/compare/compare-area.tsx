'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { addItemToCart } from '@/redux/slices/cart-slice';
import { clearCompare, toggleCompareItem } from '@/redux/slices/compare-slice';
import { selectCompareItems } from '@/redux/selectors/compare-selector';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { IProductDT } from '@/types/product-d-t';
import { updatePrice } from '@/utils/helper';
import ItemNotFound from '../item-not-found';

const CompareArea = () => {
  const compareItems = useAppSelector(selectCompareItems);
  const [isClient, setIsClient] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  // Dispatch action to add item to cart with initial quantity of 1
  const handleAddToCart = (product: IProductDT, quantity: number = 1) => {
    dispatch(addItemToCart({ product, quantity }));
  };

  // Dispatch the action to remove product from Compare
  const handleToggleCompare = (product: IProductDT) => {
    dispatch(toggleCompareItem(product));
  };

  // Dispatch the action to remove all products from compare
  const handleClear = () => {
    const confirmed = window.confirm(
      'Are you sure you want to clear the comparison?'
    );
    if (confirmed) {
      dispatch(clearCompare());
      toast.success('Comparison cleared successfully!', {
        position: 'top-center',
      });
    }
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {compareItems.length === 0 ? (
        <ItemNotFound
          title="No Product To Compare"
          subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat, veritatis possimus. <br /> Et laudantium quasi cum
                      tenetur recusandae ipsam qui molestiae!"
        />
      ) : (
        <div className="d-flex flex-column align-items-center pt-60 pb-80">
          <div className="container compare-container ">
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Product</th>
                  {compareItems.map((item) => (
                    <th key={item.id}>{item.title}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Image</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      <Image
                        className="compare-image image-height-auto"
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={250}
                      />
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Description</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      {item.description ||
                        `There are many variations of passages of Lorem Ipsum available. Lorem Ipsum dolor sit amet.`}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Price</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      {item.hasDiscount && <del>${item.price.toFixed(2)} </del>}
                      <strong>
                        ${Math.round(updatePrice(item)).toFixed(2)}
                      </strong>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Discount</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      {item.hasDiscount ? item.hasDiscount : 'New'}
                    </td>
                  ))}
                </tr>

                <tr>
                  <td>Rating</td>
                  {compareItems.map((item) => (
                    <td key={item.id}>
                      {Array.from({ length: item.rating }).map(
                        (_, starIndex) => (
                          <i
                            key={starIndex}
                            className="fa-solid fa-star text-warning"
                          ></i>
                        )
                      )}
                      ({item.rating})
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Add To Cart</td>
                  {compareItems.map((product) => (
                    <td key={product.id}>
                      <button
                        className="it-btn-sm"
                        onClick={() => {
                          handleAddToCart(product);
                        }}
                      >
                        Add to Cart
                      </button>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Remove</td>
                  {compareItems.map((product) => (
                    <td key={product.id}>
                      <button
                        type="button"
                        onClick={() => handleToggleCompare(product)}
                      >
                        <i className="fa fa-times"></i>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <button className="it-btn-orange mt-60" onClick={() => handleClear()}>
            Clear Comparison
          </button>
        </div>
      )}
    </>
  );
};
export default CompareArea;
