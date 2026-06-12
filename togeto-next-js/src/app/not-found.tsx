import { Metadata } from 'next';
import ErrorMain from '@/views/error/error';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return <ErrorMain />;
}
