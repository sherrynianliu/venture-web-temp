'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import ErrorMsg from '../error-msg';

interface FormData {
  name: string;
  email: string;
  phone: string;
  website: string;
  messages: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  name: yup.string().required('Your Name is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string().required('Phone number is required'),
  website: yup.string().required('Website is required'),
  messages: yup
    .string()
    .min(10, 'Note must be at least 10 characters')
    .required('Note is required'),
});

const ContactFormThree = () => {
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
      <div className="it-contact-input-wrap">
        <div className="row gx-20">
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="text" placeholder="Name:" {...register('name')} />
              <ErrorMsg msg={errors.name?.message || ''} />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="email" placeholder="Email:" {...register('email')} />
              <ErrorMsg msg={errors.email?.message || ''} />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input type="text" placeholder="Phone:" {...register('phone')} />
              <ErrorMsg msg={errors.phone?.message || ''} />
            </div>
          </div>
          <div className="col-sm-6 mb-20">
            <div className="it-contact-input-box">
              <input
                type="text"
                placeholder="Website:"
                {...register('website')}
              />
              <ErrorMsg msg={errors.website?.message || ''} />
            </div>
          </div>
          <div className="col-sm-12 mb-30">
            <div className="it-contact-textarea-box">
              <textarea
                placeholder="Message:"
                {...register('messages')}
              ></textarea>
              <ErrorMsg msg={errors.messages?.message || ''} />
            </div>
          </div>
        </div>
        <div className="it-contact-btn">
          <button type="submit" className="it-btn-orange">
            <span>submit comment</span>
          </button>
        </div>
      </div>
    </form>
  );
};
export default ContactFormThree;
