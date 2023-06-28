
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                RockStock
              </h6>
              <p>
              RockStock: Your Ultimate Destination for Everything Rock Music! Explore the world of rock with our comprehensive website, featuring news, reviews, interviews, and exclusive content from legendary bands and emerging artists. Immerse yourself in the rich history, diverse subgenres, and pulsating energy of rock through our curated playlists, in-depth articles, and captivating videos. Whether you're a die-hard fan or a curious newcomer, RockStock is your go-to resource for all things rock, where the rhythm never stops and the volume is always cranked to 11!"
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  ACDC
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  The Beatles
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Prince
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Pink Floyd
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                 Instagram
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Facebook
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                 Twitter
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Cluj-Napoca,Cluj,RO
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                morardmarian@yahoo.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> 0748148276
              </p>
            
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <div className='text-reset fw-bold' href='#'>
          RockStock
        </div>
      </div>
    </MDBFooter>
  );
}
export default Footer;
