'use client';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import ErrorMsg from '../error-msg';

// Type Declaration
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  rating: string;
  message: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  rating: yup.string().required('Rating is required'),
  message: yup
    .string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const BlogReviewForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  // Handler for Submit the form
  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit}>
      <div className="row gx-20">
        <div className="col-sm-6 mb-25">
          <div className="postbox-review-input">
            <input
              type="text"
              placeholder="first name:"
              {...register('firstName')}
            />
            <ErrorMsg msg={errors.firstName?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6 mb-25">
          <div className="postbox-review-input">
            <input
              type="text"
              placeholder="last name:"
              {...register('lastName')}
            />
            <ErrorMsg msg={errors.lastName?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6 mb-25">
          <div className="postbox-review-input">
            <input
              type="email"
              placeholder="email address:"
              {...register('email')}
            />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-sm-6 mb-25">
          <div className="postbox-review-input">
            <input type="text" placeholder="rating:" {...register('rating')} />
            <ErrorMsg msg={errors.rating?.message || ''} />
          </div>
        </div>
        <div className="col-12 mb-30">
          <div className="postbox-review-textarea">
            <textarea
              placeholder="write here..."
              {...register('message')}
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ''} />
          </div>
        </div>
      </div>
      <div className="postbox-review-button">
        <button className="it-btn-orange" type="submit">
          <span>Submit Comment</span>
        </button>
      </div>
    </form>
  );
};
export default BlogReviewForm;
