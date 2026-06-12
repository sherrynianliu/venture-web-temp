import SocialBox from '@/components/social/social-box';

const TagBox = () => {
  return (
    <div className="postbox-tag-box mb-60">
      <div className="row align-items-center">
        <div className="col-xl-7 col-lg-6 col-md-6">
          <div className="postbox-tag d-flex align-items-center">
            <h3 className="postbox-tag-title">Tags:</h3>
            <div className="postbox-tag-content">
              <a className="active" href="#">
                Riding
              </a>
              <a href="#">travel</a>
              <a href="#">taxi</a>
            </div>
          </div>
        </div>
        <div className="col-xl-5 col-lg-6 col-md-6">
          <div className="postbox-share d-flex align-items-center justify-content-md-end">
            <h3 className="postbox-tag-title">Share:</h3>
            <div className="postbox-share-content">
              <SocialBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TagBox;
