import Link from 'next/link';

// Props type
interface BreadcrumbProps {
  title: string;
  subtitle?: string;
}

const Breadcrumb = ({ title, subtitle }: BreadcrumbProps) => {
  return (
    <div
      className="it-breadcrumb-area it-breadcrumb-overlay it-breadcrumb-ptb z-index-1 fix p-relative"
      style={{
        backgroundImage: `url('/assets/img/breadcrumb/breadcrumb.jpg')`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="it-breadcrumb-content z-index-1 text-center">
              <div className="it-breadcrumb-title-box">
                <h3 className="it-breadcrumb-title it-split-text it-split-in-right">
                  {title || 'Title Not Found'}
                </h3>
              </div>
              <div className="it-breadcrumb-list-wrap">
                <div className="it-breadcrumb-list">
                  <span>
                    <Link href="/">Home</Link>
                  </span>
                  <span className="dvdr">&#47;&#47;</span>
                  <i>{subtitle || title || 'No Subtitle'}</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Breadcrumb;
