'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  name: string;
  email: string;
  messages: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  messages: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const ShopReviewForm = () => {
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
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-xxl-6">
          <div className="comment-input">
            <input type="text" placeholder=" Name*" {...register('name')} />
            <ErrorMsg msg={errors.name?.message || ''} />
          </div>
        </div>
        <div className="col-xxl-6">
          <div className="comment-input">
            <input type="email" placeholder="Email*" {...register('email')} />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="comment-input">
            <textarea
              placeholder="Your review..."
              {...register('messages')}
            ></textarea>
            <ErrorMsg msg={errors.messages?.message || ''} />
          </div>
        </div>
        <div className="col-xxl-12">
          <div className="comment-submit">
            <button type="submit" className="it-btn-orange">
              <span>Submit</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ShopReviewForm;
