import { PRODUCT_INFO } from '../constants';
import Section from './Section';

const Design = () => {
  const { design } = PRODUCT_INFO.sections;

  return (
    <Section className="bg-ivory">
      <div className="max-w-3xl mx-auto text-center mb-20">
        <h3 className="text-2xl md:text-4xl font-serif text-brown-900 mb-6">
          {design.title}
        </h3>
        <p className="text-brown-600 leading-relaxed whitespace-pre-line">
          {design.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {design.features.map((feature, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="aspect-[3/4] overflow-hidden bg-sand/20">
              <img
                src={`/eyewear-v2/images/point${idx + 1}.png`}
alt={`디자인 디테일 ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col items-center text-center pt-6 pb-4">
              <span className="text-xs tracking-widest text-brown-400 mb-2">
                POINT 0{idx + 1}
              </span>
              <p className="text-lg text-brown-800">{feature}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Design;
