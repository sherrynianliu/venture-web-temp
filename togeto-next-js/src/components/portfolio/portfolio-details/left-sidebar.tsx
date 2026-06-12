import PortfolioForm from '@/components/form/portfolio-form';
import SocialBox from '@/components/social/social-box';

const LeftSidebar = () => {
  return (
    <div className="it-pro-details-left">
      <div className="it-pro-details-info mb-65">
        <h5 className="it-pro-details-title-sm mb-30">Project info</h5>
        <ul>
          <li>
            <span>Clients</span>
            <a href="#">Ordian it In USA</a>
          </li>
          <li>
            <span>Project Type</span>
            <a href="#">Digital Product Design</a>
          </li>
          <li>
            <span>Date</span>
            <a href="#">24/10/20024</a>
          </li>
          <li>
            <span>Website</span>
            <a href="mailto:Togeto.com">Togeto.com</a>
          </li>
          <li>
            <span>Location</span>
            <a
              target="_blank"
              href="https://www.google.com/maps/@15.8371068,15.5557766,10.33z?entry=ttu&g_ep=EgoyMDI1MDIwNC4wIKXMDSoASAFQAw%3D%3D"
            >
              1654 Emily Renzelli Boulevard USA
            </a>
          </li>
          <li>
            <span>Clients</span>
            <a href="#">Ordian it In USA</a>
          </li>
        </ul>
        <div className="it-pro-details-social">
          <SocialBox />
        </div>
      </div>
      <div className="it-information-left">
        <PortfolioForm />
      </div>
    </div>
  );
};
export default LeftSidebar;
