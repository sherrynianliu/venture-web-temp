'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  name: string;
  email: string;
  phone: string;
  notes: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  notes: yup
    .string()
    .min(10, 'Note must be at least 10 characters')
    .required('Note is required'),
});

const PortfolioForm = () => {
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
      <div className="row">
        <div className="col-12">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Name" {...register('name')} />
            <ErrorMsg msg={errors.name?.message || ''} />
          </div>
        </div>
        <div className="col-12">
          <div className="it-information-input-box mb-20">
            <input type="email" placeholder="Email" {...register('email')} />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-12">
          <div className="it-information-input-box mb-20">
            <input type="text" placeholder="Phone" {...register('phone')} />
            <ErrorMsg msg={errors.phone?.message || ''} />
          </div>
        </div>
        <div className="col-12">
          <div className="it-information-textarea-box mb-30">
            <textarea placeholder="Notes:" {...register('notes')}></textarea>
            <ErrorMsg msg={errors.notes?.message || ''} />
          </div>
        </div>
      </div>
      <button className="it-btn-orange" type="submit">
        <span>Send Message</span>
      </button>
    </form>
  );
};
export default PortfolioForm;
