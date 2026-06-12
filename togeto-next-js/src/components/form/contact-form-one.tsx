'use client';

import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

import CustomSelect from './custom-select/custom-select';

const deliveryMaterials = [
  { label: 'Select Material', value: '' },
  { label: 'Auto Parts', value: 'all_parts' },
  { label: 'Electronics', value: 'electronic' },
  { label: 'Textiles and Apparel', value: 'textile' },
  { label: 'Furniture', value: 'furniture' },
  { label: 'Pharmaceuticals', value: 'pharmaceutical' },
  { label: 'Perishable Goods', value: 'perishable' },
];

const deliveryOptions = [
  { label: 'Select Speed', value: '' },
  { label: 'Standard (3 days)', value: 'standard' },
  { label: 'Economy (5-7 Days)', value: 'economy' },
  { label: 'Next Day (2 Days)', value: 'next_day' },
];

const modeOfDeliveries = [
  { label: 'Select Mode', value: '' },
  { label: 'Ship', value: 'ship' },
  { label: 'Air Freight', value: 'air_freight' },
  { label: 'Road Transport', value: 'road_transport' },
  { label: 'Rail Freight', value: 'rail_freight' },
  { label: 'Courier', value: 'courier' },
  { label: 'Sea Freight', value: 'sea_freight' },
];

interface FormData {
  deliveryMaterial: string;
  deliveryOption: string;
  modeOfDelivery: string;
  weight: number;
  height: number;
  width: number;
  length: number;
}

const schema = yup.object().shape({
  deliveryMaterial: yup.string().required('Delivery Material is required'),
  deliveryOption: yup.string().required('Delivery Option is required'),
  modeOfDelivery: yup.string().required('Mode of Delivery is required'),
  weight: yup
    .number()
    .typeError('Weight must be a number')
    .positive('Weight must be positive')
    .required('Weight is required'),
  height: yup
    .number()
    .typeError('Height must be a number')
    .positive('Height must be positive')
    .required('Height is required'),
  width: yup
    .number()
    .typeError('Width must be a number')
    .positive('Width must be positive')
    .required('Width is required'),
  length: yup
    .number()
    .typeError('Length must be a number')
    .positive('Length must be positive')
    .required('Length is required'),
});

const ContactFormOne = () => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form action="#" onSubmit={onSubmit} noValidate>
      <div className="row">
        <div
          className="col-lg-4 col-md-6 wow animate_fadeInUp"
          data-wow-duration=".9s"
          data-wow-delay=".3s"
        >
          <div className="it-form-input-wrap mb-25">
            <Controller
              name="deliveryMaterial"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  selectTitle="Delivery Material"
                  selectData={deliveryMaterials}
                  {...field}
                />
              )}
            />
            <ErrorMsg msg={errors.deliveryMaterial?.message || ''} />
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 wow animate_fadeInUp"
          data-wow-duration=".9s"
          data-wow-delay=".3s"
        >
          <div className="it-form-input-wrap mb-25">
            <Controller
              name="deliveryOption"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  selectTitle="Delivery Speed"
                  selectData={deliveryOptions}
                  {...field}
                />
              )}
            />
            <ErrorMsg msg={errors.deliveryOption?.message || ''} />
          </div>
        </div>
        <div
          className="col-lg-4 col-md-6 wow animate_fadeInUp"
          data-wow-duration=".9s"
          data-wow-delay=".3s"
        >
          <div className="it-form-input-wrap mb-25">
            <Controller
              name="modeOfDelivery"
              control={control}
              render={({ field }) => (
                <CustomSelect
                  selectTitle="Mode Of Delivery"
                  selectData={modeOfDeliveries}
                  {...field}
                />
              )}
            />
            <ErrorMsg msg={errors.modeOfDelivery?.message || ''} />
          </div>
        </div>
      </div>

      <div className="row gx-20">
        <div className="col-xl-8">
          <div className="row gx-20">
            <div
              className="col-lg-4 col-md-4 col-sm-6 wow animate_fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-form-input-wrap mb-25">
                <label>Weight:</label>
                <div className="it-form-input-box">
                  <input
                    type="text"
                    placeholder="Enter weight"
                    {...register('weight')}
                  />
                  <ErrorMsg msg={errors.weight?.message || ''} />
                  <span>KG</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-6 wow animate_fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-form-input-wrap mb-25">
                <label>Height:</label>
                <div className="it-form-input-box">
                  <input
                    type="text"
                    placeholder="Enter Height"
                    {...register('height')}
                  />
                  <ErrorMsg msg={errors.height?.message || ''} />
                  <span>CM</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-4 col-sm-6 wow animate_fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay=".5s"
            >
              <div className="it-form-input-wrap mb-25">
                <label>Width:</label>
                <div className="it-form-input-box">
                  <input
                    type="text"
                    placeholder="Enter Width"
                    {...register('width')}
                  />
                  <ErrorMsg msg={errors.width?.message || ''} />
                  <span>CM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="col-xl-4 wow animate_fadeInUp"
          data-wow-duration=".9s"
          data-wow-delay=".5s"
        >
          <div className="it-form-input-wrap mb-25">
            <label>Length:</label>
            <div className="it-form-btn-box d-flex align-items-center">
              <div className="it-form-input-box">
                <input
                  type="text"
                  placeholder="Enter Length"
                  {...register('length')}
                />
                <ErrorMsg msg={errors.length?.message || ''} />
                <span>CM</span>
              </div>
              <button type="submit" className="it-btn-orange hover-2">
                <span>Calculate</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactFormOne;
