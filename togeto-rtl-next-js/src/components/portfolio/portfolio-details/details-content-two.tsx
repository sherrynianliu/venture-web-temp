import { CheckMarkTwo } from '@/components/svg';

const DetailsContentTwo = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="it-pro-details-title">
          <h4 className="it-pro-details-title">The Results of Our Project</h4>
        </div>
        <div className="it-pro-details-text">
          <p className="mb-40">
            Will give you a complete account of the system, and expound actual
            teachings of the great explorer of the truth, the master- builder of
            human happiness rejects, dislikes, or avoids pleasure
          </p>
          <div className="it-pro-details-list style">
            <ul>
              <li>
                <CheckMarkTwo />
                <div>
                  <span>Support clients</span>
                  <p>
                    Sed ut perspiciatis unde omnis natus voluptatem accusantium
                    doloremque laudantium, totam rem aperiam inventore
                  </p>
                </div>
              </li>
              <li>
                <CheckMarkTwo />
                <div>
                  <span>Solve problems</span>
                  <p>
                    Sed ut perspiciatis unde omnis natus voluptatem accusantium
                    doloremque laudantium, totam rem aperiam inventore
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailsContentTwo;
