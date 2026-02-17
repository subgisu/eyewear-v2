import { PRODUCT_INFO } from '../constants';
import Section from './Section';

const Reason = () => {
  const { reason } = PRODUCT_INFO.sections;

  return (
<Section className="bg-ivory !pt-0">
      <div className="max-w-4xl mx-auto text-center">
        <span className="block w-px h-16 bg-brown-800/20 mx-auto mb-12" />
        <h3 className="text-2xl md:text-3xl font-serif text-brown-900 mb-10">
          {reason.title}
        </h3>
        <p className="text-base md:text-lg leading-loose text-brown-600 whitespace-pre-line">
          {reason.desc}
        </p>
      </div>
    </Section>
  );
};

export default Reason;
