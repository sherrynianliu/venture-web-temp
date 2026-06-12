'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  fromFreightType: string;
  toFreightType: string;
  weight: string;
  length: string;
  width: string;
  height: string;
}

// Create a validation schema using yup
const schema = yup.object({
  fromFreightType: yup.string().required('Freight Type is required'),
  toFreightType: yup.string().required('Freight Type is required'),
  weight: yup.string().required('Weight is required'),
  length: yup.string().required('Length is required'),
  width: yup.string().required('Width is required'),
  height: yup.string().required('Height is required'),
});

const ContactFormTwo = () => {
  const {
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
    <form onSubmit={onSubmit} noValidate>
      <div className="row gx-20">
        <div className="col-md-6 mb-25">
          <div className="it-form-input-wrap">
            <label>From:</label>
            <div className="it-form-input-box">
              <input
                type="text"
                placeholder="Freight Type"
                {...register('fromFreightType')}
              />
              <ErrorMsg msg={errors.fromFreightType?.message || ''} />
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-25">
          <div className="it-form-input-wrap">
            <label>To:</label>
            <div className="it-form-input-box">
              <input
                type="text"
                placeholder="Freight Type"
                {...register('toFreightType')}
              />
              <ErrorMsg msg={errors.toFreightType?.message || ''} />
            </div>
          </div>
        </div>
      </div>
      <div className="row gx-20 align-items-end">
        <div className="col-lg-4 mb-25">
          <div className="it-form-input-wrap">
            <label>Weight:</label>
            <div className="it-form-input-box">
              <input
                type="text"
                placeholder="Enter weight"
                {...register('weight')}
              />
              <span>KG</span>
              <ErrorMsg msg={errors.weight?.message || ''} />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="it-form-input-wrap">
            <label>Volume:</label>
            <div className="row gx-10">
              <div className="col-lg-4 mb-25">
                <div className="it-form-input-box">
                  <input
                    type="text"
                    placeholder="Length"
                    {...register('length')}
                  />
                  <span>CM</span>
                  <ErrorMsg msg={errors.length?.message || ''} />
                </div>
              </div>
              <div className="col-lg-4 mb-25">
                <div className="it-form-input-wrap">
                  <div className="it-form-input-box">
                    <input
                      type="text"
                      placeholder="Width"
                      {...register('width')}
                    />
                    <span>CM</span>
                    <ErrorMsg msg={errors.width?.message || ''} />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-25">
                <div className="it-form-input-wrap">
                  <div className="it-form-input-box">
                    <input
                      type="text"
                      placeholder="Height"
                      {...register('height')}
                    />
                    <span>CM</span>
                    <ErrorMsg msg={errors.height?.message || ''} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 mb-25">
          <div className="it-form-input-wrap text-end">
            <button type="submit" className="it-btn-orange hover-2 w-100">
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactFormTwo;
