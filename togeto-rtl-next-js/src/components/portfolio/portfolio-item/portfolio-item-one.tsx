import Image from 'next/image';
import Link from 'next/link';
import { RightArrowUpTwo } from '@/components/svg';
import { IPortfolioDT } from '@/types/portfolio-d-t';

interface PortfolioItemProps {
  portfolio: IPortfolioDT;
}

const PortfolioItemOne = ({ portfolio }: PortfolioItemProps) => {
  return (
    <div className="it-portfolio-item p-relative zoom">
      <div className="it-portfolio-thumb img-zoom">
        <Image
          className="w-100 image-height-auto"
          src={portfolio.image}
          alt={`portfolio-img-${portfolio.id}`}
          width={416}
          height={321}
        />
      </div>
      <div className="it-portfolio-content d-flex justify-content-between">
        <div>
          <span>{portfolio.subtitle}</span>
          <h4 className="it-portfolio-title">
            <Link
              className="border-line-white"
              href={`/portfolio-details/${portfolio.id}`}
            >
              {portfolio.title}
            </Link>
          </h4>
        </div>
        <div className="it-portfolio-item-arrow">
          <Link href={`/portfolio-details/${portfolio.id}`}>
            <RightArrowUpTwo />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PortfolioItemOne;
