'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  trackingNumber: string;
}

const schema = yup.object().shape({
  trackingNumber: yup.string().required('Email is required'),
});

const TrackingForm = () => {
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
    <form
      className="d-block it-tracking-form-wrap mb-25"
      onSubmit={onSubmit}
      noValidate
    >
      <label className="mr-15">Tracking ID:</label>
      <div className="it-tracking-top d-flex align-items-center">
        <input
          type="text"
          placeholder="Tracking id number"
          {...register('trackingNumber')}
        />
        <ErrorMsg msg={errors.trackingNumber?.message || ''} />
        <button type="submit" className="it-btn-orange hover-2 ml-10">
          <span>Track</span>
        </button>
      </div>
    </form>
  );
};
export default TrackingForm;
