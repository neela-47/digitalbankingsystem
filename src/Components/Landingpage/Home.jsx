
import Features from './Features';
import AllProducts from './AllProducts';
import Banner from './Banner';
import AdditionalFeatures1 from './AdditionalFeatures1';
import AdditionalFeatures2 from './AdditionalFeatures2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
              
            <Features></Features>
          
            <AdditionalFeatures1></AdditionalFeatures1>
            <AdditionalFeatures2></AdditionalFeatures2>
        </div>
    );
};

export default Home;