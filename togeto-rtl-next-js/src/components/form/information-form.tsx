'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface IProps {
  btnClass?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  freightType: string;
  freightType2: string;
  departureCity: string;
  deliveryCity: string;
  weight: string;
  weight2: string;
  height: string;
  height2: string;
  options: string[];
}

// Create a validation schema using yup
const schema = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().required('Phone Number is required'),
  freightType: yup.string().required('Freight Type is required'),
  freightType2: yup.string().required('Freight Type is required'),
  departureCity: yup.string().required('City of Departure is required'),
  deliveryCity: yup.string().required('Delivery City is required'),
  weight: yup.string().required('Weight is required'),
  weight2: yup.string().required('Weight is required'),
  height: yup.string().required('Height is required'),
  height2: yup.string().required('Height is required'),
  options: yup
    .array(yup.string().required())
    .min(1, 'Select at least one option')
    .required(),
});

// Check Box Data
const checkBoxData = [
  'Camera',
  'Packaging',
  'Express Delivery',
  'Road Freight',
  'Air Freight',
];

export default function InformationForm({ btnClass }: IProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      options: [], // Ensuring it's an empty array by default
    },
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="row gx-20">
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Your Name" {...register('name')} />
            <ErrorMsg msg={errors.name?.message || ''} />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input
              type="email"
              placeholder="Your Email"
              {...register('email')}
            />
            <ErrorMsg msg={errors.name?.message || ''} />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input
              type="text"
              placeholder="Phone Number"
              {...register('phone')}
            />
            <ErrorMsg msg={errors.phone?.message || ''} />
          </div>
        </div>
      </div>
      <span className="mt-15 mb-25 d-block">Shipment Information</span>
      <div className="row gx-20">
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input
              type="text"
              placeholder="Freight Type"
              {...register('freightType')}
            />
            <ErrorMsg msg={errors.freightType?.message || ''} />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input
              type="text"
              placeholder="City of Departure"
              {...register('departureCity')}
            />
            <ErrorMsg msg={errors.departureCity?.message || ''} />
          </div>
        </div>
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input
              type="text"
              placeholder="Delivery City"
              {...register('deliveryCity')}
            />
            <ErrorMsg msg={errors.deliveryCity?.message || ''} />
          </div>
        </div>
      </div>
      <div className="row gx-20">
        <div className="col-lg-4 col-md-4">
          <div className="it-information-input-box mb-20">
            <input
              type="text"
              placeholder="Freight Type"
              {...register('freightType2')}
            />
            <ErrorMsg msg={errors.freightType2?.message || ''} />
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Weight" {...register('weight')} />
            <ErrorMsg msg={errors.weight?.message || ''} />
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Height" {...register('height')} />
            <ErrorMsg msg={errors.height?.message || ''} />
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Weight" {...register('weight2')} />
            <ErrorMsg msg={errors.weight2?.message || ''} />
          </div>
        </div>
        <div className="col-lg-2 col-md-2 col-6">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Height" {...register('height2')} />
            <ErrorMsg msg={errors.height2?.message || ''} />
          </div>
        </div>
      </div>
      <div className="it-information-check-box mb-30">
        <ul>
          {checkBoxData.map((item, i) => (
            <li key={i}>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value={item}
                  id={item}
                  {...register('options')}
                />
                <label className="form-check-label" htmlFor={item}>
                  {item}
                </label>
              </div>
            </li>
          ))}
        </ul>
        <ErrorMsg msg={errors.options?.message || ''} />
      </div>
      <button className={btnClass || 'it-btn-orange w-100'} type="submit">
        <span>REQUST A QUOTE</span>
      </button>
    </form>
  );
}
