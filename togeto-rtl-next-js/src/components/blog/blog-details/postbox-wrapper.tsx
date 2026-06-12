import Image from 'next/image';
import DetailsContent from './details-content';
import TagBox from './tag-box';
import BlogReviewForm from '@/components/form/blog-form';
import { QuoteTwo } from '@/components/svg';
import { IBlogDT } from '@/types/blog-d-t';

import detailsImg from '@/assets/img/blog/details-1-1.jpg';
import detailsImg2 from '@/assets/img/blog/details-1-3.jpg';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const PostboxWrapper = ({ blog }: BlogDetailsProps) => {
  return (
    <div className="postbox-details-wrapper">
      <article className="postbox-item">
        <div className="postbox-thumb text-center mb-40">
          <Image
            className="image-height-auto"
            src={blog?.detailsImage || detailsImg}
            alt="details-img"
            width={904}
            height={460}
          />
        </div>
        <div className="it-blog-meta mb-15">
          <span>
            <i className="fa-regular fa-folder"></i>
            {blog?.category || 'Logistics'}
          </span>
          <span>
            <i className="fa-regular fa-calendar"></i>
            {blog?.publishedDate || 'December 24,2024'}
          </span>
          <span>
            <i className="fa-regular fa-comment"></i>
            Comments({blog?.commentCount || '06'})
          </span>
        </div>
        <div className="postbox-content-box">
          <h4 className="postbox-title">
            {blog?.title ||
              'Streamlining Global Supply Chains Our Logistics Solutions'}
          </h4>
          <div className="postbox-dsc mb-45">
            <p className="mb-15">
              Vestibulum in ipsum velit. Aliquam libero sem asfds asf, rutrum eu
              scelerisque ut, vehicula a erat. Phasellus ac sem sed erat pos se
              quam dignissim. Mauris feugiat, nisi nec dapibuasas a gas dictum,
              ligula nulla gravida ante, non aliquet odio elit ac orci. Curabi
              tinc Nunc eu rhoncus justo, nec mattis risus auris consequat
              viverra sapien id lobortis. Vivamus auctor turpis vel dignissim
              licitudin.
            </p>

            <p>
              Tortor sit penatibus himenaeos pulvinar curabitur blandit taciti
              imperdiet faucibus. vel dapibus lobortis. Suspendisse porttitor
              risus sit amet mauris finibus, vitae pellentesque elit rutrum.
              Integer sed lorem sapien. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Vivamus nec mattis
            </p>
          </div>
          <blockquote className="postbox-blockquote p-relative mb-55">
            <span>
              “Your time is limited, so don’t waste it living someone else’s
              life. <br />
              Don’t be trapped by dogma – which is living with the”.
            </span>
            <i>{blog?.blogAuthor || 'Francis Roman'}</i>
            <span className="quote">
              <QuoteTwo />
            </span>
          </blockquote>

          {/* Details Content  */}
          <DetailsContent />
          {/* Details Content  */}
          <div className="postbox-dsc mb-50">
            <p>
              The first step in navigating your NDIS plan is to fully understand
              it. Your plan will include details about your goals, the support
              you need, and the funding allocated to different support
              categories. Take the time to read through your plan thoroughly and
              ask your NDIS planner or Local Area Coordinator (LAC) any
              questions you may have.
            </p>
          </div>
          <div className="postbox-thumb text-center mb-40">
            <Image
              className="image-height-auto"
              src={detailsImg2}
              alt="details-img"
              width={904}
              height={380}
            />
          </div>
          <h4 className="postbox-title">Creative Approach To Every Project</h4>
          <div className="postbox-dsc mb-55">
            <p>
              We have covered many special events such as fireworks, fairs,
              parades, races, walks, awards ceremonies, fashion shows, sporting
              events, and even a memorial service.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. vestibulum rhoncus, dolor eget
              viverra pretium, dolor ellus aliquet nunc,
            </p>
          </div>
        </div>
        {/* Post Box Tag Area */}
        <TagBox />
        {/* Post Box Tag Area */}

        <div className="postbox-review-form">
          <h4 className="postbox-review-title pb-25">Post Comments</h4>
          <BlogReviewForm />
        </div>
      </article>
    </div>
  );
};
export default PostboxWrapper;
