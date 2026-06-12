'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  email: string;
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
});

const NewsletterForm = () => {
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
    <form className="d-block" onSubmit={onSubmit} noValidate>
      <div className="d-flex justify-content-lg-end align-items-center">
        <input type="email" placeholder="Email" {...register('email')} />
        <ErrorMsg msg={errors.email?.message || ''} />
        <button type="submit" className="it-btn-orange hover-2 ml-20">
          <span>Subscribe</span>
        </button>
      </div>
    </form>
  );
};
export default NewsletterForm;
